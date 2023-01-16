import type { Account } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

import { prisma } from '@/utils/prisma/client';
import { createCustomer } from '@/utils/stripe/customer';
import { createSession } from '@/utils/stripe/session';
import { getServerSideSession } from '@/utils/supabase/auth';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = getServerSideSession({ req, res });
  if (!session) return res.status(401).end('Unauthorized');

  if (req.method === 'POST') {
    const account = req.body.account as Account;
    try {
      let consumerId = account.stripe_customer_id;

      if (!consumerId) {
        /* customerの新規作成 */
        const customer = await createCustomer({
          name: account.name || '',
          email: account.email || '',
          metadata: {
            uid: account.uid || '',
          },
        });

        consumerId = customer.id;

        await prisma.account.update({
          where: {
            uid: account.uid as string,
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
