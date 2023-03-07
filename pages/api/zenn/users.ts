import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const zennId = req.query.id as string;
    try {
      const response = await fetch(`https://zenn.dev/api/users/${zennId}`);
      if (response.status === 404) return res.status(404).end('Not Found');
      const data = await response.json();
      res.status(200).json(data);
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
