import type { Lesson } from '@/types/lesson';
import type { FC } from 'react';

import { PageTitle } from '@/components/common/PageTitle';
import { LessonCard } from '@/components/features/lesson/LessonCard';
import { Button } from '@mantine/core';
import Link from 'next/link';
import { useState } from 'react';

type Props = {
  lessons: Lesson[];
};

export const LessonsTemplate: FC<Props> = ({ lessons }) => {
  const [viewType, setViewType] = useState<'card' | 'list'>('card');
  const toggleViewType = () => {
    if (viewType === 'card') {
      setViewType('list');
    } else {
      setViewType('card');
    }
  };

  return (
    <div className="w-main mx-auto">
      <PageTitle title="Lessons" />
      <Button onClick={toggleViewType}>
        {viewType === 'card' ? 'at List' : 'at Card'}
      </Button>

      {viewType === 'card' && (
        <div className="flex flex-wrap gap-4">
          {lessons.map((lesson) => (
            <LessonCard key={lesson.id} lesson={lesson} />
          ))}
        </div>
      )}

      {viewType === 'list' && (
        <div className="">
          {lessons.map((lesson) => (
            <div key={lesson.id}>
              <div>{lesson.title}</div>
              <div className="flex flex-col pl-4">
                {lesson.contents.map((content) => (
                  <Link key={content.id} href={`/lessons/${content.id}`}>
                    {content.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
