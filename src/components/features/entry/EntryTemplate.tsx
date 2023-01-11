import type { User } from '@prisma/client';

import { CheckoutForm } from '@/features/entry/CheckoutForm';
import { Completed } from '@/features/entry/Completed';
import { Confirmation } from '@/features/entry/Confirmation';
import { EntryForm } from '@/features/entry/EntryForm';
import { useAuthUser } from '@/hooks/apiHook/useAuthUser';
import { useUser } from '@/hooks/apiHook/useUser';
import { getStripe } from '@/utils/stripe/client';
import { createUser } from '@/utils/supabase/database';
import { Stepper } from '@mantine/core';
import { useCounter, useLocalStorage } from '@mantine/hooks';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export const EntryTemplate = () => {
  const router = useRouter();
  const [step, stepHandlers] = useCounter(0, { min: 0, max: 3 });
  const [savedSessionId, setSavedSessionId] = useLocalStorage({
    key: 'checkout_session_id',
  });

  const user = useAuthUser();
  const account = useUser(user?.id);

  useEffect(() => {
    if (typeof user === 'undefined') return;

    if (account?.stripe_checkout_status === 'complete') {
      stepHandlers.set(3);

      return;
    } else if (account) {
      stepHandlers.set(2);

      return;
    } else if (user) {
      stepHandlers.set(1);

      return;
    }
  }, [user, account, router, savedSessionId, setSavedSessionId, stepHandlers]);

  const submitHandler = async (data: User) => {
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
      user: account,
    });
    const { sessionId } = response.data;
    setSavedSessionId(sessionId);

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
