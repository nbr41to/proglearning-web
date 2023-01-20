import type { GetServerSideProps } from 'next';
import type { FC, ReactNode } from 'react';

import { getServerSupabaseClient } from '@/server/supabase/client';

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
  const supabase = getServerSupabaseClient(ctx);
  const response = await supabase.auth.getSession();
  if (!response.data.session)
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };

  return {
    props: {
      user: response.data.session.user,
    },
  };
};
