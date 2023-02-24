import type { Status } from '@/models/status/types';

import { axiosGetFetcher } from '@/libs/axios/fetchers';
import { useUser } from '@supabase/auth-helpers-react';
import useSWR from 'swr';

export const useGetMeStatus = () => {
  const user = useUser();

  return useSWR<Status>(user && '/api/v1/me/status', axiosGetFetcher<Status>);
};
