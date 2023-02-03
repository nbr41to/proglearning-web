import type { Profile } from '@prisma/client';

import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react';
import useSWR from 'swr';

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

  return { data, isLoading, mutate };
};
