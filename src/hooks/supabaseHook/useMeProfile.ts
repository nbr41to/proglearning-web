import type { Profile } from '@prisma/client';

import { showNotification } from '@mantine/notifications';
import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react';
import useSWR from 'swr';
import useSWRMutation from 'swr/mutation';

export const useMeProfile = () => {
  const user = useUser();
  const supabase = useSupabaseClient();

  const { data, isLoading, mutate } = useSWR(
    user && `/account/profile/${user.id}`,
    async (url) => {
      const uid = url.split('/').pop();
      const response = await supabase.from('Profile').select().eq('id', uid);

      return response.data?.length ? (response.data[0] as Profile) : null;
    }
  );

  const { trigger: updateGoal } = useSWRMutation(
    user && `/account/profile/goal/${user.id}`,
    async (url: string, { arg }: { arg: string }) => {
      const uid = url.split('/').pop();
      const response = await supabase
        .from('Profile')
        .update({ current_goal: arg })
        .eq('id', uid);

      if (response.error) {
        showNotification({
          title: 'Error',
          message: response.error.message,
          color: 'red',
        });
      } else {
        showNotification({
          title: 'Success',
          message: 'Goal updated',
          color: 'green',
        });
      }
      await mutate();
    }
  );

  return { data, isLoading, mutate, updateGoal };
};
