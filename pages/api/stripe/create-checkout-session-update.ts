import type { NextApiRequest, NextApiResponse } from 'next';

import { prisma } from '@/server/prisma/client';
import { createSessionUpdate } from '@/server/stripe/session';
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
      const consumerId = payment?.stripe_customer_id;
      const subscriptionId = payment?.stripe_subscription_id;

      if (!consumerId || !subscriptionId)
        return res.status(404).end('Not Found id');

      const session = await createSessionUpdate(consumerId, subscriptionId);

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
