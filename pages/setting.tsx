import type { Account, Profile, Status } from '@prisma/client';
import type { GetServerSideProps, NextPage } from 'next';

import { SettingTemplate } from '@/features/setting/SettingTemplate';
import { prisma } from '@/server/prisma/client';
import { getServerSupabaseClient } from '@/server/supabase/client';
import { updateAccount } from '@/utils/axios/account';

type Props = {
  account: Account & {
    profile: Profile;
    status: Status;
  };
};

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

const SettingPage: NextPage<Props> = ({ account }) => {
  const saveAccount = async (data: any) => {
    const response = await updateAccount(data);

    if (!response) return;
    window.location.reload();
  };

  return (
    <div>
      <SettingTemplate account={account} onSubmit={saveAccount} />
    </div>
  );
};

export default SettingPage;
