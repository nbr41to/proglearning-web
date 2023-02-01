import { supabase } from './client';
import { baseUrl } from '@/utils/url';

export const signInWithGoogle = async (redirectTo?: string) => {
  await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: redirectTo ? redirectTo : baseUrl + '/dashboard',
    },
  });
};

/* TODO: これ使うとログアウトできてない auth-helperのを使う */
export const signOut = async () => {
  await supabase.auth.signOut();
};
