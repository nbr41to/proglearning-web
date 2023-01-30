import type { Profile } from '@prisma/client';

import { supabase } from '@/utils/supabase/client';
import useSWR from 'swr';

export const useGetAccountProfile = (uid: string | undefined) => {
  const { data, isLoading, mutate } = useSWR(
    uid && 'account-profile',
    async () => {
      const response = await supabase.from('Profile').select().eq('id', uid);

      return response.data?.length ? (response.data[0] as Profile) : null;
    }
  );

  return { data, isLoading, mutate };
};
