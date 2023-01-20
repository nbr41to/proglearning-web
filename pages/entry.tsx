import type { Account } from '@prisma/client';
import type { User } from '@supabase/supabase-js';
import type { GetServerSideProps } from 'next';
import type { FC } from 'react';

import { EntryTemplate } from '@/features/entry/EntryTemplate';
import { getServerSupabaseClient } from '@/server/supabase/client';
import Head from 'next/head';

type Props = {
  user: User | null;
  account: Account | null;
};

const EntryPage: FC<Props> = ({ user, account }) => {
  return (
    <>
      <Head>
        <title>お申し込み | progLearning</title>
      </Head>
      <EntryTemplate user={user} account={account} />
    </>
  );
};

export default EntryPage;

export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
  const supabase = getServerSupabaseClient(ctx);
  /* Sessionの取得 */
  const sessionRes = await supabase.auth.getSession();
  if (!sessionRes.data.session) {
    return {
      props: {
        user: null,
        account: null,
      },
    };
  }
  /* アカウント情報の取得 */
  const accountRes = await supabase
    .from('Account')
    .select()
    .eq('uid', sessionRes.data.session.user.id);

  return {
    props: {
      user: sessionRes.data.session.user,
      account: accountRes.data?.length ? (accountRes.data[0] as Account) : null,
    },
  };
};
