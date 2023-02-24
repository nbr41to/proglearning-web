import type { MyLesson } from '@/models/myLesson/types';

import { axiosGetFetcher } from '@/libs/axios/fetchers';
import { useUser } from '@supabase/auth-helpers-react';
import useSWR from 'swr';

export const useGetLessons = () => {
  const user = useUser();

  return useSWR<MyLesson[]>(
    user && '/api/v1/lessons',
    axiosGetFetcher<MyLesson[]>
  );
};
