import type { NextApiRequest, NextApiResponse } from 'next';

import { sendMessage } from '@/server/slack/chat';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const { text } = req.body;
      const response = await sendMessage({
        channel: process.env.SLACK_NOTI_FORM_CHANNEL_ID || '',
        mrkdwn: true,
        text,
      });

      if (!response.ok) {
        throw new Error(response.error);
      }

      res.status(200).json(response);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
      res.status(500).json(error);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
