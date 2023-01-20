import type { GetServerSideProps } from 'next';

import { getServerSupabaseClient } from '@/server/supabase/client';

const GettingStarted = () => {
  return (
    <div>
      <h2>Getting Started</h2>
    </div>
  );
};

export default GettingStarted;

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
