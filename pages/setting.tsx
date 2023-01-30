import type { NextPage } from 'next';

import { SettingTemplate } from '@/features/setting/SettingTemplate';
import { useGetMe } from '@/hooks/apiHook/useGetMe';
import { useGetAccountProfile } from '@/hooks/supabaseHook/useGetAccountProfile';
import { updateAccount } from '@/utils/axios/account';

const SettingPage: NextPage = () => {
  const { data: me } = useGetMe();
  const { data: profile } = useGetAccountProfile(me?.uid);

  const saveAccount = async (data: any) => {
    const response = await updateAccount(data);

    if (!response) return;
    window.location.reload();
  };

  return (
    <div>
      {me && profile && (
        <SettingTemplate account={{ ...me, profile }} onSubmit={saveAccount} />
      )}
    </div>
  );
};

export default SettingPage;
