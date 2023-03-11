import type { AccountValidatedCreateParams } from '@/models/account/types';
import type { NextPage } from 'next';

import { EntryTemplate } from '@/components/features/entry/EntryTemplate';
import { useGetMeStatus } from '@/hooks/apiHook/useGetMeStatus';
import { useLoading } from '@/hooks/stateHook/useLoading';
import { getStripe } from '@/libs/stripe';
import { createAccount } from '@/models/account/apis';
import { createStripeCheckout } from '@/useCases/checkout/apis';
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
  } = useGetMeStatus();
  useLoading(isLoadingStatus);

  useEffect(() => {
    if (user && status) return stepHandlers.set(status.checked_out ? 3 : 2);
    if (user) return stepHandlers.set(1);
    stepHandlers.set(0);
  }, [user, status, router, stepHandlers]);

  /* アカウント情報の送信 */
  const submitAccount = useCallback(
    async (params: AccountValidatedCreateParams) => {
      if (!user) return;
      const response = await createAccount({
        ...params,
      });

      if (response) {
        await mutateStatus();
      }
    },
    [mutateStatus, user]
  );

  /* 支払い情報の登録 */
  const registerPayment = useCallback(
    async (plan: string) => {
      if (!user) return;
      const response = await createStripeCheckout(user?.id, plan);
      const { sessionId } = response.data;
      const stripe = await getStripe();
      stripe?.redirectToCheckout({ sessionId });
    },
    [user]
  );

  return (
    <>
      <Head>
        <title>お申し込み | progLearning</title>
      </Head>
      <div className="sp:hidden">
        <EntryTemplate
          userEmail={user?.email}
          step={step}
          submitAccount={submitAccount}
          registerPayment={registerPayment}
        />
      </div>

      {/* TODO: スマホの申込みに対応する */}
      <div className="hidden space-y-4 whitespace-pre py-4 px-6 text-center sp:block">
        <h2>
          PCの画面から
          <wbr />
          お申し込みください
        </h2>
        <p>
          progLearningはPCで学習することを
          <wbr />
          前提としていおりますので、
          <wbr />
          お申し込みもPCからお願いいたします。
        </p>
        <p className="text-sm">
          ※ブラウザの画面幅が狭い場合に、
          <wbr />
          この画面が表示される場合がございます。
        </p>
      </div>
    </>
  );
};

export default EntryPage;
