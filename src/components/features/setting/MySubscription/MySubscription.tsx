import type { FC } from 'react';

import { CreditCardIcon } from '@/components/common/icons';
import { Button } from '@mantine/core';

type Props = {
  plan: string;
  onCheckout: () => void;
  onUnsubscribe: () => void;
};

export const MySubscription: FC<Props> = ({
  plan,
  onCheckout,
  onUnsubscribe,
}) => {
  return (
    <div className="mx-auto w-fit space-y-4">
      <div className="text-lg">
        現在のプラン：<span className="font-bold">{plan}</span>
      </div>
      <div className="text-gray-600">
        <div>free / 教材のみ</div>
        <div className="text-gray-400">pro / coming soon</div>
        <div>closer / Slackの招待, 質問し放題</div>
      </div>
      <div className="flex items-center gap-2">
        <Button leftIcon={<CreditCardIcon size={20} />} onClick={onCheckout}>
          支払い情報の登録 / 変更
        </Button>
        <Button variant="outline" color="red" onClick={onUnsubscribe}>
          退会する
        </Button>
      </div>
    </div>
  );
};
