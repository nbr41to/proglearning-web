import type { NextApiRequest, NextApiResponse } from 'next';

import { prisma } from '@/server/prisma/client';
import { createCustomer } from '@/server/stripe/customer';
import { createCheckoutSession } from '@/server/stripe/session';
import { getSessionUser } from '@/server/supabase/auth';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const user = await getSessionUser({ req, res });
  if (!user) return res.status(401).end('Unauthorized');

  if (req.method === 'POST') {
    const uid = req.body.uid as string;
    const payment = await prisma.payment.findUnique({
      where: {
        id: uid,
      },
    });
    if (!payment) return res.status(404).end('Not Found Account');

    try {
      if (payment.stripe_checkout_status === 'completed') {
        res.status(400).json({
          error: {
            statusCode: 400,
            message: 'Already checked out.',
          },
        });
      }

      let customerId = payment?.stripe_customer_id;

      /* Stripeのcustomerを作成 */
      if (!customerId) {
        const customer = await createCustomer({
          name: user.user_metadata.name || '',
          email: user.email || '',
          metadata: {
            uid: user.id || '',
          },
        });

        customerId = customer.id;

        await prisma.payment.update({
          where: {
            id: payment.id as string,
          },
          data: {
            stripe_customer_id: customerId,
          },
        });
      }

      /* 支払い方法の登録 */
      const priceId =
        req.body.plan === 'monthly'
          ? process.env.STRIPE_CLOSER_MONTHLY_PLAN_ID ?? ''
          : process.env.STRIPE_CLOSER_YEARLY_PLAN_ID ?? '';
      const session = await createCheckoutSession({
        customerId,
        priceId,
      });

      return res.status(200).json({ sessionId: session.id });
    } catch (err: any) {
      // eslint-disable-next-line no-console
      console.log(err);
      res
        .status(500)
        .json({ error: { statusCode: 500, message: err.message } });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
