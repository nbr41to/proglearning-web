import type { ProfileSchemaUpdateParams } from '@/validations/scheme/profile';
import type { Account, Profile } from '@prisma/client';
import type { FC } from 'react';

import { EditAccountForm } from '@/features/setting/MyAccountInfo/EditAccountForm';
import { ViewAccount } from '@/features/setting/MyAccountInfo/ViewAccount/ViewAccount';
import { Button } from '@mantine/core';
import { useState } from 'react';

type Props = {
  account: Account & {
    profile: Profile;
  };
  onSubmit: (data: ProfileSchemaUpdateParams) => Promise<void>;
};

export const MyAccountInfo: FC<Props> = ({ account, onSubmit }) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="mx-auto mt-6 w-fit pb-12">
      {isEditing ? (
        <EditAccountForm
          account={account}
          onSubmit={onSubmit}
          onCancel={() => setIsEditing(false)}
        />
      ) : (
        <>
          <ViewAccount account={account} />
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
  );
};
