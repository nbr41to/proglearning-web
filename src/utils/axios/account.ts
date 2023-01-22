import type { Account } from '@prisma/client';

import axios from 'axios';

export const createAccount = async (
  params: Omit<Account, 'createdAt' | 'updatedAt'>
) => axios.post('/api/auth/users', params);
