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
    /* Sessionを更新 */
    case 'PATCH':
      try {
        const ts = req.query.ts as string;
        const response = await prisma.discordLearningSession.update({
          where: {
            slack_timestamp: ts,
          },
          data: req.body,
        });

        res.status(200).json(response);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
        res.status(500).json(error);
      }

      break;

    /* Sessionを削除 */
    case 'DELETE':
      try {
        const ts = req.query.ts as string;
        const response = await prisma.discordLearningSession.delete({
          where: {
            slack_timestamp: ts,
          },
        });
        if (!response) {
          res.status(404).end('Not Found');

          return;
        }

        res.status(200).json(response);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
        res.status(500).json(error);
      }

      break;

    default:
      res.setHeader('Allow', ['PATCH', 'DELETE']);
      res.status(405).end('Method Not Allowed');

      break;
  }
}
