import type { AccountValidatedUpdateParams } from '@/models/account/types';
import type { ProfileValidatedUpdateParams } from '@/models/profile/types';
import type { Account, Profile } from '@prisma/client';
import type { FC } from 'react';

import { HoverInformation } from '@/components/common/HoverInformation';
import { SeamlessUpdateTextarea } from '@/components/common/SeamlessUpdateTextarea';
import { SeamlessUpdateTextInput } from '@/components/common/SeamlessUpdateTextInput';
import { CurrentGoal } from '@/components/features/setting/CurrentGoal';
import {
  githubIdSchema,
  introductionSchema,
  profileNameSchema,
  zennIdSchema,
} from '@/useCases/setting/scheme';
import { TextInput } from '@mantine/core';

type Props = {
  account: Account & {
    profile: Profile;
  };
  onSubmitGoal: (param: string) => Promise<void>;
  onUpdateAccount: (params: AccountValidatedUpdateParams) => Promise<void>;
  onUpdateProfile: (params: ProfileValidatedUpdateParams) => Promise<void>;
};

export const SettingMyProfile: FC<Props> = ({
  account,
  onSubmitGoal,
  onUpdateAccount,
  onUpdateProfile,
}) => {
  return (
    <div className="mx-auto mt-6 w-fit pb-12">
      <CurrentGoal
        goal={account.profile.current_goal}
        onSubmit={onSubmitGoal}
      />
      <div className="mt-6 space-y-4">
        <SeamlessUpdateTextInput
          label={
            <div className="flex items-center gap-2">
              名前
              <HoverInformation text="アプリ内の表示名" />
            </div>
          }
          schema={profileNameSchema}
          value={account.profile.name}
          update={(name) => onUpdateProfile({ name })}
          size="md"
        />
        <TextInput
          label={
            <div className="flex items-center gap-2">
              メールアドレス
              <HoverInformation text="ご登録いただいたメールアドレスです。" />
            </div>
          }
          description="※ Googleアカウントと紐付いているため変更不可"
          value={account.email}
          disabled
          size="md"
        />
        <SeamlessUpdateTextInput
          label={
            <div className="flex items-center gap-2">
              GitHub ID
              <HoverInformation text="登録することで、GitHubに公開された情報をこのアプリでも利用できます。" />
            </div>
          }
          schema={githubIdSchema}
          value={account.github_id || ''}
          update={(github_id) => onUpdateAccount({ github_id })}
          size="md"
        />
        <SeamlessUpdateTextInput
          label={
            <div className="flex items-center gap-2">
              Zenn ID
              <HoverInformation text="登録することで、Zennに公開された情報をこのアプリでも利用できます。" />
            </div>
          }
          schema={zennIdSchema}
          value={account.zenn_id || ''}
          update={(zenn_id) => onUpdateAccount({ zenn_id })}
          size="md"
        />
        <SeamlessUpdateTextarea
          label={
            <div className="flex items-center gap-2">
              自己紹介
              <HoverInformation text="コミュニティ内のみんなに向けて公開されるプロフィールです。自分のことを知ってもらえるような内容にしよう！" />
            </div>
          }
          description="ここで頑張りたいことや、自分のスキルを書いてみましょう！"
          schema={introductionSchema}
          value={account.profile.introduction || ''}
          update={(introduction) => onUpdateProfile({ introduction })}
          minRows={5}
          maxRows={12}
          size="md"
        />
      </div>
    </div>
  );
};
