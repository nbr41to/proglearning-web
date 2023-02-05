import type { Heading2BlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import type { FC } from 'react';

import { OutlineBlockIcon } from '@/components/common/icons';
import { RichText } from '@/components/notion/RichText';
import { useInViewIds } from '@/hooks/stateHook/useInViewIds';
import { useIntersection } from '@mantine/hooks';
import { useEffect } from 'react';

type Props = {
  block: Heading2BlockObjectResponse;
};

export const Heading2: FC<Props> = ({ block }) => {
  const { mutate } = useInViewIds();
  const { ref, entry } = useIntersection({
    threshold: 1,
    rootMargin: '0px',
  });

  useEffect(() => {
    if (!entry) return;
    if (entry.isIntersecting) {
      mutate((prev) => [...(prev ?? []), block.id]);
    } else {
      mutate((prev) => prev?.filter((id) => id !== block.id));
    }
  }, [entry, block.id, mutate]);

  return (
    <h2
      id={block.id}
      className="my-6 flex items-center gap-2 px-3 text-xl shadow-[-1px_-1px_6px_#ccc,4px_4px_1px_#1E293B] sp:text-base"
      ref={ref}
    >
      <OutlineBlockIcon size={24} />
      <RichText text={block.heading_2.rich_text} />
    </h2>
  );
};
