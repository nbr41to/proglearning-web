import type { Status } from '@prisma/client';

import { supabase } from '@/utils/supabase/client';
import { useUser } from '@supabase/auth-helpers-react';
import useSWR from 'swr';

export const useAccountStatus = () => {
  const user = useUser();
  const { data, isLoading } = useSWR(user && 'account-status', async () => {
    const response = await supabase.from('Status').select().eq('id', user?.id);

    return response.data?.length ? (response.data[0] as Status) : null;
  });

  return { data, isLoading };
};
