import type { NextApiRequest, NextApiResponse } from 'next';

import { getPublicChannelList } from '@/server/slack/conversations';

/* チャンネルリストの取得 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    try {
      const { channels } = await getPublicChannelList();

      const list = channels?.map((channel) => {
        return {
          id: channel.id,
          name: channel.name,
        };
      });

      res.status(200).json(list || []);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
      res.status(500).json(error);
    }
  } else {
    res.setHeader('Allow', 'GET');
    res.status(405).end('Method Not Allowed');
  }
}
