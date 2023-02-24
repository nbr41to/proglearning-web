import type { Lesson } from '@/types/lesson';
import type { FC } from 'react';

import { PageTitle } from '@/components/common/PageTitle';
import { LessonCard } from '@/components/features/lesson/LessonCard';
import { createLesson, getLesson, updateLesson } from '@/models/myLesson/apis';
import { Button } from '@mantine/core';
import { useRouter } from 'next/router';
import { useState } from 'react';

type Props = {
  lessons: Lesson[];
};

export const LessonsTemplate: FC<Props> = ({ lessons }) => {
  const router = useRouter();

  const [viewType, setViewType] = useState<'card' | 'list'>('card');
  const toggleViewType = () => {
    if (viewType === 'card') {
      setViewType('list');
    } else {
      setViewType('card');
    }
  };

  const viewLesson = async (lessonId: string) => {
    const response = await getLesson(lessonId);
    if (!response.data) {
      await createLesson({
        id: lessonId,
        completed: false,
        last_viewed_at: new Date(),
      });
    } else {
      await updateLesson({ id: lessonId, last_viewed_at: new Date() });
    }
    await router.push(`/lessons/${lessonId}`);
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
            <LessonCard key={lesson.id} lesson={lesson} onView={viewLesson} />
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
                  <div
                    key={content.id}
                    className="cursor-pointer hover:underline"
                    onClick={() => viewLesson(content.id)}
                  >
                    {content.title}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
