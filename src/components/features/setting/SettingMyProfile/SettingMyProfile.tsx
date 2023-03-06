import type { AccountValidatedUpdateParams } from '@/models/account/types';
import type { ProfileValidatedUpdateParams } from '@/models/profile/types';
import type { Account, Profile } from '@prisma/client';
import type { FC } from 'react';

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
          label="名前"
          schema={profileNameSchema}
          value={account.profile.name}
          update={(name) => onUpdateProfile({ name })}
          size="md"
        />
        <TextInput
          label="メールアドレス"
          description="※ Googleアカウントと紐付いているため変更不可"
          value={account.email}
          disabled
          size="md"
        />
        <SeamlessUpdateTextInput
          label="GitHub ID"
          schema={githubIdSchema}
          value={account.github_id || ''}
          update={(github_id) => onUpdateAccount({ github_id })}
          size="md"
        />
        <SeamlessUpdateTextInput
          label="Zenn ID"
          schema={zennIdSchema}
          value={account.zenn_id || ''}
          update={(zenn_id) => onUpdateAccount({ zenn_id })}
          size="md"
        />
        <SeamlessUpdateTextarea
          label="自己紹介"
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
