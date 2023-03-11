import type { Status } from '@/models/status/types';

import { axiosGetFetcher } from '@/libs/axios/fetchers';
import useSWR from 'swr';

export const useGetMeStatus = () => {
  return useSWR<Status>('/api/v1/me/status', axiosGetFetcher<Status>);
};
