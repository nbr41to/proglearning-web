import type { AccountGetPayload } from '@/models/account/types';

import { axiosGetFetcher } from '@/libs/axios/fetchers';
import { useUser } from '@supabase/auth-helpers-react';
import useSWR from 'swr';

export const useGetAccounts = () => {
  const user = useUser();

  return useSWR<
    AccountGetPayload<{
      profile: true;
      status: true;
      payment: true;
    }>[]
  >(
    user && '/api/v1/admin/accounts',
    axiosGetFetcher<
      AccountGetPayload<{
        profile: true;
        status: true;
        payment: true;
      }>[]
    >
  );
};
