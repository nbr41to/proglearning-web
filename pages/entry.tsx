import type { Payment } from '@prisma/client';
import type { GetServerSideProps } from 'next';
import type { FC } from 'react';

import { EntryTemplate } from '@/features/entry/EntryTemplate';
import { prisma } from '@/server/prisma/client';
import { getSessionUser } from '@/server/supabase/auth';
import Head from 'next/head';

type Props = {
  payment: Payment | null;
};

const Entry: FC<Props> = ({ payment }) => {
  return (
    <>
      <Head>
        <title>お申し込み | progLearning</title>
      </Head>
      <EntryTemplate payment={payment} />
    </>
  );
};

export default Entry;

export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
  const user = await getSessionUser(ctx);
  if (!user) {
    return {
      props: {
        payment: null,
      },
    };
  }

  const response = await prisma.payment.findUnique({
    where: {
      id: user.id,
    },
  });
  // ignore serialized error
  const payment = JSON.parse(JSON.stringify(response)) as Payment;

  return {
    props: {
      payment,
    },
  };
};
