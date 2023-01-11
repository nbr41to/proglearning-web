import type { Stripe } from 'stripe';

import { stripe } from './client';

export const createCustomer = async (params: Stripe.CustomerCreateParams) => {
  const response = await stripe.customers.create(params);

  return response;
};
