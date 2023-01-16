import type { Account } from '@prisma/client';
import type { User } from '@supabase/supabase-js';
import type { GetServerSideProps } from 'next';
import type { FC } from 'react';

import { EntryTemplate } from '@/features/entry/EntryTemplate';
import { getServerSupabaseClient } from '@/utils/supabase/client';
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
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const response = await supabase
    .from('Account')
    .select()
    .eq('uid', session?.user.id);

  return {
    props: {
      user: session?.user || null,
      account: response.data?.length ? (response.data[0] as Account) : null,
    },
  };
};
