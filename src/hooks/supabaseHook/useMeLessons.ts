import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react';
import useSWR from 'swr';

export const useMeLessons = () => {
  const user = useUser();
  const supabase = useSupabaseClient();
  const uid = user?.id;
  /* Get */
  const { data, isLoading, mutate } = useSWR(
    user && `/account/${user.id}/lessons`,
    async () => {
      const response = await supabase.from('Lesson').select().eq('uid', uid);

      return response.data;
    }
  );

  return {
    data: data || [],
    isLoading,
    mutate,
  };
};
