import type { ErrorResponse } from '@/types/error';
import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

import { prisma } from '@/server/prisma/client';
import { stripe } from '@/server/stripe/client';
import { deleteUser } from '@/server/supabase/admin';
import { getSessionUser } from '@/server/supabase/auth';

type Response = boolean | ErrorResponse;

const ProtectedRoute: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse<Response>
) => {
  const user = await getSessionUser({ req, res });
  if (!user)
    return res.status(401).json({
      status: 401,
      message: 'unauthorized',
    });

  const uid = user.id;
  const method = req.method;

  if (method === 'DELETE') {
    if (!user) return res.json(false);
    /* ιδΌε¦η */
    try {
      /* Delete Stripe Customer */
      const payment = await prisma.payment.findUnique({
        where: {
          id: uid,
        },
      });

      if (payment?.stripe_checkout_status) {
        const stripeCustomerId = payment.stripe_customer_id;
        if (stripeCustomerId) {
          await stripe.customers.del(stripeCustomerId);
        } else {
          return res.status(400).json({
            status: 400,
            message: 'stripe_customer_id_not_found',
          });
        }
      }

      /* Delete Account at Supabase DB */
      const deleteParamsId = {
        where: {
          id: uid,
        },
      };
      const deleteParamsUid = {
        where: {
          uid: uid,
        },
      };
      await prisma.$transaction(async (tx) => {
        await tx.payment.delete(deleteParamsId);
        await tx.profile.delete(deleteParamsId);
        await tx.status.delete(deleteParamsId);
        await tx.lesson.deleteMany(deleteParamsUid);
        await tx.account.delete(deleteParamsUid);
        await deleteUser(uid);
      });

      return res.json(true);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);

      return res.status(500).json({
        status: 500,
        message: 'internal_server_error',
      });
    }
  }

  res.setHeader('Allow', 'DELETE');
  res.status(405).end('Method Not Allowed');
};

export default ProtectedRoute;
