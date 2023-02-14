import type { NextApiRequest, NextApiResponse } from 'next';

import { prisma } from '@/server/prisma/client';
import { createPortalSession } from '@/server/stripe/session';
import { getSessionUser } from '@/server/supabase/auth';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const user = await getSessionUser({ req, res });

  if (req.method === 'POST') {
    const uid = req.body.uid as string;
    if (!user || user.id !== uid) return res.status(401).end('Unauthorized');

    try {
      const payment = await prisma.payment.findUnique({
        where: {
          id: uid,
        },
      });
      if (!payment?.stripe_customer_id)
        return res.status(404).end('Not Found Customer ID');

      /* カスタマーポータルのURLを発行 */
      const session = await createPortalSession(payment.stripe_customer_id);

      return res.status(200).json({ portalUrl: session.url });
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
