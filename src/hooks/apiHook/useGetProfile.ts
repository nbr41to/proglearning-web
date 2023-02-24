import type { Profile } from '@/models/profile/types';

import { axiosGetFetcher } from '@/libs/axios/fetchers';
import { useUser } from '@supabase/auth-helpers-react';
import useSWR from 'swr';

export const useGetMeProfile = (uid: string) => {
  const user = useUser();

  return useSWR<Profile>(
    user && uid && `/api/v1/me/profiles/${uid}`,
    axiosGetFetcher<Profile>
  );
};
