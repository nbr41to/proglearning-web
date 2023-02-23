import type { Profile } from '@/models/profile/types';
import type { ErrorResponse } from '@/types/error';
import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

import { prisma } from '@/server/prisma/client';
import { getSessionUser } from '@/server/supabase/auth';

const ProtectedRoute: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse<Profile | ErrorResponse>
) => {
  const user = await getSessionUser({ req, res });
  if (!user)
    return res.status(401).json({
      status: 401,
      message: 'unauthorized',
    });

  const method = req.method;

  /* Profileの取得 */
  if (method === 'GET') {
    try {
      const uid = req.query.uid as string;
      const profile = await prisma.profile.findUnique({
        where: { id: uid },
      });
      if (!profile)
        return res.status(404).json({
          status: 404,
          message: 'not_found_profile',
        });

      return res.json(profile);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);

      return res.status(500).json({
        status: 500,
        message: 'internal_server_error',
      });
    }
  }

  res.setHeader('Allow', 'GET');
  res.status(405).end('Method Not Allowed');
};

export default ProtectedRoute;
