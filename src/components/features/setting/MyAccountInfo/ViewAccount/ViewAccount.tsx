import type { Account, Profile } from '@prisma/client';
import type { FC } from 'react';

type Props = {
  account: Account & {
    profile: Profile;
  };
};

export const ViewAccount: FC<Props> = ({ account }) => {
  return (
    <div className="space-y-2">
      <div className="flex items-end gap-3">
        <div className="w-28 text-right text-sm text-gray-400">名前</div>
        <div className="font-bold">{account.profile.name}</div>
      </div>
      <div className="flex items-end gap-3">
        <div className="w-28 text-right text-sm text-gray-400">
          メールアドレス
        </div>
        <div className="font-bold">{account.email}</div>
      </div>
      <div className="flex items-end gap-3">
        <div className="w-28 text-right text-sm text-gray-400">OS</div>
        <div className="font-bold">{account.os}</div>
      </div>
      <div className="flex items-end gap-3">
        <div className="w-28 text-right text-sm text-gray-400">GitHub ID</div>
        <div className="font-bold">{account.github_id}</div>
      </div>
      <div className="flex items-end gap-3">
        <div className="w-28 text-right text-sm text-gray-400">Zenn ID</div>
        <div className="font-bold">{account.zenn_id}</div>
      </div>
      <div className="flex gap-3">
        <div className="w-28 text-right text-sm text-gray-400">自己紹介</div>
        <div className="max-w-80 w-60 whitespace-pre-wrap text-sm leading-6">
          {account.profile.introduction}
        </div>
      </div>
    </div>
  );
};
