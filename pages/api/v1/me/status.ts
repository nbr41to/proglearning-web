import type {
  Status,
  StatusValidatedUpdateParams,
} from '@/models/status/types';
import type { ErrorResponse } from '@/types/error';
import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

import { prisma } from '@/server/prisma/client';
import { getSessionUser } from '@/server/supabase/auth';

const ProtectedRoute: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse<Status | null | ErrorResponse>
) => {
  const user = await getSessionUser({ req, res });
  if (!user)
    return res.status(401).json({
      status: 401,
      message: 'unauthorized',
    });

  const uid = user.id;
  const method = req.method;

  /* Statusの取得 */
  if (method === 'GET') {
    try {
      const status = await prisma.status.findUnique({
        where: { id: uid },
      });

      return res.json(status);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);

      return res.status(500).json({
        status: 500,
        message: 'internal_server_error',
      });
    }
  }

  /* Statusの更新 */
  if (method === 'PATCH') {
    try {
      const body = req.body as StatusValidatedUpdateParams;
      const status = await prisma.status.update({
        where: { id: uid },
        data: {
          ...body,
        },
      });

      return res.json(status);
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
