import { supabase } from './client';
import { baseUrl } from '@/utils/url';

export const signInWithGoogle = async (redirectTo?: string) => {
  await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: baseUrl + (redirectTo ? redirectTo : '/dashboard'),
    },
  });
};

export const signOut = async () => {
  await supabase.auth.signOut();
  window.location.href = '/';
};
