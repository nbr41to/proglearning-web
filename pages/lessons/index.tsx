import type { NotionPageObjectResponse } from '@/types/notion';
import type { NextPage } from 'next';

import { PageTitle } from '@/common/PageTitle';
import { useMeStatus } from '@/hooks/supabaseHook/useMeStatus';
import { getDatabaseContentsAll } from '@/server/notion/databases';
import { Button, Modal } from '@mantine/core';
import { useRouter } from 'next/router';
import { useMemo, useState } from 'react';

type Props = {
  lessons: any[];
};

const Lessons: NextPage<Props> = ({ lessons }) => {
  const router = useRouter();
  const [selectedLessonId, setSelectedLessonId] = useState<string>();
  const selectedLesson = useMemo(
    () =>
      lessons.find((lesson) => lesson.id === selectedLessonId) || {
        title: '',
        contents: [],
      },
    [selectedLessonId, lessons]
  );

  const { data, trigger } = useMeStatus();

  return (
    <div className="w-main mx-auto">
      <PageTitle title="Lessons" />
      <div>
        {lessons.map((lesson) => (
          <div
            className="cursor-pointer"
            key={lesson.id}
            onClick={() => setSelectedLessonId(lesson.id)}
          >
            <h3>
              {lesson.title}({lesson.contents.length})
            </h3>
          </div>
        ))}
      </div>
      <div>
        <div>lesson_histories: {data?.lesson_histories.join(',')}</div>
        <Button onClick={() => trigger({ lesson_histories: ['new-id-123'] })}>
          add-id
        </Button>
      </div>

      <Modal
        opened={!!selectedLessonId}
        onClose={() => setSelectedLessonId(undefined)}
        title="Lesson"
        size="lg"
      >
        <div>{selectedLesson.title}</div>
        <div>
          {selectedLesson.contents.map((title: string, i: number) => (
            <div key={i}>{title}</div>
          ))}
        </div>
        <Button onClick={() => router.push(`/lessons/${selectedLesson.id}`)}>
          学ぶ
        </Button>
      </Modal>
    </div>
  );
};

export default Lessons;

export const getStaticProps = async () => {
  const pagesArray = await getDatabaseContentsAll({
    database_id: process.env.NOTION_LESSONS_DATABASE_ID || '',
    sorts: [
      {
        property: 'id',
        direction: 'ascending',
      },
    ],
  });
  const pages = pagesArray.flat() as NotionPageObjectResponse[];

  const lessons = pages
    .filter((page) => {
      if (page.properties.Parent.type !== 'relation')
        throw new Error('Parent is not relation');

      return !page.properties.Parent.relation.length;
    })
    .map((parentPage) => {
      if (parentPage.properties.Name.type !== 'title')
        throw new Error('Name is not title');
      const title = parentPage.properties.Name.title[0].plain_text;
      const contents = pages
        .filter((page) => {
          if (page.properties.Parent.type !== 'relation') return;

          return page.properties.Parent.relation.some((relation) => {
            return relation.id === parentPage.id;
          });
        })
        .map((page) => {
          if (page.properties.Name.type !== 'title')
            throw new Error('Name is not title');

          return page.properties.Name.title[0].plain_text;
        });

      return {
        id: parentPage.id,
        title,
        contents,
      };
    });

  return {
    props: {
      lessons,
    },
  };
};
