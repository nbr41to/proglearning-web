import type {
  GetServerSidePropsContext,
  NextApiRequest,
  NextApiResponse,
} from 'next';

import {
  createBrowserSupabaseClient,
  createServerSupabaseClient,
} from '@supabase/auth-helpers-nextjs';

/* Browser Client */
export const supabase = createBrowserSupabaseClient();

/* Create Server Client */
export const getServerSupabaseClient = (
  ctx: GetServerSidePropsContext | { req: NextApiRequest; res: NextApiResponse }
) => createServerSupabaseClient(ctx);
