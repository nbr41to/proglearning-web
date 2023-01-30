import type { Account } from '@prisma/client';
import type { NextPage } from 'next';

import { EntryTemplate } from '@/features/entry/EntryTemplate';
import { useGetAccountStatus } from '@/hooks/supabaseHook/useGetAccountStatus';
import useLoading from '@/hooks/useLoading';
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
    mutate,
  } = useGetAccountStatus(user?.id);
  const loading = useLoading(isLoadingStatus);

  useEffect(() => {
    if (typeof user === 'undefined') return;

    if (status) {
      stepHandlers.set(status.checked_out ? 3 : 2);

      return;
    } else if (user) {
      stepHandlers.set(1);

      return;
    }
  }, [user, status, router, stepHandlers]);

  /* アカウント情報の送信 */
  const onSubmitAccount = async (data: Account) => {
    if (!user) return;
    loading.on();
    const response = await createAccount({
      ...data,
      uid: user.id,
    });
    loading.off();

    if (response.status === 200) {
      await mutate();
    }
  };

  /* 支払い画面へ */
  const onCheckout = async () => {
    if (!user) return;
    loading.on();
    const response = await createStripeCheckout(user?.id);
    const { sessionId } = response.data;
    const stripe = await getStripe();
    loading.off();
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
