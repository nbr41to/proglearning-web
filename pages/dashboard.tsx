import type { GetServerSideProps } from 'next';
import type { FC, ReactNode } from 'react';

import { getServerSideSession } from '@/utils/supabase/auth';

type Props = {
  children: ReactNode;
};

const DashboardPage: FC<Props> = () => {
  return (
    <div>
      <h2>Dashboard Page</h2>
      <div></div>
    </div>
  );
};

export default DashboardPage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getServerSideSession(ctx);

  if (!session)
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };

  return {
    props: {
      user: session.user,
    },
  };
};
