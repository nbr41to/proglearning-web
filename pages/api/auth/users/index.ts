import type { NextApiHandler } from 'next';

import { prisma } from '@/server/prisma/client';
import { getSessionUser } from '@/server/supabase/auth';

const ProtectedRoute: NextApiHandler = async (req, res) => {
  const user = await getSessionUser({ req, res });

  if (!user)
    return res.status(401).json({
      error: 'not_authenticated',
      description:
        'The user does not have an active session or is not authenticated',
    });

  const method = req.method;
  if (method === 'GET') {
    try {
      const account = await prisma.account.findUnique({
        where: {
          uid: user.id,
        },
      });
      res.json(account);
    } catch (error) {
      res.status(500).json({
        error: 'internal_server_error',
        description: 'An internal server error occurred',
      });
    }
  }

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

      res.json(account);
    } catch (error) {
      res.status(500).json({
        error: 'internal_server_error',
        description: 'An internal server error occurred',
      });
    }
  }

  res.status(405).json({
    error: 'method_not_allowed',
    description: 'The method is not allowed for the requested URL',
  });
};

export default ProtectedRoute;
