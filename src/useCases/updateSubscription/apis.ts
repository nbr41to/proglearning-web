import axios from 'axios';

/* StripeのカスタマーポータルのURLを取得する */
export const getBillingPortalUrl = async (uid: string) =>
  axios.post('/api/stripe/create-portal-session', { uid });
