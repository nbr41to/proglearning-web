import type { Payment } from '@prisma/client';

/**
 * 支払いが済んでいるアカウントかどうか確認
 */
export const isCheckedOut = (payment: Payment) =>
  payment.stripe_checkout_status === 'complete' &&
  payment.stripe_subscription_status === 'active';
