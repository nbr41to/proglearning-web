import type {
  SELECT_ITEMS_BY_FIND,
  SELECT_ITEMS_OS,
} from '@/models/account/constants';
import type {
  accountQuerySchema,
  accountUpdateSchema,
  accountCreateSchema,
} from '@/models/account/scheme';
import type { Prisma, Account as PrismaAccount } from '@prisma/client';
import type { z } from 'zod';

export type Account = PrismaAccount;

export type AccountInclude = Prisma.AccountInclude;
export type AccountGetPayload<T extends AccountInclude> =
  Prisma.AccountGetPayload<{ include: T }>;

/* API parameters */
export type AccountQueryParams = Omit<Prisma.AccountInclude, 'payment'>;
export type AccountPrismaCreateParams = Prisma.AccountCreateInput;
export type AccountPrismaUpdateParams = Prisma.AccountUpdateInput;

/* Validated parameters */
export type AccountValidatedQueryParams = z.infer<typeof accountQuerySchema>;
export type AccountValidatedCreateParams = z.infer<typeof accountCreateSchema>;
export type AccountValidatedUpdateParams = z.infer<typeof accountUpdateSchema>;

/* Input */
export type SelectItemOsValue = (typeof SELECT_ITEMS_OS)[number]['value'];
export type SelectItemByFindValue =
  (typeof SELECT_ITEMS_BY_FIND)[number]['value'];
