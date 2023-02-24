import type { LessonContent } from '@/types/lesson';
import type {
  NotionBlockObjectResponse,
  NotionPageObjectResponse,
} from '@/types/notion';
import type { NextPage, NextPageContext } from 'next';

import dummy_lesson from '@/__mocks__/lesson.json';
import { LessonContentTemplate } from '@/components/features/lesson/LessonContentTemplate';
import { getChildrenAllInBlock } from '@/server/notion/blocks';
import { getPage } from '@/server/notion/pages';
import { setOgp } from '@/utils/ogp';

export const getServerSideProps = async (context: NextPageContext) => {
  if (process.env.NEXT_PUBLIC_MOCK_MODE === 'true') {
    return {
      props: {
        lesson: dummy_lesson,
      },
    };
  }

  const lessonId = context.query.lessonId as string;

  const page = (await getPage(lessonId)) as NotionPageObjectResponse;
  const children = (await getChildrenAllInBlock(
    lessonId
  )) as NotionBlockObjectResponse[];

  const childrenWithOgp = await setOgp(children);

  const lesson = {
    page,
    children: childrenWithOgp,
  };

  return {
    props: {
      lesson,
    },
  };
};
type Props = {
  lesson: LessonContent;
};

const LessonDetail: NextPage<Props> = ({ lesson }) => {
  return (
    <>
      <LessonContentTemplate lesson={lesson} />
    </>
  );
};

export default LessonDetail;
