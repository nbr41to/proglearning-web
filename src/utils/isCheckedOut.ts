import type { Account } from '@prisma/client';

/**
 * 支払いが済んでいるアカウントかどうか確認
 */
export const isCheckedOut = (account: Account) =>
  account !== null &&
  account.stripe_checkout_status === 'complete' &&
  account.stripe_subscription_status === 'active';
