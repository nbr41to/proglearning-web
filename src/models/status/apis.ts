import type { StatusValidatedUpdateParams } from '@/models/status/types';

import axios from 'axios';

/**
 * Statusの更新
 */
export const updateStatus = async (params: StatusValidatedUpdateParams) => {
  return axios.patch(`/api/v1/me/status`, params);
};
