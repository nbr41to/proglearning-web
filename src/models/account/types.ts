import type {
  SELECT_ITEMS_BY_FIND,
  SELECT_ITEMS_OS,
} from '@/models/account/constants';
import type { entrySchema } from '@/models/account/scheme';
import type { Prisma, Account as PrismaAccount } from '@prisma/client';
import type { z } from 'zod';

export type Account = PrismaAccount;
export type AccountIncludes = Prisma.AccountGetPayload<{
  include: {
    profile: true;
    payment: true;
    status: true;
  };
}>;

/* API parameters */
export type AccountPrismaCreateParams = Prisma.AccountCreateInput;
export type AccountPrismaUpdateParams = Prisma.AccountUpdateInput;
export type AccountPrismaDeleteParams = Prisma.AccountWhereUniqueInput;

/* Validated parameters */
export type EntryValidatedCreateParams = z.infer<typeof entrySchema>;

/* Input */
export type SelectItemOsValue = (typeof SELECT_ITEMS_OS)[number]['value'];
export type SelectItemByFindValue =
  (typeof SELECT_ITEMS_BY_FIND)[number]['value'];
