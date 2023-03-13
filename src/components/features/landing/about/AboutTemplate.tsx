import type { NotionBlockObjectResponse } from '@/types/notion';
import type { FC } from 'react';

import { TableOfContents } from '@/components/features/landing/about/TableOfContents';
import { blockToJsx } from '@/components/notion/blockToJsx';
import { useMemo } from 'react';

type Props = {
  blocks: NotionBlockObjectResponse[];
};
export const AboutTemplate: FC<Props> = ({ blocks }) => {
  const headingList = useMemo(
    () =>
      blocks.flatMap((block) => {
        if (block.type === 'heading_2') {
          return {
            id: block.id,
            type: block.type,
            title: block.heading_2.rich_text[0].plain_text,
          };
        }
        if (block.type === 'heading_3') {
          return {
            id: block.id,
            type: block.type,
            title: block.heading_3.rich_text[0].plain_text,
          };
        }

        return [];
      }),
    [blocks]
  );

  return (
    <div className="mx-auto flex justify-center gap-8 px-8 pt-7 sp:pt-0">
      <div className="w-aside">
        <div className="sticky top-28 max-w-[240px]">
          <TableOfContents headingList={headingList} />
        </div>
      </div>

      <div className="w-main flex-grow sp:px-4">
        {blocks.map((block) => (
          <div key={block.id}>{blockToJsx(block)}</div>
        ))}
      </div>
    </div>
  );
};
