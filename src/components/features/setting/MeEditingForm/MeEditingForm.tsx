import type { ProfileValidatedUpdateParams } from '@/models/profile/types';
import type { Account, Profile } from '@prisma/client';
import type { FC } from 'react';

import { profileSchema } from '@/models/profile/scheme';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, NativeSelect, Textarea, TextInput } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

type Props = {
  account: Account & {
    profile: Profile;
  };
  onSubmit: (data: ProfileValidatedUpdateParams) => Promise<void>;
  onCancel: () => void;
};

export const MeEditingForm: FC<Props> = ({ account, onSubmit, onCancel }) => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm({
    defaultValues: {
      name: account.profile.name,
      email: account.email,
      os: account.os,
      github_id: account.github_id,
      zenn_id: account.zenn_id,
      introduction: account.profile.introduction,
    },
    resolver: zodResolver(profileSchema),
  });

  const handleOnSubmit = async (data: ProfileValidatedUpdateParams) => {
    setIsLoading(true);
    await onSubmit(data);
    setIsLoading(false);
    onCancel();
  };

  const onError = (errors: any) => {
    showNotification({
      title: 'Invalid input',
      message: Object.values(errors)
        .map((error: any) => error.message)
        .join(' '),
      color: 'red',
    });
  };

  return (
    <form
      className="w-96 space-y-4"
      onSubmit={handleSubmit(handleOnSubmit, onError)}
    >
      <TextInput
        placeholder="name"
        label="名前"
        withAsterisk
        {...register('name', { required: true })}
      />
      <TextInput
        label="メールアドレス"
        withAsterisk
        disabled
        description="※ Googleアカウントと紐付いているため変更不可"
        {...register('email', { required: true })}
      />
      <NativeSelect
        label="OS"
        data={['mac', 'windows', 'other']}
        withAsterisk
        {...register('os', { required: true })}
      />
      <TextInput
        label="GitHubのアカウントID"
        description="※ GitHubのアカウントと連携する機能を使用するために必要です"
        {...register('github_id')}
      />
      <TextInput
        label="ZennのアカウントID"
        description="※ Zennのアカウントと連携する機能を使用するために必要です"
        {...register('zenn_id')}
      />
      <Textarea
        label="自己紹介"
        description="ここで頑張りたいことや、自分のスキルを書いてみましょう！"
        minRows={5}
        maxRows={12}
        {...register('introduction')}
      />

      <div className="flex justify-center gap-4">
        <Button
          className="w-1/2"
          variant="outline"
          disabled={isLoading}
          onClick={onCancel}
        >
          キャンセル
        </Button>
        <Button
          className="w-1/2"
          type="submit"
          loading={isLoading}
          disabled={isLoading}
        >
          保存
        </Button>
      </div>
    </form>
  );
};
