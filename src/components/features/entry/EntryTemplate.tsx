import type { Account } from '@prisma/client';
import type { FC } from 'react';

import { CheckoutForm } from '@/components/features/entry/CheckoutForm';
import { Completed } from '@/components/features/entry/Completed';
import { Confirmation } from '@/components/features/entry/Confirmation';
import { EntryForm } from '@/components/features/entry/EntryForm';
import { Stepper } from '@mantine/core';

type Props = {
  userEmail?: string;
  step: number;
  onSubmitAccount: (data: Account) => Promise<void>;
  onCheckout: () => Promise<void>;
};
export const EntryTemplate: FC<Props> = ({
  userEmail,
  step,
  onSubmitAccount,
  onCheckout,
}) => {
  return (
    <div className="w-main mx-auto space-y-8 px-8">
      <div>
        <h2>お申し込み</h2>
        <p className="text-sm text-gray-600">3ステップで今すぐ登録</p>
      </div>

      <Stepper className="w-[800px]" active={step} breakpoint="sm">
        <Stepper.Step label="確認事項" description="Confirmation">
          <Confirmation />
        </Stepper.Step>
        <Stepper.Step label="アカウント作成" description="Create account">
          {userEmail ? (
            <EntryForm email={userEmail} onSubmit={onSubmitAccount} />
          ) : (
            <div className="text-center">
              <p>
                メールアドレスが登録されていません。Googleアカウントでログインしてください。
              </p>
            </div>
          )}
        </Stepper.Step>
        <Stepper.Step label="支払いの登録" description="Payment">
          <CheckoutForm onClick={onCheckout} />
        </Stepper.Step>
        <Stepper.Completed>
          <Completed />
        </Stepper.Completed>
      </Stepper>
    </div>
  );
};
