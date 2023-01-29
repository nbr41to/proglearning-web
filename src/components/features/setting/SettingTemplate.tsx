import type { Account, Profile, Status } from '@prisma/client';
import type { FC } from 'react';

import { EditForm } from '@/features/setting/EditForm';
import { Button } from '@mantine/core';
import { useState } from 'react';

type Props = {
  account: Account & {
    profile: Profile;
    status: Status;
  };
  onSubmit: (data: any) => Promise<void>;
};

export const SettingTemplate: FC<Props> = ({ account, onSubmit }) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="w-main mx-auto space-y-4">
      <h2>アカウント管理</h2>
      {isEditing ? (
        <EditForm
          account={account}
          onSubmit={onSubmit}
          onCancel={() => setIsEditing(false)}
        />
      ) : (
        <>
          <div className="w-main mx-auto space-y-4">
            <div>名前: {account.profile.name}</div>
            <div>メールアドレス: {account.email}</div>
            <div>OS: {account.os}</div>
            <div>GitHub ID: {account.github_id}</div>
            <div>Zenn ID: {account.zenn_id}</div>
            <div>自己紹介: {account.profile.introduction}</div>
          </div>
          <div className="flex gap-4">
            <Button
              variant="outline"
              color="blue"
              onClick={() => setIsEditing(!isEditing)}
            >
              内容を編集する
            </Button>
            <Button variant="outline" color="red">
              退会する
            </Button>
          </div>
        </>
      )}
    </div>
  );
};
