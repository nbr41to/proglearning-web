import { baseUrl } from '@/utils/url';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/router';

export const useAuth = () => {
  const router = useRouter();
  const supabase = useSupabaseClient();

  const signInWithGoogle = async (redirectTo?: string) => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: redirectTo ? redirectTo : baseUrl + '/dashboard',
      },
    });
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    await router.push('/login');
  };

  /* Development only */
  const developLogin = async () => {
    await supabase.auth.signInWithPassword({
      email: process.env.NEXT_PUBLIC_TEST_USER_EMAIL || '',
      password: process.env.NEXT_PUBLIC_TEST_USER_PASSWORD || '',
    });
    await router.push('/dashboard');
  };

  return { signInWithGoogle, signOut, developLogin };
};
