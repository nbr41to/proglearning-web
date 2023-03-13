import { baseUrl } from '@/utils/url';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { useSWRConfig } from 'swr';

/* 認証に関する処理 */
export const useSupabaseAuth = () => {
  const router = useRouter();
  const supabase = useSupabaseClient();
  const { mutate } = useSWRConfig();

  const signInWithGoogle = useCallback(
    async (redirectTo?: string) => {
      await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: baseUrl + (redirectTo ? redirectTo : '/dashboard'),
        },
      });
    },
    [supabase.auth]
  );

  const signOut = useCallback(async () => {
    await supabase.auth.signOut();
    /* SWRのcacheを削除 */
    await mutate(
      () => true, // which cache keys are updated
      undefined, // update cache data to `undefined`
      { revalidate: false } // do not revalidate
    );
  }, [supabase.auth, mutate]);

  /* Development only */
  const developLogin = useCallback(async () => {
    await supabase.auth.signInWithPassword({
      email: process.env.NEXT_PUBLIC_TEST_USER_EMAIL || '',
      password: process.env.NEXT_PUBLIC_TEST_USER_PASSWORD || '',
    });
    await router.push('/dashboard');
  }, [router, supabase.auth]);

  return { signInWithGoogle, signOut, developLogin };
};
