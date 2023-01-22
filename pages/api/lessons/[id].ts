import type { NextApiRequest, NextApiResponse } from 'next';

import { getDatabaseContents } from '@/server/notion/databases';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    try {
      const pageId = req.query.id as string;
      const response = await getDatabaseContents({
        database_id: process.env.NOTION_LESSONS_DATABASE_ID || '',
        filter: {
          and: [
            {
              property: 'Parent',
              relation: {
                contains: pageId,
              },
            },
          ],
        },
      });

      res.status(200).json(response.results || []);
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
