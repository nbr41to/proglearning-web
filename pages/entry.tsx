import type { EntryValidatedCreateParams } from '@/models/account/types';
import type { NextPage } from 'next';

import { EntryTemplate } from '@/components/features/entry/EntryTemplate';
import { useLoading } from '@/hooks/stateHook/useLoading';
import { useMeStatus } from '@/hooks/supabaseHook/useMeStatus';
import { createAccount } from '@/models/account/api';
import { getStripe } from '@/server/stripe/client';
import { createStripeCheckout } from '@/utils/axios/stripe';
import { useCounter } from '@mantine/hooks';
import { useUser } from '@supabase/auth-helpers-react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useCallback, useEffect } from 'react';

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
  const submitAccount = useCallback(
    async (params: EntryValidatedCreateParams) => {
      if (!user) return;
      const response = await createAccount({
        ...params,
        uid: user.id,
      });

      if (response) {
        await mutateStatus();
      }
    },
    [mutateStatus, user]
  );

  /* 支払い情報の登録 */
  const registerPayment = useCallback(async () => {
    if (!user) return;
    const response = await createStripeCheckout(user?.id);
    const { sessionId } = response.data;
    const stripe = await getStripe();
    stripe?.redirectToCheckout({ sessionId });
  }, [user]);

  return (
    <>
      <Head>
        <title>お申し込み | progLearning</title>
      </Head>
      <EntryTemplate
        userEmail={user?.email}
        step={step}
        submitAccount={submitAccount}
        registerPayment={registerPayment}
      />
    </>
  );
};

export default EntryPage;
