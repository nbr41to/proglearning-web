import type { NextApiRequest, NextApiResponse } from 'next';

import { prisma } from '@/server/prisma/client';
import { sendMessage } from '@/server/slack/chat';

/* Slackに参加したときにUser IDをDBに保存する */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  /* 認証 */
  const apiKey = req.headers.authorization?.replace('Bearer ', '');
  const decodedApiKey = apiKey
    ? Buffer.from(apiKey, 'base64').toString()
    : undefined;

  if (!decodedApiKey || decodedApiKey !== process.env.DISCORD_SESSION_API_KEY) {
    res.status(401).end('Unauthorized');

    return;
  }
  const method = req.method;

  if (method === 'PATCH') {
    const { email, slackUserId } = req.body;
    if (!email || !slackUserId)
      return res
        .status(400)
        .end('Bad Request - email or slackUserId is not found');

    try {
      /* EmailからAccountを取得 */
      const account = await prisma.account.findUnique({
        where: {
          email,
        },
      });

      if (account) {
        const response = await prisma.account.update({
          where: {
            email,
          },
          data: {
            slack_user_id: slackUserId,
          },
        });

        if (!response)
          return res.status(400).end('Bad Request - failed to update');

        return res.status(200).json('success');
      } else {
        const response = await sendMessage({
          channel: process.env.SLACK_ADMIN_USER_ID ?? '',
          text: `*未登録者のJoinを検出しました。*\n*メールアドレス\n${email}\nSlackのID\n${slackUserId}`,
        });
        if (!response)
          return res.status(400).end('Bad Request - failed to send DM');

        return res.status(200).json('success');
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
      res.status(500).json(error);
    }
  }

  res.setHeader('Allow', ['PATCH']);
  res.status(405).end('Method Not Allowed');
}
