import type { NextApiHandler } from 'next';

import { getServerSupabaseClient } from '@/utils/supabase/client';

const ProtectedRoute: NextApiHandler = async (req, res) => {
  const supabase = getServerSupabaseClient({ req, res });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session)
    return res.status(401).json({
      error: 'not_authenticated',
      description:
        'The user does not have an active session or is not authenticated',
    });

  const { data } = await supabase.from('test').select('*');
  res.json(data);
};

export default ProtectedRoute;
