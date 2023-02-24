import type { NextPage } from 'next';

import { DashboardTemplate } from '@/components/features/dashboard/DashboardTemplate';
import { useGetMe } from '@/hooks/apiHook/useGetMe';
import { useLoading } from '@/hooks/stateHook/useLoading';
import { updateProfile } from '@/models/profile/apis';
import { updateStatus } from '@/models/status/apis';

const DashboardPage: NextPage = () => {
  const {
    data: account,
    isLoading,
    mutate,
  } = useGetMe<{
    profile: true;
    status: true;
  }>({
    profile: true,
    status: true,
  });
  // const { data: account, isLoading, mutate } = useGetMe();
  // const { data: status } = useGetMeStatus();
  // const { data: profile } = useGetMeProfile();

  useLoading(isLoading);

  const onStepClick = async (step: number) => {
    await updateStatus({ tutorial_step: step });
    await mutate();
  };

  const updateGoal = async (goal: string) => {
    await updateProfile({ current_goal: goal });
    await mutate();
  };

  if (!account) return null;
  if (!account.status) return null;
  if (!account.profile) return null;

  return (
    <>
      <DashboardTemplate
        account={account}
        status={account.status}
        profile={account.profile}
        onStepClick={onStepClick}
        onSubmitGoal={updateGoal}
      />
    </>
  );
};

export default DashboardPage;
