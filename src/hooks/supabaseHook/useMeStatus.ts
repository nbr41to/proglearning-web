import type { Status } from '@prisma/client';

import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react';
import useSWR from 'swr';
import useSWRMutation from 'swr/mutation';

export const useMeStatus = () => {
  const user = useUser();
  const supabase = useSupabaseClient();
  /* Get */
  const { data, isLoading, mutate } = useSWR(
    user && `/account/status/${user.id}`,
    async (url) => {
      const uid = url.split('/').pop();
      const response = await supabase.from('Status').select().eq('id', uid);

      return response.data?.length ? (response.data[0] as Status) : null;
    }
  );

  /* Update Mutation */
  const {
    trigger,
    isMutating,
    error: updateError,
  } = useSWRMutation(
    user && `/account/status/${user.id}`,
    async (url, { arg }: { arg: Partial<Status> }) => {
      const uid = url.split('/').pop();
      const response = await supabase.from('Status').update(arg).eq('id', uid);

      return response;
    }
  );

  return { data, isLoading, mutate, trigger, isMutating, updateError };
};
