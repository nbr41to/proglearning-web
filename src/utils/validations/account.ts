import type { AccountValidatedCreateParams } from '@/models/account/types';

import { accountCreateSchema } from '@/models/account/scheme';
import { validate } from '@/utils/validate';

/* TODO: react-hook-formのresolverを使用するので不要だけどサンプルとして残留  */
export const validateCreateAccount = (input: unknown) =>
  validate<AccountValidatedCreateParams>(accountCreateSchema, input);
