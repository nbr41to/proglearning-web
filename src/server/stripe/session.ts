import { stripe } from './client';
import { baseUrl } from '@/utils/url';

export const createCheckoutSession = async (params: {
  customerId: string;
  priceId: string;
}) => {
  const response = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    mode: 'subscription',
    customer: params.customerId,
    line_items: [
      {
        price: params.priceId,
        quantity: 1,
      },
    ],
    success_url: `${baseUrl}/entry`,
    cancel_url: `${baseUrl}/entry`,
  });

  return response;
};

export const createPortalSession = async (customerId: string) => {
  const response = await stripe.billingPortal.sessions.create({
    customer: customerId,
    return_url: `${baseUrl}/setting`,
  });

  return response;
};

export const getSession = async (sessionId: string) => {
  const response = await stripe.checkout.sessions.retrieve(sessionId);

  return response;
};
