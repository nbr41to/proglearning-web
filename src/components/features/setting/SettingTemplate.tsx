import type { AccountValidatedUpdateParams } from '@/models/account/types';
import type { ProfileValidatedUpdateParams } from '@/models/profile/types';
import type { Account, Profile } from '@prisma/client';
import type { FC } from 'react';

import {
  CreditCardOutlineIcon,
  ProfileIcon,
  SettingIcon,
} from '@/components/common/icons';
import { MySubscription } from '@/components/features/setting/MySubscription/MySubscription';
import { SettingMyProfile } from '@/components/features/setting/SettingMyProfile/SettingMyProfile';
import { Tabs } from '@mantine/core';

type Props = {
  account: Account & {
    profile: Profile;
  };
  onSubmitGoal: (param: string) => Promise<void>;
  onUpdateAccount: (params: AccountValidatedUpdateParams) => Promise<void>;
  onUpdateProfile: (params: ProfileValidatedUpdateParams) => Promise<void>;
};

export const SettingTemplate: FC<Props> = ({
  account,
  onSubmitGoal,
  onUpdateAccount,
  onUpdateProfile,
}) => {
  return (
    <div className="w-main mx-auto space-y-4 px-8">
      <h2>アカウント管理</h2>

      <Tabs defaultValue="profile">
        <Tabs.List>
          <Tabs.Tab value="profile" icon={<ProfileIcon size={14} />}>
            Profile
          </Tabs.Tab>
          <Tabs.Tab
            value="subscription"
            icon={<CreditCardOutlineIcon size={14} />}
          >
            Subscription
          </Tabs.Tab>
          <Tabs.Tab value="settings" icon={<SettingIcon size={14} />} disabled>
            Settings
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="profile">
          <SettingMyProfile
            account={account}
            onSubmitGoal={onSubmitGoal}
            onUpdateAccount={onUpdateAccount}
            onUpdateProfile={onUpdateProfile}
          />
        </Tabs.Panel>

        <Tabs.Panel value="subscription" pt="xs">
          <MySubscription plan="closer" />
        </Tabs.Panel>

        <Tabs.Panel value="settings" pt="xs">
          Settings tab content
        </Tabs.Panel>
      </Tabs>
    </div>
  );
};
