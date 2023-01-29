import type { Account, Profile, Status } from '@prisma/client';
import type { FC } from 'react';

import { Button, NativeSelect, Textarea, TextInput } from '@mantine/core';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

type Props = {
  account: Account & {
    profile: Profile;
    status: Status;
  };
  onSubmit: (data: any) => Promise<void>;
  onCancel: () => void;
};

export const EditForm: FC<Props> = ({ account, onSubmit, onCancel }) => {
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
  });

  const handleOnSubmit = async (data: any) => {
    setIsLoading(true);
    await onSubmit(data);
    setIsLoading(false);
    onCancel();
  };

  return (
    <form className="w-96" onSubmit={handleSubmit(handleOnSubmit)}>
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
      <div className="mt-4 flex justify-center gap-4">
        <Button variant="outline" disabled={isLoading} onClick={onCancel}>
          キャンセル
        </Button>
        <Button type="submit" loading={isLoading} disabled={isLoading}>
          保存
        </Button>
      </div>
    </form>
  );
};
