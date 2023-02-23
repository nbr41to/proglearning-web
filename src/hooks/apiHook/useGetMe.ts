import type {
  AccountGetPayload,
  AccountInclude,
  AccountQueryParams,
} from '@/models/account/types';

import { axiosGetQueryFetcher } from '@/libs/axios/fetchers';
import { useUser } from '@supabase/auth-helpers-react';
import useSWR from 'swr';

export const useGetMe = <T extends AccountInclude>(
  query?: AccountQueryParams
) => {
  const user = useUser();

  return useSWR<AccountGetPayload<T>, AccountQueryParams>(
    ['/api/v1/me', query],
    user && axiosGetQueryFetcher<AccountGetPayload<T>, AccountQueryParams>
  );
};
