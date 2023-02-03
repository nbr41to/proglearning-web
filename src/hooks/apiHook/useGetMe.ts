import type { Account } from '@prisma/client';

import { axiosGetFetcher } from '@/utils/axios/fetchers';
import { useUser } from '@supabase/auth-helpers-react';
import useSWR from 'swr';

export const useGetMe = () => {
  const user = useUser();
  const { data, isLoading, mutate } = useSWR<Account | null>(
    user && '/api/auth/me',
    axiosGetFetcher
  );

  return { data, isLoading, mutate };
};
