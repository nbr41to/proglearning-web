import type {
  AccountGetPayload,
  AccountInclude,
  AccountQueryParams,
} from '@/models/account/types';

import { axiosGetQueryFetcher } from '@/libs/axios/fetchers';
import useSWR from 'swr';

export const useGetMe = <T extends AccountInclude>(
  query?: AccountQueryParams
) => {
  return useSWR<AccountGetPayload<T> | null, AccountQueryParams>(
    ['/api/v1/me', query],
    axiosGetQueryFetcher<AccountGetPayload<T>, AccountQueryParams>
  );
};
