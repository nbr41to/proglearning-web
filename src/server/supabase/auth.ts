import type {
  GetServerSidePropsContext,
  NextApiRequest,
  NextApiResponse,
} from 'next';

import { getServerSupabaseClient } from '@/server/supabase/client';

export const getSessionUser = async (
  ctx: GetServerSidePropsContext | { req: NextApiRequest; res: NextApiResponse }
) => {
  const supabase = getServerSupabaseClient(ctx);

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return session ? session.user : null;
};
