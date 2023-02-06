import type {
  GetServerSidePropsContext,
  NextApiRequest,
  NextApiResponse,
} from 'next';

import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { createClient } from '@supabase/supabase-js';

/* Create Server Client */
export const getServerSupabaseClient = (
  ctx: GetServerSidePropsContext | { req: NextApiRequest; res: NextApiResponse }
) => createServerSupabaseClient(ctx);

/* Create Admin Client */
export const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_ROLE_KEY || '',
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  }
);
