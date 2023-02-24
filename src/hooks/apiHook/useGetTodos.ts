import type { Todo } from '@/models/todo/types';

import { axiosGetFetcher } from '@/libs/axios/fetchers';
import { useUser } from '@supabase/auth-helpers-react';
import useSWR from 'swr';

export const useGetTodos = () => {
  const user = useUser();

  return useSWR<Todo[]>(user && '/api/v1/todos', axiosGetFetcher<Todo[]>);
};
