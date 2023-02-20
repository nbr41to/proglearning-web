import type { AccountPrismaCreateParams } from '@/models/account/types';
import type { ErrorResponse } from '@/types/error';
import type { Account } from '@prisma/client';
import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

import { prisma } from '@/server/prisma/client';
import { getSessionUser } from '@/server/supabase/auth';

const ProtectedRoute: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse<Account | ErrorResponse>
) => {
  const user = await getSessionUser({ req, res });
  if (!user)
    return res.status(401).json({
      status: 401,
      message: 'unauthorized',
    });

  const method = req.method;

  /* 新規Accountの新規作成 */
  if (method === 'POST') {
    try {
      const body = req.body as AccountPrismaCreateParams;
      if (user.id !== body.uid)
        return res.status(401).json({
          status: 401,
          message: 'unauthorized',
        });

      const uid = user.id;

      /* Check Exist Account */
      const existAccount = await prisma.account.findUnique({
        where: {
          uid,
        },
      });

      if (existAccount)
        return res.status(400).json({
          status: 400,
          message: 'already_exist_account',
        });

      /* Initialize Account */
      const account = await prisma.account.upsert({
        where: { uid },
        update: {},
        create: {
          ...body,
          profile: {
            create: {
              name: body.name,
            },
          },
          payment: {
            create: {},
          },
          status: {
            create: {},
          },
        },
      });

      return res.json(account);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);

      return res.status(500).json({
        status: 500,
        message: 'internal_server_error',
      });
    }
  }

  res.setHeader('Allow', ['POST']);
  res.status(405).end('Method Not Allowed');
};

export default ProtectedRoute;
