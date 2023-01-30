import type { NextApiHandler } from 'next';

import { prisma } from '@/server/prisma/client';
import { getSessionUser } from '@/server/supabase/auth';

const ProtectedRoute: NextApiHandler = async (req, res) => {
  const user = await getSessionUser({ req, res });
  const isAdmin = user?.id === process.env.NEXT_PUBLIC_ADMIN_UID || false;

  if (!user || !isAdmin)
    return res.status(401).json({
      error: 'not_authenticated',
      description:
        'The user does not have an active session or is not authenticated',
    });

  const method = req.method;
  if (method === 'GET') {
    try {
      const accounts = await prisma.account.findMany({
        include: {
          payment: true,
          profile: true,
          status: true,
        },
      });
      res.json(accounts);
    } catch (error) {
      res.status(500).json({
        error: 'internal_server_error',
        description: 'An internal server error occurred',
      });
    }
  }

  res.setHeader('Allow', ['GET', 'POST', 'PATCH']);
  res.status(405).end('Method Not Allowed');
};

export default ProtectedRoute;
