import type { ErrorResponse } from '@/types/error';
import type { Account, Profile } from '@prisma/client';
import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

import { prisma } from '@/server/prisma/client';
import { getSessionUser } from '@/server/supabase/auth';

type Response =
  | Account
  | (Account & { profile: Profile })
  | null
  | ErrorResponse;

const ProtectedRoute: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse<Response>
) => {
  const user = await getSessionUser({ req, res });

  const method = req.method;
  if (method === 'GET') {
    if (!user) return res.json(null);
    try {
      const account = await prisma.account.findUnique({
        where: {
          uid: user.id,
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

  if (!user)
    return res.status(401).json({
      status: 500,
      message: 'internal_server_error',
    });

  /* 新規Accountの作成 */
  if (method === 'POST') {
    try {
      /* Initial User */
      const account = await prisma.account.create({
        data: req.body,
      });
      await prisma.payment.create({
        data: {
          id: account.uid,
        },
      });
      await prisma.profile.create({
        data: {
          id: account.uid,
          name: account.name,
        },
      });
      await prisma.status.create({
        data: {
          id: account.uid,
        },
      });

      return res.json(account);
    } catch (error) {
      return res.status(500).json({
        status: 500,
        message: 'internal_server_error',
      });
    }
  }

  /* Accountの更新 */
  if (method === 'PATCH') {
    try {
      await prisma.profile.update({
        where: {
          id: user.id,
        },
        data: {
          name: req.body.name,
          introduction: req.body.introduction,
        },
        include: {
          account: true,
        },
      });
      const response = await prisma.account.update({
        where: {
          uid: user.id,
        },
        data: {
          os: req.body.os,
          github_id: req.body.github_id,
          zenn_id: req.body.zenn_id,
        },
      });

      return res.json(response);
    } catch (error: any) {
      if (error?.code === 'P2002') {
        return res.status(400).json({
          status: 400,
          message: `The ${error?.meta?.target[0]} is already in use`,
        });
      }

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
