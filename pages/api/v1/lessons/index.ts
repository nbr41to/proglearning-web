import type { MyLesson, MyLessonCreateParams } from '@/models/myLesson/types';
import type { ErrorResponse } from '@/types/error';
import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

import { prisma } from '@/server/prisma/client';
import { getSessionUser } from '@/server/supabase/auth';

const ProtectedRoute: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse<MyLesson[] | MyLesson | ErrorResponse>
) => {
  const user = await getSessionUser({ req, res });
  if (!user)
    return res.status(401).json({
      status: 401,
      message: 'unauthorized',
    });

  const uid = user.id;
  const method = req.method;

  /* Lessonリストの取得 */
  if (method === 'GET') {
    try {
      const lessons = await prisma.lesson.findMany({
        where: { id: uid },
      });

      return res.json(lessons);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);

      return res.status(500).json({
        status: 500,
        message: 'internal_server_error',
      });
    }
  }

  /* Lessonの新規作成 */
  if (method === 'POST') {
    try {
      const body = req.body as MyLessonCreateParams;
      const lesson = await prisma.lesson.create({
        data: {
          ...body,
          account: {
            connect: { uid },
          },
        },
      });

      return res.json(lesson);
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
