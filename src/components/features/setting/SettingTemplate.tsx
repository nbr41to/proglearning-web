import type { ProfileSchemaUpdateParams } from '@/validations/scheme/profile';
import type { Account, Profile } from '@prisma/client';
import type { FC } from 'react';

import {
  CreditCardOutlineIcon,
  ProfileIcon,
  SettingIcon,
} from '@/components/common/icons';
import { MyProfile } from '@/components/features/setting/MyProfile/MyProfile';
import { MySubscription } from '@/components/features/setting/MySubscription/MySubscription';
import { getStripe } from '@/libs/stripe';
import { deleteAccount } from '@/utils/axios/account';
import { createStripeCheckout } from '@/utils/axios/stripe';
import { Tabs } from '@mantine/core';

type Props = {
  account: Account & {
    profile: Profile;
  };
  onSubmitGoal: (param: string) => Promise<void>;
  onSubmitProfile: (params: ProfileSchemaUpdateParams) => Promise<void>;
};

export const SettingTemplate: FC<Props> = ({
  account,
  onSubmitGoal,
  onSubmitProfile,
}) => {
  /* 支払い画面へ */
  const onCheckout = async () => {
    const response = await createStripeCheckout(account.uid);
    const { sessionId } = response.data;
    const stripe = await getStripe();
    stripe?.redirectToCheckout({ sessionId });
  };
  const onUnsubscribe = async () => {
    return;
    /* TODO:退会確認Modalと退会完了画面の追加 */
    const response = await deleteAccount();
    if (response.status !== 200) return;
    window.location.href = '/';
  };

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
          <MyProfile
            account={account}
            onSubmitGoal={onSubmitGoal}
            onSubmitProfile={onSubmitProfile}
          />
        </Tabs.Panel>

        <Tabs.Panel value="subscription" pt="xs">
          <MySubscription
            plan="closer"
            onCheckout={onCheckout}
            onUnsubscribe={onUnsubscribe}
          />
        </Tabs.Panel>

        <Tabs.Panel value="settings" pt="xs">
          Settings tab content
        </Tabs.Panel>
      </Tabs>
    </div>
  );
};
