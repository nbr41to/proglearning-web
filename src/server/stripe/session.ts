import { stripe } from './client';
import { baseUrl } from '@/utils/url';

export const createSession = async (customerId: string) => {
  const response = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    mode: 'subscription',
    billing_address_collection: 'required',
    customer: customerId,
    line_items: [
      {
        price: 'price_1MOJjhA3j54eC8NHxpctTTur',
        quantity: 1,
      },
    ],
    allow_promotion_codes: true,
    subscription_data: {
      trial_from_plan: true,
    },
    success_url: `${baseUrl}/entry`,
    cancel_url: `${baseUrl}/entry`,
  });

  return response;
};

export const createSessionUpdate = async (
  customerId: string,
  subscriptionId: string
) => {
  const response = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    mode: 'setup',
    customer: customerId,
    setup_intent_data: {
      metadata: {
        customer_id: customerId,
        subscription_id: subscriptionId,
      },
    },
    success_url: `${baseUrl}/setting`,
    cancel_url: `${baseUrl}/setting`,
  });

  return response;
};

export const getSession = async (sessionId: string) => {
  const response = await stripe.checkout.sessions.retrieve(sessionId);

  return response;
};
