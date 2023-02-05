import type { ProfileSchemaUpdateParams } from '@/validations/scheme/profile';
import type { NextPage } from 'next';

import { SettingTemplate } from '@/components/features/setting/SettingTemplate';
import { useGetMe } from '@/hooks/apiHook/useGetMe';
import { useMeProfile } from '@/hooks/supabaseHook/useMeProfile';
import { updateAccount } from '@/utils/axios/account';

const SettingPage: NextPage = () => {
  const { data: me, mutate: mutateMe } = useGetMe();
  const { data: profile, mutate: mutateMeProfile, updateGoal } = useMeProfile();

  const saveAccount = async (params: ProfileSchemaUpdateParams) => {
    const response = await updateAccount(params);

    if (!response) return;
    await mutateMe();
    await mutateMeProfile();
  };

  return (
    <div>
      {me && profile && (
        <SettingTemplate
          account={{ ...me, profile }}
          onSubmitGoal={updateGoal}
          onSubmitProfile={saveAccount}
        />
      )}
    </div>
  );
};

export default SettingPage;
