import type { Account, Profile, Status } from '@prisma/client';
import type { GetServerSideProps } from 'next';
import type { FC } from 'react';

import { prisma } from '@/server/prisma/client';
import { getServerSupabaseClient } from '@/server/supabase/client';

type Props = {
  account: Account & {
    profile: Profile;
    status: Status;
  };
};

const DashboardPage: FC<Props> = ({ account }) => {
  return (
    <div>
      <h2>Dashboard Page</h2>
      <div>ようこそ！{account.profile.name}さん</div>
      <div>最近見たLessons</div>
    </div>
  );
};

export default DashboardPage;

export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
  const supabase = getServerSupabaseClient(ctx);
  const response = await supabase.auth.getSession();
  if (!response.data.session)
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };

  const user = response.data.session.user;
  const account = await prisma.account.findUnique({
    where: {
      uid: user.id,
    },
    include: {
      profile: true,
      status: true,
    },
  });
  if (!account)
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };

  return {
    props: {
      account: JSON.parse(JSON.stringify(account)) as Account & {
        profile: Profile;
        status: Status;
      },
    },
  };
};
