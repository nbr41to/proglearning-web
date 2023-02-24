import type { FC, ReactNode } from 'react';

import { Layout } from '@/components/layouts/Layout';
import { LoadingOverlay } from '@/components/layouts/LoadingOverlay';
import { useGetMeStatus } from '@/hooks/apiHook/useGetMeStatus';
import { useLoading } from '@/hooks/stateHook/useLoading';
import { useSupabaseAuth } from '@/hooks/supabaseHook/useSupabaseAuth';
import { useSpotlight } from '@mantine/spotlight';
import { useUser } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

type Props = {
  children: ReactNode;
};

export const LayoutWrapper: FC<Props> = ({ children }) => {
  const router = useRouter();
  const user = useUser();
  const { data: status, isLoading: isLoadingStatus } = useGetMeStatus();
  const { signOut } = useSupabaseAuth();
  const spotlight = useSpotlight();
  const loading = useLoading(isLoadingStatus);

  const handleStart = (url: string) => url !== router.asPath && loading.on();
  const handleComplete = () => loading.off();

  useEffect(() => {
    if (!user) return;
    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <>
      <Layout
        user={user}
        status={status}
        onClickSearchButton={() => spotlight.openSpotlight()}
        onSignOut={handleSignOut}
      >
        {children}
      </Layout>
      <LoadingOverlay visible={loading.is} />
    </>
  );
};
