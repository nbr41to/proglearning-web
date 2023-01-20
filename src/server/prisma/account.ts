import { prisma } from '@/server/prisma/client';

/**
 * アカウントを取得
 * @param userId
 * @returns Account
 */
export const getAccount = async (userId: string) => {
  const account = await prisma.account.findUnique({
    where: {
      uid: userId,
    },
  });

  return account;
};
