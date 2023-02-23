import StripeClient from 'stripe';

export const stripe = new StripeClient(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2022-11-15',
});
