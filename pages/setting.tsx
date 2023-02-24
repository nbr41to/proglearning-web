import type { AccountValidatedUpdateParams } from '@/models/account/types';
import type { ProfileValidatedUpdateParams } from '@/models/profile/types';
import type { NextPage } from 'next';

import { SettingTemplate } from '@/components/features/setting/SettingTemplate';
import { useGetMe } from '@/hooks/apiHook/useGetMe';
import { updateAccount } from '@/models/account/apis';
import { updateProfile } from '@/models/profile/apis';

const SettingPage: NextPage = () => {
  const { data: account, mutate: mutateMe } = useGetMe<{ profile: true }>({
    profile: true,
  });

  const handleUpdateAccount = async (params: AccountValidatedUpdateParams) => {
    const response = await updateAccount(params);

    if (!response) return;
    await mutateMe();
  };
  const handleUpdateProfile = async (params: ProfileValidatedUpdateParams) => {
    const response = await updateProfile(params);

    if (!response) return;
    await mutateMe();
  };

  const updateGoal = async (goal: string) => {
    await updateProfile({ current_goal: goal });
    await mutateMe();
  };

  if (!account) return null;
  if (!account.profile) return null;

  return (
    <div>
      <SettingTemplate
        account={{ ...account, profile: account.profile }}
        onSubmitGoal={updateGoal}
        onUpdateAccount={handleUpdateAccount}
        onUpdateProfile={handleUpdateProfile}
      />
    </div>
  );
};

export default SettingPage;
