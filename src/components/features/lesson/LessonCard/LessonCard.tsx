import type { Lesson } from '@/types/lesson';
import type { FC } from 'react';

import { BookIcon } from '@/components/common/icons';
import { Modal } from '@mantine/core';
import Link from 'next/link';
import { useState } from 'react';

type Props = {
  lesson: Lesson;
};

export const LessonCard: FC<Props> = ({ lesson }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="border-3 h-48 w-72 transform  cursor-pointer rounded-lg border-solid border-teal-300 transition duration-300 ease-in-out hover:scale-105"
        onClick={() => setOpen(true)}
      >
        <div className="border-3 h-full rounded-lg border-solid border-white  bg-teal-300 p-4 text-white">
          <div className="flex items-center gap-2">
            <BookIcon size={24} />
            <div className="text-xl font-bold">{lesson.title}</div>
          </div>
          <div className="mt-2">説明</div>
        </div>
      </div>

      <Modal
        opened={open}
        onClose={() => setOpen(false)}
        title="Preparation"
        size="lg"
      >
        <div>説明</div>
        <div>
          内容
          <div className="flex flex-col">
            {lesson.contents.map((content) => (
              <Link key={content.id} href={`/lessons/${content.id}`}>
                {content.title}
              </Link>
            ))}
          </div>
        </div>
      </Modal>
    </>
  );
};
