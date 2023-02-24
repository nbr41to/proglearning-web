import type { MyLesson, MyLessonUpdateParams } from '@/models/myLesson/types';
import type { ErrorResponse } from '@/types/error';
import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

import { prisma } from '@/server/prisma/client';
import { getSessionUser } from '@/server/supabase/auth';

const ProtectedRoute: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse<MyLesson | null | ErrorResponse>
) => {
  const user = await getSessionUser({ req, res });
  if (!user)
    return res.status(401).json({
      status: 401,
      message: 'unauthorized',
    });

  // const uid = user.id;
  const method = req.method;
  const lessonId = req.query.lessonId as string;

  /* Lessonの取得 */
  if (method === 'GET') {
    try {
      const lesson = await prisma.lesson.findUnique({
        where: { id: lessonId },
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

  /* Lessonの更新 */
  if (method === 'PATCH') {
    try {
      const body = req.body as MyLessonUpdateParams;
      const lesson = await prisma.lesson.update({
        where: { id: lessonId },
        data: {
          ...body,
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

  res.setHeader('Allow', ['GET', 'PATCH']);
  res.status(405).end('Method Not Allowed');
};

export default ProtectedRoute;
