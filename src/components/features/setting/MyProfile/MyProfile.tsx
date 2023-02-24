import type { AccountValidatedUpdateParams } from '@/models/account/types';
import type { ProfileValidatedUpdateParams } from '@/models/profile/types';
import type { Account, Profile } from '@prisma/client';
import type { FC } from 'react';

import { CurrentGoal } from '@/components/features/setting/CurrentGoal';
import { MeEditingForm } from '@/components/features/setting/MeEditingForm';
import { MeViewer } from '@/components/features/setting/MeViewer/MeViewer';
import { Button } from '@mantine/core';
import { useState } from 'react';

type Props = {
  account: Account & {
    profile: Profile;
  };
  onSubmitGoal: (param: string) => Promise<void>;
  onUpdateAccount: (params: AccountValidatedUpdateParams) => Promise<void>;
  onUpdateProfile: (params: ProfileValidatedUpdateParams) => Promise<void>;
};

export const MyProfile: FC<Props> = ({
  account,
  onSubmitGoal,
  // eslint-disable-next-line unused-imports/no-unused-vars
  onUpdateAccount,
  onUpdateProfile,
}) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="mx-auto mt-6 w-fit pb-12">
      <CurrentGoal
        goal={account.profile.current_goal}
        onSubmit={onSubmitGoal}
      />
      <div className="mt-6">
        {isEditing ? (
          <MeEditingForm
            account={account}
            onSubmit={onUpdateProfile}
            onCancel={() => setIsEditing(false)}
          />
        ) : (
          <>
            <MeViewer account={account} />
            <div className="mx-auto mt-8 w-fit">
              <Button
                variant="outline"
                color="blue"
                onClick={() => setIsEditing(!isEditing)}
              >
                内容を編集する
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
