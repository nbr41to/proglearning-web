import type { FC } from 'react';

import { CreditCardIcon } from '@/components/common/icons';
import { useGetMeStatus } from '@/hooks/apiHook/useGetMeStatus';
import { useSupabaseAuth } from '@/hooks/supabaseHook/useSupabaseAuth';
import { useLoading } from '@/hooks/useLoading';
import { withdraw } from '@/models/account/apis';
import { getBillingPortalUrl } from '@/useCases/updateSubscription/apis';
import { Button, Modal } from '@mantine/core';
import { useRouter } from 'next/router';
import { useState } from 'react';

type Props = {
  plan: string;
};

export const MySubscription: FC<Props> = ({ plan }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isWithdrawConfirm, setIsWithdrawConfirm] = useState(false);
  const { signOut } = useSupabaseAuth();
  useLoading(isLoading);

  const { data: status } = useGetMeStatus();
  const isCheckout = !!status?.checked_out;

  const openCustomerPortal = async () => {
    if (!status) return;
    setIsLoading(true);
    const response = await getBillingPortalUrl(status.id);
    const { portalUrl } = response.data;
    setIsLoading(false);
    window.open(portalUrl);
  };
  const onUnsubscribe = async () => {
    setIsLoading(true);
    const response = await withdraw();
    setIsLoading(false);
    if (response.status !== 200) return;
    signOut('/');
  };

  return (
    <>
      <div className="mx-auto w-fit space-y-4">
        <div className="text-lg">
          現在のプラン：<span className="font-bold">{plan}</span>
        </div>
        <div className="flex items-center gap-2">
          {isCheckout ? (
            <Button
              leftIcon={<CreditCardIcon size={20} />}
              onClick={openCustomerPortal}
            >
              支払い情報の確認 / 変更
            </Button>
          ) : (
            <Button
              leftIcon={<CreditCardIcon size={20} />}
              onClick={() => router.push('/entry')}
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
