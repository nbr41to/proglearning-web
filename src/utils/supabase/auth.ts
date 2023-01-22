import { supabase } from './client';

export const signInWithGoogle = async (redirectTo?: string) => {
  await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: redirectTo || '/dashboard',
    },
  });
};

export const signOut = async () => {
  await supabase.auth.signOut();
  window.location.href = '/';
};
