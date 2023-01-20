import type { Account } from '@prisma/client';
import type { User } from '@supabase/supabase-js';
import type { FC } from 'react';

import { CheckoutForm } from '@/features/entry/CheckoutForm';
import { Completed } from '@/features/entry/Completed';
import { Confirmation } from '@/features/entry/Confirmation';
import { EntryForm } from '@/features/entry/EntryForm';
import { getStripe } from '@/server/stripe/client';
import { isCheckedOut } from '@/utils/isCheckedOut';
import { createUser } from '@/utils/supabase/database';
import { Stepper } from '@mantine/core';
import { useCounter } from '@mantine/hooks';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

type Props = {
  user: User | null;
  account: Account | null;
};

export const EntryTemplate: FC<Props> = ({ user, account }) => {
  const router = useRouter();
  const [step, stepHandlers] = useCounter(0, { min: 0, max: 3 });

  useEffect(() => {
    if (typeof user === 'undefined') return;

    if (account) {
      stepHandlers.set(isCheckedOut(account) ? 3 : 2);

      return;
    } else if (user) {
      stepHandlers.set(1);

      return;
    }
  }, [user, account, router, stepHandlers]);

  const submitHandler = async (data: Account) => {
    if (!user) return;

    const res = await createUser({
      ...data,
      uid: user.id,
    });
    if (res.status === 200) {
      stepHandlers.set(2);
    }
  };

  const checkoutHandler = async () => {
    const response = await axios.post('/api/create-checkout-session', {
      account,
    });
    const { sessionId } = response.data;
    const stripe = await getStripe();
    stripe?.redirectToCheckout({ sessionId });
  };

  return (
    <div className="w-main mx-auto space-y-8">
      <div>
        <h2>お申し込み</h2>
        <p className="text-sm">3ステップで今すぐ登録</p>
      </div>
      <Stepper active={step} breakpoint="sm">
        <Stepper.Step label="確認事項" description="Confirmation">
          <Confirmation />
        </Stepper.Step>
        <Stepper.Step label="アカウント作成" description="Create account">
          {user?.email ? (
            <EntryForm email={user.email} onSubmit={submitHandler} />
          ) : (
            <div className="text-center">
              <p>メールアドレスが登録されていません。</p>
            </div>
          )}
        </Stepper.Step>
        <Stepper.Step label="支払いの登録" description="Payment">
          <CheckoutForm onClick={checkoutHandler} />
        </Stepper.Step>
        <Stepper.Completed>
          <Completed />
        </Stepper.Completed>
      </Stepper>
    </div>
  );
};
