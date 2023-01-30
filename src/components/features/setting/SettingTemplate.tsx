import type { Account, Profile } from '@prisma/client';
import type { FC } from 'react';

import { EditForm } from '@/features/setting/EditForm';
import { Button, Stepper } from '@mantine/core';
import { useState } from 'react';

type Props = {
  account: Account & {
    profile: Profile;
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

      <Stepper size="sm" active={1} orientation="vertical">
        <Stepper.Step
          label="1. アカウントの作成"
          description="Create an account"
        />
        <Stepper.Step
          label="2. クレジットカードの登録"
          description="Verify email"
        />
        <Stepper.Step
          label="3. Getting Startedを読む"
          description="Get full access"
        />
        <Stepper.Step
          label="4. 目標と自己紹介を書く"
          description="Get full access"
        />
        <Stepper.Step
          label="5. Lessonsから学習を開始する"
          description="Get full access"
        />
      </Stepper>
    </div>
  );
};
