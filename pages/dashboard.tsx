import type { NextPage } from 'next';

import { DashboardTemplate } from '@/components/features/dashboard/DashboardTemplate';
import { useGetMe } from '@/hooks/apiHook/useGetMe';
import { useLoading } from '@/hooks/stateHook/useLoading';
import { useMeProfile } from '@/hooks/supabaseHook/useMeProfile';
import { useMeStatus } from '@/hooks/supabaseHook/useMeStatus';

const DashboardPage: NextPage = () => {
  const { data: account, isLoading } = useGetMe();
  const { data: status, isLoading: isLoadingStatus, trigger } = useMeStatus();
  const {
    data: profile,
    isLoading: isLoadingProfile,
    updateGoal,
  } = useMeProfile();
  useLoading(isLoading || isLoadingStatus || isLoadingProfile);

  const onStepClick = async (step: number) => {
    await trigger({ tutorial_step: step });
  };

  if (!account || !status || !profile) return null;

  return (
    <>
      <DashboardTemplate
        account={account}
        status={status}
        profile={profile}
        onStepClick={onStepClick}
        onSubmitGoal={updateGoal}
      />
    </>
  );
};

export default DashboardPage;
