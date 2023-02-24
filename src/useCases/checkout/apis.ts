import axios from 'axios';

/* Stripeのcheckoutを作成する */
export const createStripeCheckout = async (uid: string) =>
  axios.post('/api/stripe/create-checkout-session', { uid });
