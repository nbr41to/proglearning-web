import type { GetServerSideProps } from 'next';

import { getServerSideSession } from '@/utils/supabase/auth';

const GettingStarted = () => {
  return (
    <div>
      <h2>Getting Started</h2>
    </div>
  );
};

export default GettingStarted;

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
