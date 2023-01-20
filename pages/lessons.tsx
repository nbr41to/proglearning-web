import type { GetServerSideProps } from 'next';

import { getServerSupabaseClient } from '@/server/supabase/client';

const Lessons = () => {
  return (
    <div>
      <h2>Lessons</h2>
    </div>
  );
};

export default Lessons;

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
