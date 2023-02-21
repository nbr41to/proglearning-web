import type { Todo } from '@/models/todo/types';

import { axiosGetFetcher } from '@/utils/axios/fetchers';
import { useUser } from '@supabase/auth-helpers-react';
import useSWR from 'swr';

export const useGetTodos = () => {
  const user = useUser();
  const { data, isLoading, mutate } = useSWR<Todo[]>(
    user && '/api/v1/todos',
    axiosGetFetcher
  );

  return {
    data: data || [],
    isLoading,
    mutate,
  };
};
