import type {
  GetServerSidePropsContext,
  NextApiRequest,
  NextApiResponse,
} from 'next';

import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs';

/* Create Server Client */
export const getServerSupabaseClient = (
  ctx: GetServerSidePropsContext | { req: NextApiRequest; res: NextApiResponse }
) => createServerSupabaseClient(ctx);
