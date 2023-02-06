import type { NotionPageObjectResponse } from '@/types/notion';
import type { InferGetStaticPropsType, NextPage } from 'next';

import { LessonsTemplate } from '@/components/features/lesson/LessonsTemplate';
import dummy_lessons from '@/mocks/lessons.json';
import { getDatabaseContentsAll } from '@/server/notion/databases';
import { toLessons } from '@/utils/lesson';

export const getStaticProps = async () => {
  if (process.env.NEXT_PUBLIC_MOCK_MODE === 'true') {
    return {
      props: {
        lessons: dummy_lessons,
      },
    };
  }

  const pagesArray = await getDatabaseContentsAll({
    database_id: process.env.NOTION_LESSONS_DATABASE_ID || '',
    sorts: [
      {
        property: 'id',
        direction: 'ascending',
      },
    ],
    // filter: {
    //   property: 'Status',
    //   select: {
    //     equals: 'Publish',
    //   },
    // },
  });
  const pages = pagesArray.flat() as NotionPageObjectResponse[];

  const lessons = toLessons(pages);

  return {
    props: {
      lessons,
    },
  };
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const LessonsPage: NextPage<Props> = ({ lessons }) => {
  return (
    <>
      <LessonsTemplate lessons={lessons} />
    </>
  );
};

export default LessonsPage;
