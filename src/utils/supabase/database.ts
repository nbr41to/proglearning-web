import type { User } from '@prisma/client';

import { supabase } from './client';

export const createUser = async (params: User) => {
  const response = await supabase.from('User').insert(params);

  return response;
};

export const getUser = async (uid: string) => {
  const response = await supabase.from('User').select().eq('uid', uid);

  return response.data?.length ? (response.data[0] as User) : null;
};
