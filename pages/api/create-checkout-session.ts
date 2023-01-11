import type { User } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

import { prisma } from '@/utils/prisma/client';
import { createCustomer } from '@/utils/stripe/customer';
import { createSession } from '@/utils/stripe/session';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const user = req.body.user as User;
    try {
      let consumerId = user.stripe_customer_id;

      if (!consumerId) {
        /* customerの新規作成 */
        const customer = await createCustomer({
          name: user.name || '',
          email: user.email || '',
          metadata: {
            uid: user.uid || '',
          },
        });

        consumerId = customer.id;

        await prisma.user.update({
          where: {
            uid: user.uid as string,
          },
          data: {
            stripe_customer_id: consumerId,
          },
        });
      }

      const session = await createSession(consumerId);

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
