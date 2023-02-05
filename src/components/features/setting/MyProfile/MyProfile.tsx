import type { ProfileSchemaUpdateParams } from '@/validations/scheme/profile';
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
  onSubmitProfile: (data: ProfileSchemaUpdateParams) => Promise<void>;
};

export const MyProfile: FC<Props> = ({
  account,
  onSubmitGoal,
  onSubmitProfile,
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
            onSubmit={onSubmitProfile}
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
