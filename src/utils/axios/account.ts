import type { ProfileSchemaUpdateParams } from '@/validations/scheme/profile';

import axios from 'axios';

/* アカウント情報の更新 */
export const updateAccount = async (params: ProfileSchemaUpdateParams) =>
  axios.patch(`/api/auth/me`, params);

/* アカウントの削除 */
export const deleteAccount = async () =>
  axios.delete('/api/auth/me/withdrawal');
