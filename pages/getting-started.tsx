import type { NotionBlockObjectResponse } from '@/types/notion';
import type { NextPage, InferGetStaticPropsType } from 'next';

import { PageTitle } from '@/components/common/PageTitle';
import { blockToJsx } from '@/components/notion/blockToJsx';
import { getChildrenAllInBlock } from '@/server/notion/blocks';

export const getStaticProps = async () => {
  const blocks = (await getChildrenAllInBlock(
    process.env.NOTION_GETTING_STARTED_PAGE_ID || ''
  )) as NotionBlockObjectResponse[];

  return {
    props: {
      blocks,
    },
  };
};
type Props = InferGetStaticPropsType<typeof getStaticProps>;

/* Using Notion Page */
const GettingStarted: NextPage<Props> = ({ blocks }) => {
  return (
    <div className="py-10">
      <PageTitle title="Getting Started" />
      <div className="w-main mx-auto">
        {blocks.map((block) => (
          <div key={block.id}>{blockToJsx(block)}</div>
        ))}
      </div>
    </div>
  );
};

export default GettingStarted;
