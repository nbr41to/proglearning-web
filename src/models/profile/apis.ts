import type { ProfileValidatedUpdateParams } from '@/models/profile/types';

import axios from 'axios';

/**
 * Profileの更新
 */
export const updateProfile = async (params: ProfileValidatedUpdateParams) =>
  axios.patch('/api/v1/me/profile', params);
