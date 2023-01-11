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

export const getAuthUser = async () => {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user;
};
