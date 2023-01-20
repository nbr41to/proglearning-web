import type { NextApiHandler } from 'next';

import { getAccount } from '@/server/prisma/account';
import { getSessionUser } from '@/server/supabase/auth';

const ProtectedRoute: NextApiHandler = async (req, res) => {
  const user = await getSessionUser({ req, res });

  if (!user)
    return res.status(401).json({
      error: 'not_authenticated',
      description:
        'The user does not have an active session or is not authenticated',
    });

  const account = await getAccount(user.id);

  res.json(account);
};

export default ProtectedRoute;
