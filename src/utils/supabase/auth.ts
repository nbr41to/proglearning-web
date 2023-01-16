import type {
  GetServerSidePropsContext,
  NextApiRequest,
  NextApiResponse,
} from 'next';

import { getServerSupabaseClient, supabase } from './client';
import { baseUrl } from '@/utils/url';

export const signInWithGoogle = async () => {
  await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: baseUrl + '/entry',
    },
  });
};

export const getAuthUser = async () => {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user;
};

export const signOut = async () => {
  await supabase.auth.signOut();
  window.location.href = '/';
};

/* ServerSideで認証情報を取得 */
export const getServerSideSession = async (
  ctx: GetServerSidePropsContext | { req: NextApiRequest; res: NextApiResponse }
) => {
  const supabase = getServerSupabaseClient(ctx);

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return session;
};
