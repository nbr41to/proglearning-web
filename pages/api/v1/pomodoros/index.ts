import type { Pomodoro } from '@/models/pomodoro/types';
import type { ErrorResponse } from '@/types/error';
import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

import { prisma } from '@/server/prisma/client';
import { getSessionUser } from '@/server/supabase/auth';

const ProtectedRoute: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse<Pomodoro | Pomodoro[] | ErrorResponse>
) => {
  const user = await getSessionUser({ req, res });
  if (!user)
    return res.status(401).json({
      status: 401,
      message: 'unauthorized',
    });

  const method = req.method;

  /* Todoを取得 */
  if (method === 'GET') {
    try {
      const pomodoros = await prisma.pomodoro.findMany({
        where: {
          uid: user.id,
        },
      });

      return res.json(pomodoros);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);

      return res.status(500).json({
        status: 500,
        message: 'internal_server_error',
      });
    }
  }

  /* Todoの新規作成 */
  if (method === 'POST') {
    try {
      // const todo = await prisma.pomodoro.create({
      //   data: {
      //     ...(req.body as TodoCreateParams),
      //     uid: user.id,
      //   },
      // });
      // return res.json(todo);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);

      return res.status(500).json({
        status: 500,
        message: 'internal_server_error',
      });
    }
  }

  res.setHeader('Allow', ['GET', 'POST']);
  res.status(405).end('Method Not Allowed');
};

export default ProtectedRoute;
