import type { ErrorResponse } from '@/types/error';
import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

import { prisma } from '@/server/prisma/client';
import { deleteUser } from '@/server/supabase/admin';
import { getSessionUser } from '@/server/supabase/auth';

type Response = boolean | ErrorResponse;

const ProtectedRoute: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse<Response>
) => {
  const user = await getSessionUser({ req, res });

  const method = req.method;
  if (method === 'DELETE') {
    if (!user) return res.json(false);
    try {
      const deleteParamsId = {
        where: {
          id: user.id,
        },
      };
      const deleteParamsUid = {
        where: {
          uid: user.id,
        },
      };
      await prisma.$transaction(async (tx) => {
        await tx.payment.delete(deleteParamsId);
        await tx.profile.delete(deleteParamsId);
        await tx.status.delete(deleteParamsId);
        await tx.lesson.deleteMany(deleteParamsUid);
        await tx.account.delete(deleteParamsUid);
        await deleteUser(user.id);
      });
      // await prisma.$transaction([
      //   prisma.payment.delete(deleteParamsId),
      //   prisma.profile.delete(deleteParamsId),
      //   prisma.status.delete(deleteParamsId),
      //   prisma.lesson.deleteMany(deleteParamsUid),
      //   prisma.account.delete(deleteParamsUid),
      //   deleteUser(user.id),
      // ]);

      return res.json(true);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);

      return res.status(500).json({
        status: 500,
        message: 'internal_server_error',
      });
    }
  }

  res.setHeader('Allow', 'DELETE');
  res.status(405).end('Method Not Allowed');
};

export default ProtectedRoute;
