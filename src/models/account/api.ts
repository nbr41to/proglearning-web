import type { EntryValidatedCreateParams } from '@/models/account/types';

import axios from 'axios';

/* アカウントの新規作成 */
export const createAccount = async (
  params: EntryValidatedCreateParams & { uid: string }
) => axios.post('/api/v1/accounts', params);

export const deleteUserAndAccount = async (uid: string) => {
  return axios.delete(`/api/admin/accounts/${uid}`);
};
