import type { Todo } from '@/models/todo/types';
import type { ErrorResponse } from '@/types/error';
import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

import { prisma } from '@/server/prisma/client';
import { getSessionUser } from '@/server/supabase/auth';

const ProtectedRoute: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse<Todo | ErrorResponse>
) => {
  const user = await getSessionUser({ req, res });
  if (!user)
    return res.status(401).json({
      status: 401,
      message: 'unauthorized',
    });

  const method = req.method;

  /* Statusの更新 */
  if (method === 'PATCH') {
    try {
      const id = parseInt(req.query.id as string);
      const body = req.body;
      const uid = user.id;
      if (uid !== body?.uid)
        return res.status(401).json({
          status: 401,
          message: 'unauthorized',
        });

      const status = await prisma.todo.update({
        where: { id },
        data: {
          ...body,
        },
      });

      return res.json(status);
    } catch (error) {
      return res.status(500).json({
        status: 500,
        message: 'internal_server_error',
      });
    }
  }

  res.setHeader('Allow', ['PATCH']);
  res.status(405).end('Method Not Allowed');
};

export default ProtectedRoute;
