import type { FC } from 'react';

import { CreditCardIcon } from '@/components/common/icons';
import { useGetMeStatus } from '@/hooks/apiHook/useGetMeStatus';
import { useSupabaseAuth } from '@/hooks/supabaseHook/useSupabaseAuth';
import { withdraw } from '@/models/account/apis';
import { getBillingPortalUrl } from '@/useCases/updateSubscription/apis';
import { Button, Modal } from '@mantine/core';
import { useState } from 'react';

type Props = {
  plan: string;
  onCheckout: () => void;
};

export const MySubscription: FC<Props> = ({ plan, onCheckout }) => {
  const [isWithdrawConfirm, setIsWithdrawConfirm] = useState(false);
  const { signOut } = useSupabaseAuth();

  const { data: status } = useGetMeStatus();
  const isCheckout = !!status?.checked_out;

  const openCustomerPortal = async () => {
    if (!status) return;
    const response = await getBillingPortalUrl(status.id);
    const { portalUrl } = response.data;
    window.open(portalUrl);
  };
  const onUnsubscribe = async () => {
    const response = await withdraw();
    if (response.status !== 200) return;
    signOut('/');
  };

  return (
    <>
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
          {isCheckout ? (
            <Button
              leftIcon={<CreditCardIcon size={20} />}
              onClick={openCustomerPortal}
            >
              支払い情報の変更
            </Button>
          ) : (
            <Button
              leftIcon={<CreditCardIcon size={20} />}
              onClick={onCheckout}
            >
              支払い情報の登録
            </Button>
          )}
          <Button
            variant="outline"
            color="red"
            onClick={() => setIsWithdrawConfirm(true)}
          >
            退会する
          </Button>
        </div>
      </div>

      <Modal
        opened={isWithdrawConfirm}
        onClose={() => setIsWithdrawConfirm(false)}
        title="確認"
      >
        <li>これまですべてのデータが消えます</li>
        <li>支払い情報や領収書の確認ができなくなります</li>
        <div>本当によろしいですか？</div>
        <div className="mt-4 flex justify-center gap-4">
          <Button color="red" variant="outline" onClick={onUnsubscribe}>
            退会する
          </Button>
          <Button onClick={() => setIsWithdrawConfirm(false)}>
            キャンセル
          </Button>
        </div>
      </Modal>
    </>
  );
};
