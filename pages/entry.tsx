import type { Account } from '@prisma/client';
import type { User } from '@supabase/supabase-js';
import type { GetServerSideProps } from 'next';
import type { FC } from 'react';

import { EntryTemplate } from '@/features/entry/EntryTemplate';
import { getAccount } from '@/server/prisma/account';
import { getSessionUser } from '@/server/supabase/auth';
import Head from 'next/head';

type Props = {
  user: User | null;
  account: Account | null;
};

const Entry: FC<Props> = ({ user, account }) => {
  return (
    <>
      <Head>
        <title>お申し込み | progLearning</title>
      </Head>
      <EntryTemplate user={user} account={account} />
    </>
  );
};

export default Entry;

export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
  const user = await getSessionUser(ctx);
  if (!user) {
    return {
      props: {
        user: null,
        account: null,
      },
    };
  }
  const account = await getAccount(user.id);

  return {
    props: {
      user,
      account,
    },
  };
};
