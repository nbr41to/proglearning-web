import type { FC, ReactNode } from 'react';

import { Layout } from '@/components/layouts/Layout';
import { LoadingOverlay } from '@/components/layouts/LoadingOverlay';
import { useGetMeStatus } from '@/hooks/apiHook/useGetMeStatus';
import { useLoading } from '@/hooks/stateHook/useLoading';
import { useSupabaseAuth } from '@/hooks/supabaseHook/useSupabaseAuth';
import { useSpotlight } from '@mantine/spotlight';
import { useUser } from '@supabase/auth-helpers-react';

type Props = {
  children: ReactNode;
};

export const LayoutWrapper: FC<Props> = ({ children }) => {
  const user = useUser();
  const { data: status, isLoading: isLoadingStatus } = useGetMeStatus();
  const { signOut } = useSupabaseAuth();
  const spotlight = useSpotlight();
  const loading = useLoading(isLoadingStatus);

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
