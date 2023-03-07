import type { FC } from 'react';

import { inViewHeadingIdsAtom } from '@/libs/recoil/atoms';
import { clsx } from '@mantine/core';
import { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';

type Props = {
  headingList: {
    id: string;
    title: string;
    type: 'heading_2' | 'heading_3';
  }[];
};

export const TableOfContents: FC<Props> = ({ headingList }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const inViewHeadingIds = useRecoilValue(inViewHeadingIdsAtom);

  useEffect(() => {
    const index = headingList.findIndex((item) =>
      inViewHeadingIds.includes(item.id)
    );
    if (index < 0) return;
    setActiveIndex(index);
  }, [headingList, inViewHeadingIds]);

  return (
    <div className="rounded bg-white p-4">
      <div
        className={clsx(
          'relative flex flex-col gap-2 py-2 pl-6 text-sm',
          'before:absolute before:top-4 before:left-2 before:h-[calc(100%-36px)] before:w-0.5 before:bg-teal-200 before:content-[""]'
        )}
      >
        {headingList.map((item, index) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={clsx(
              'text relative transition-colors duration-150 hover:text-slate-400',
              activeIndex === index
                ? 'font-bold text-slate-800'
                : 'text-slate-500',
              item.type === 'heading_2' && 'font-bold',
              item.type === 'heading_3' && 'pl-2',
              'before:absolute before:rounded-full before:border-solid before:border-white before:content-[""]',
              item.type === 'heading_2'
                ? 'before:top-[5px] before:-left-[21px] before:h-[8px] before:w-[8px] before:border-[2px]'
                : 'before:top-[7px] before:-left-[19px] before:h-[6px] before:w-[6px] before:border-[1px]',
              activeIndex < index
                ? 'before:bg-teal-200'
                : 'before:border-teal-100 before:bg-teal-400'
            )}
          >
            {item.title}
          </a>
        ))}
      </div>
    </div>
  );
};
