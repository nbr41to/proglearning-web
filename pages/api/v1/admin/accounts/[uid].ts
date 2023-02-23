import type { NextApiHandler } from 'next';

import { prisma } from '@/server/prisma/client';
import { deleteUser } from '@/server/supabase/admin';
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

  /* [ADMIN] UserとAccountの削除 */
  if (method === 'DELETE') {
    if (!user) return res.json(false);
    try {
      const uid = req.query.uid as string;
      const deleteParamsId = {
        where: {
          id: uid,
        },
      };
      const deleteParamsUid = {
        where: {
          uid,
        },
      };
      await prisma.$transaction(async (tx) => {
        await tx.payment.delete(deleteParamsId);
        await tx.profile.delete(deleteParamsId);
        await tx.status.delete(deleteParamsId);
        await tx.lesson.deleteMany(deleteParamsUid);
        await tx.account.delete(deleteParamsUid);
        await deleteUser(uid);
      });

      return res.json(true);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);

      return res.status(500).json({
        error: 'internal_server_error',
        description: 'An internal server error occurred',
      });
    }
  }

  res.setHeader('Allow', ['DELETE']);
  res.status(405).end('Method Not Allowed');
};

export default ProtectedRoute;
