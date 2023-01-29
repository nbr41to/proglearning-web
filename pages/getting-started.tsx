import type { NotionBlockObjectResponse } from '@/types/notion';
import type { GetServerSideProps, NextPage } from 'next';

import { PageTitle } from '@/common/PageTitle';
import { blockToJsx } from '@/components/notion/blockToJsx';
import { getChildrenAllInBlock } from '@/server/notion/blocks';
import { getSessionUser } from '@/server/supabase/auth';

type Props = {
  blocks: NotionBlockObjectResponse[];
};

/* Using Notion Page */
const GettingStarted: NextPage<Props> = ({ blocks }) => {
  return (
    <div>
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

export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
  const user = await getSessionUser(ctx);
  if (!user)
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };

  const blocks = (await getChildrenAllInBlock(
    process.env.NOTION_GETTING_STARTED_PAGE_ID || ''
  )) as NotionBlockObjectResponse[];

  return {
    props: {
      user,
      blocks,
    },
  };
};
