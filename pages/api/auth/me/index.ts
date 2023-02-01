import type { NextApiHandler } from 'next';

import { prisma } from '@/server/prisma/client';
import { getSessionUser } from '@/server/supabase/auth';

const ProtectedRoute: NextApiHandler = async (req, res) => {
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
        error: 'internal_server_error',
        description: 'An internal server error occurred',
      });
    }
  }

  if (!user)
    return res.status(401).json({
      error: 'not_authenticated',
      description:
        'The user does not have an active session or is not authenticated',
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
        error: 'internal_server_error',
        description: 'An internal server error occurred',
      });
    }
  }

  /* Accountの更新 */
  if (method === 'PATCH') {
    try {
      await prisma.account.update({
        where: {
          uid: user.id,
        },
        data: {
          os: req.body.os,
          github_id: req.body.github_id,
          zenn_id: req.body.zenn_id,
        },
      });
      await prisma.profile.update({
        where: {
          id: user.id,
        },
        data: {
          name: req.body.name,
          introduction: req.body.introduction,
        },
      });

      return res.json(true);
    } catch (error) {
      return res.status(500).json({
        error: 'internal_server_error',
        description: 'An internal server error occurred',
      });
    }
  }

  res.setHeader('Allow', ['GET', 'POST', 'PATCH']);
  res.status(405).end('Method Not Allowed');
};

export default ProtectedRoute;
