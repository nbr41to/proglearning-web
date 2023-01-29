import type { Status } from '@prisma/client';

import { supabase } from '@/utils/supabase/client';
import useSWR from 'swr';

export const useAccountStatus = (uid: string | undefined) => {
  const { data, isLoading } = useSWR(uid && 'account-status', async () => {
    const response = await supabase.from('Status').select().eq('id', uid);

    return response.data?.length ? (response.data[0] as Status) : null;
  });

  return { data, isLoading };
};
