import type {
  AccountValidatedCreateParams,
  AccountValidatedUpdateParams,
} from '@/models/account/types';

import axios from 'axios';

/**
 * Accountの新規作成
 */
export const createAccount = async (params: AccountValidatedCreateParams) =>
  axios.post('/api/v1/me', params);

/**
 * Accountの更新
 */
export const updateAccount = async (params: AccountValidatedUpdateParams) =>
  axios.patch('/api/v1/me', params);

/**
 * 退会
 */
export const withdraw = async () => axios.delete(`/api/v1/me/withdrawal`);

/* Admin API */

/**
 * 指定したAccountとUserの削除
 */
export const deleteUserAndAccount = async (uid: string) =>
  axios.delete(`/api/v1/admin/accounts/${uid}`);
