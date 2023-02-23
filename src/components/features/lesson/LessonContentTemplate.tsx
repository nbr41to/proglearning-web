import type { LessonContent } from '@/types/lesson';
import type { FC } from 'react';

import { CheckIcon } from '@/components/common/icons';
import { blockToJsx } from '@/components/notion/blockToJsx';
import { useGetLesson } from '@/hooks/apiHook/useGetLesson';
import { updateLesson } from '@/models/myLesson/apis';
import { Button } from '@mantine/core';
import { useRouter } from 'next/router';

type Props = {
  lesson: LessonContent;
};

export const LessonContentTemplate: FC<Props> = ({ lesson }) => {
  const router = useRouter();
  const lessonId = router.query.lessonId as string;
  const { data: myLesson, mutate } = useGetLesson(lessonId);
  const title =
    lesson.page.properties.Title.type === 'title'
      ? lesson.page.properties.Title.title[0].plain_text
      : 'not_title';
  const isDone = myLesson?.completed;

  const lessonDone = async () => {
    if (isDone) return;
    await updateLesson({ id: lessonId, completed: true });
    await mutate();
  };

  return (
    <div className="w-main mx-auto pb-40">
      <div className="flex items-center gap-2">
        {isDone && <CheckIcon className="text-primary" size={36} />}
        <h1>{title}</h1>
      </div>
      <div>
        {lesson.children.map((block) => (
          <div key={block.id}>{blockToJsx(block)}</div>
        ))}
      </div>

      <div className="mx-auto mt-12 w-fit">
        <Button disabled={isDone} onClick={lessonDone}>
          完了にする
        </Button>
      </div>
    </div>
  );
};
