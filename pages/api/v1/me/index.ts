import type {
  AccountValidatedUpdateParams,
  AccountValidatedCreateParams,
  AccountQueryParams,
  Account,
} from '@/models/account/types';
import type { ErrorResponse } from '@/types/error';
import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

import { prisma } from '@/server/prisma/client';
import { getSessionUser } from '@/server/supabase/auth';

const ProtectedRoute: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse<Account | null | ErrorResponse>
) => {
  const user = await getSessionUser({ req, res });
  if (!user)
    return res.status(401).json({
      status: 401,
      message: 'unauthorized',
    });

  const uid = user.id;
  const method = req.method;

  /* Accountの取得 */
  if (method === 'GET') {
    try {
      const query = req.query as AccountQueryParams;
      const isEmptyQuery =
        Object.keys(query).length === 0 && query.constructor === Object;

      const account = await prisma.account.findUnique({
        where: { uid },
        ...(isEmptyQuery ? undefined : { include: query }),
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

  /* Accountの更新 */
  if (method === 'PATCH') {
    try {
      const body = req.body as AccountValidatedUpdateParams;
      const account = await prisma.account.update({
        where: { uid },
        data: body,
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

  /* 新規Accountの作成 */
  if (method === 'POST') {
    try {
      const body = req.body as AccountValidatedCreateParams;

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
          uid,
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

  res.setHeader('Allow', ['GET', 'POST', 'PATCH']);
  res.status(405).end('Method Not Allowed');
};

export default ProtectedRoute;
