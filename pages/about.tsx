'use client';

import type { NotionBlockObjectResponse } from '@/types/notion';
import type { InferGetStaticPropsType, NextPage } from 'next';

import { AboutTemplate } from '@/components/features/landing/about/AboutTemplate';
import { getChildrenAllInBlock } from '@/server/notion/blocks';

export const getStaticProps = async () => {
  const blocks = (await getChildrenAllInBlock(
    process.env.NOTION_ABOUT_PAGE_ID || ''
  )) as NotionBlockObjectResponse[];

  return {
    props: {
      blocks,
    },
  };
};
type Props = InferGetStaticPropsType<typeof getStaticProps>;

/* Using Notion Page */
const AboutPage: NextPage<Props> = ({ blocks }) => {
  return (
    <>
      <AboutTemplate blocks={blocks} />
    </>
  );
};

export default AboutPage;
