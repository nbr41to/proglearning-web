import type { NextPage } from 'next';

import { DashboardTemplate } from '@/components/features/dashboard/DashboardTemplate';
import { useGetMe } from '@/hooks/apiHook/useGetMe';
import { useLoading } from '@/hooks/stateHook/useLoading';
import { updateProfile } from '@/models/profile/apis';
import { updateStatus } from '@/models/status/apis';
import { showNotification } from '@mantine/notifications';
import Router from 'next/router';
import { useEffect } from 'react';

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

  useLoading(isLoading);

  const onStepClick = async (step: number) => {
    await updateStatus({ tutorial_step: step });
    await mutate();
  };

  const updateGoal = async (goal: string) => {
    await updateProfile({ current_goal: goal });
    await mutate();
  };

  useEffect(() => {
    if (isLoading) return;
    if (!account) {
      showNotification({
        title: 'アカウントが存在しません',
        message: 'アカウントを作成してください。',
        color: 'red',
      });
      Router.push('/entry');
    }
  }, [isLoading, account]);

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
