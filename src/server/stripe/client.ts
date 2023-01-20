import type { Stripe } from '@stripe/stripe-js';

import { loadStripe } from '@stripe/stripe-js';
import StripeClient from 'stripe';

export const stripe = new StripeClient(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2022-11-15',
});

/* Client */
let stripePromise: Promise<Stripe | null>;

export const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(
      process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || ''
    );
  }

  return stripePromise;
};
