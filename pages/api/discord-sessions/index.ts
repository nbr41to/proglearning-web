import type { NextApiRequest, NextApiResponse } from 'next';

import { prisma } from '@/server/prisma/client';

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

  switch (req.method) {
    /* 最新のSessionを取得 */
    case 'GET':
      try {
        const response = await prisma.discordLearningSession.findMany({
          orderBy: {
            created_at: 'desc',
          },
          take: 1,
        });

        if (response.length === 0) {
          res.status(404).end('Not Found');
          break;
        }

        res.status(200).json(response[0]);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
        res.status(500).json(error);
      }

      break;

    /* Sessionを作成 */
    case 'POST':
      try {
        const response = await prisma.discordLearningSession.create({
          data: req.body,
        });

        res.status(200).json(response);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
        res.status(500).json(error);
      }

      break;

    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end('Method Not Allowed');

      break;
  }
}
