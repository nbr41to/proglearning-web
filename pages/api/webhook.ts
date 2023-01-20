import type { NextApiRequest, NextApiResponse } from 'next';
import type { Readable } from 'node:stream';
import type { Stripe } from 'stripe';

import { prisma } from '@/server/prisma/client';
import { sendMessage } from '@/server/slack/chat';
import { stripe } from '@/server/stripe/client';

/* request.bodyを自前でparseする */
async function buffer(readable: Readable) {
  const chunks = [];
  for await (const chunk of readable) {
    chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
  }

  return Buffer.concat(chunks);
}

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const buf = await buffer(req);
    const sig = req.headers['stripe-signature'];
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET || '';
    let event: Stripe.Event;

    try {
      if (!sig || !webhookSecret) return;
      event = stripe.webhooks.constructEvent(buf, sig, webhookSecret);
    } catch (err: any) {
      // eslint-disable-next-line no-console
      console.error(`❌ Error message: ${err.message}`);

      return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    try {
      if (event.type === 'customer.subscription.updated') {
        const subscription = event.data.object as Stripe.Subscription;
        const customerId = subscription.customer;
        /* DBの決済Statusを変更 */
        await prisma.account.update({
          where: {
            stripe_customer_id: customerId as string,
          },
          data: {
            stripe_subscription_status: subscription.status,
          },
        });
      }

      if (event.type === 'checkout.session.completed') {
        const session = event.data.object as Stripe.Checkout.Session;

        if (session.mode === 'subscription') {
          const customerId = session.customer;
          /* DBの決済Statusを変更 */
          const user = await prisma.account.update({
            where: {
              stripe_customer_id: customerId as string,
            },
            data: {
              stripe_checkout_status: session.status,
            },
          });
          /* Slackに通知 */
          const { name, email, os } = user;
          await sendMessage({
            channel: 'G01NLM1CJK1',
            text: `お申し込みがありました！\n名前: ${name}\n${email}\nOS: ${os}`,
          });
        }
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);

      return res
        .status(400)
        .send('Webhook error: "Webhook handler failed. View logs."');
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
  res.end();
}
