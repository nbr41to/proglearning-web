import type { Account, Payment, Profile, Status } from '@prisma/client';

import { axiosGetFetcher } from '@/utils/axios/fetchers';
import { useUser } from '@supabase/auth-helpers-react';
import useSWR from 'swr';

export const useGetAccounts = () => {
  const user = useUser();
  const { data, isLoading, mutate } = useSWR<
    (Account & {
      payment: Payment;
      profile: Profile;
      status: Status;
    })[]
  >(user && '/api/admin/accounts', axiosGetFetcher, {
    fallbackData: [],
  });

  return { data: data || [], isLoading, mutate };
};
