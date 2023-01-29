import type { Account } from '@prisma/client';

import axios from 'axios';

/* アカウントの新規作成 */
export const createAccount = async (
  params: Omit<Account, 'createdAt' | 'updatedAt'>
) => axios.post('/api/auth/users', params);

/* アカウント情報の更新 */
export const updateAccount = async (params: any) =>
  axios.patch(`/api/auth/users`, params);
