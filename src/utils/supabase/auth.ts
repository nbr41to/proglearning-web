import { supabase } from './client';
import { baseUrl } from '@/utils/url';

export const signInWithGoogle = async () => {
  await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: baseUrl + '/entry',
    },
  });
};

export const signOut = async () => {
  await supabase.auth.signOut();
  window.location.href = '/';
};
