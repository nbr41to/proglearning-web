import type { Lesson } from '@prisma/client';

import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react';
import useSWR from 'swr';
import useSWRMutation from 'swr/mutation';

export const useMeLesson = (lessonId: string) => {
  const user = useUser();
  const supabase = useSupabaseClient();
  const uid = user?.id;
  /* Get */
  const { data, isLoading, mutate } = useSWR(
    user && `/account/${user.id}/lessons/${lessonId}`,
    async () => {
      const response = await supabase
        .from('Lesson')
        .select()
        .eq('uid', uid)
        .eq('id', lessonId);

      return response.data?.length ? (response.data[0] as Lesson) : null;
    }
  );

  /* Update Mutation */
  const {
    trigger,
    isMutating,
    error: updateError,
  } = useSWRMutation(
    user && `/account/${user.id}/lessons/${lessonId}`,
    async (
      _,
      {
        arg,
      }: {
        arg: Partial<Lesson>;
      }
    ) => {
      const response = await supabase
        .from('Lesson')
        .insert({ ...arg, uid })
        .eq('uid', uid)
        .eq('id', lessonId);
      await mutate();

      return response;
    }
  );

  return {
    data,
    isLoading,
    mutate,
    trigger,
    isMutating,
    updateError,
  };
};
