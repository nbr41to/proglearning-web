import type { MyLesson } from '@/models/myLesson/types';

import { axiosGetFetcher } from '@/libs/axios/fetchers';
import { useUser } from '@supabase/auth-helpers-react';
import useSWR from 'swr';

export const useGetLesson = (lessonId: string) => {
  const user = useUser();

  return useSWR<MyLesson>(
    user && lessonId && `/api/v1/lessons/${lessonId}`,
    axiosGetFetcher<MyLesson>
  );
};
