import type { Account, Payment, Profile, Status } from '@prisma/client';

import { axiosGetFetcher } from '@/utils/axios/fetchers';
import useSWR from 'swr';

export const useGetAccounts = () => {
  const { data, isLoading, mutate } = useSWR<
    (Account & {
      payment: Payment;
      profile: Profile;
      status: Status;
    })[]
  >('/api/admin/accounts', axiosGetFetcher, {
    fallbackData: [],
  });

  return { data: data || [], isLoading, mutate };
};
