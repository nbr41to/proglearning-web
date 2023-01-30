import type { Account } from '@prisma/client';

import { axiosGetFetcher } from '@/utils/axios/fetchers';
import useSWR from 'swr';

export const useGetMe = () => {
  const { data, isLoading, mutate } = useSWR<Account | null>(
    '/api/auth/me',
    axiosGetFetcher
  );

  return { data, isLoading, mutate };
};
