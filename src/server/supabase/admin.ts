import { supabaseAdmin } from '@/server/supabase/client';

export const deleteUser = async (uid: string) => {
  supabaseAdmin.auth.admin.deleteUser(uid);
};
