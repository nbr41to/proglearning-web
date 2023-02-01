import type { Status } from '@prisma/client';
import type { User } from '@supabase/auth-helpers-react';
import type { FC, ReactNode } from 'react';

import { Layout } from '@/components/layouts/Layout';
import { LoadingOverlay } from '@/components/layouts/LoadingOverlay';
import { useGetMe } from '@/hooks/apiHook/useGetMe';
import { useLoading } from '@/hooks/stateHook/useLoading';
import { useGetAccountStatus } from '@/hooks/supabaseHook/useGetAccountStatus';
import { Auth } from '@/layouts/Auth';
import { useSpotlight } from '@mantine/spotlight';
import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

type Props = {
  children: ReactNode;
  user?: User | null;
  accountStatus?: Status | null;
};

export const LayoutWrapper: FC<Props> = ({ children }) => {
  const supabase = useSupabaseClient();
  const router = useRouter();
  const user = useUser();
  const { data: me, mutate: mutateMe } = useGetMe();
  const { mutate: mutateStatus } = useGetAccountStatus();
  const spotlight = useSpotlight();
  const loading = useLoading();

  const handleStart = (url: string) => url !== router.asPath && loading.on();
  const handleComplete = () => loading.off();

  useEffect(() => {
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
    await supabase.auth.signOut();
    await mutateMe();
    await mutateStatus();
  };

  return (
    <>
      <Layout
        user={user}
        account={me}
        onClickSearchButton={() => spotlight.openSpotlight()}
        onSignOut={handleSignOut}
      >
        {/* {children} */}
        <Auth>{children}</Auth>
      </Layout>
      <LoadingOverlay visible={loading.is} />
    </>
  );
};
