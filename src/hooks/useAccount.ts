import type { Account } from '@prisma/client';

import { supabase } from '@/utils/supabase/client';
import useSWR from 'swr';

export const useAccount = (uid?: string) => {
  const { data, isLoading } = useSWR(uid && 'account', async () => {
    const response = await supabase.from('Account').select().eq('uid', uid);

    return response.data?.length ? (response.data[0] as Account) : null;
  });

  return { data, isLoading };
};
