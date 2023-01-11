import type { NextApiRequest, NextApiResponse } from 'next';

import { sendMessage } from '@/utils/slack/chat';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const { name, email, os } = req.body;
      const response = await sendMessage({
        channel: 'G01NLM1CJK1',
        text: `お申し込みがありました！\n名前: ${name}\n${email}\nOS: ${os}`,
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
