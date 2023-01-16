import type { Account } from '@prisma/client';

import { supabase } from './client';

export const createUser = async (params: Account) => {
  const response = await supabase.from('Account').insert(params);

  return response;
};

export const getUser = async (uid: string) => {
  const response = await supabase.from('Account').select().eq('uid', uid);

  return response.data?.length ? (response.data[0] as Account) : null;
};
