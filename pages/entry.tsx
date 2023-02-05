import type { Account } from '@prisma/client';
import type { NextPage } from 'next';

import { EntryTemplate } from '@/components/features/entry/EntryTemplate';
import { useLoading } from '@/hooks/stateHook/useLoading';
import { useMeStatus } from '@/hooks/supabaseHook/useMeStatus';
import { getStripe } from '@/server/stripe/client';
import { createAccount } from '@/utils/axios/account';
import { createStripeCheckout } from '@/utils/axios/stripe';
import { useCounter } from '@mantine/hooks';
import { useUser } from '@supabase/auth-helpers-react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const EntryPage: NextPage = () => {
  const router = useRouter();
  const [step, stepHandlers] = useCounter(0, { min: 0, max: 3 });
  const user = useUser();
  const {
    data: status,
    isLoading: isLoadingStatus,
    mutate: mutateStatus,
  } = useMeStatus();
  useLoading(isLoadingStatus);

  useEffect(() => {
    if (user && status) return stepHandlers.set(status.checked_out ? 3 : 2);
    if (user) return stepHandlers.set(1);
    stepHandlers.set(0);
  }, [user, status, router, stepHandlers]);

  /* アカウント情報の送信 */
  const onSubmitAccount = async (data: Account) => {
    if (!user) return;
    const response = await createAccount({
      ...data,
      uid: user.id,
    });

    if (response) {
      await mutateStatus();
    }
  };

  /* 支払い画面へ */
  const onCheckout = async () => {
    if (!user) return;
    const response = await createStripeCheckout(user?.id);
    const { sessionId } = response.data;
    const stripe = await getStripe();
    stripe?.redirectToCheckout({ sessionId });
  };

  return (
    <>
      <Head>
        <title>お申し込み | progLearning</title>
      </Head>
      <EntryTemplate
        userEmail={user?.email}
        step={step}
        onSubmitAccount={onSubmitAccount}
        onCheckout={onCheckout}
      />
    </>
  );
};

export default EntryPage;
