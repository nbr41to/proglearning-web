import type { Heading3BlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import type { FC } from 'react';

import { RichText } from '@/components/notion/RichText';
import { useInViewIds } from '@/hooks/stateHook/useInViewIds';
import { useIntersection } from '@mantine/hooks';
import { useEffect } from 'react';

type Props = {
  block: Heading3BlockObjectResponse;
};

export const Heading3: FC<Props> = ({ block }) => {
  const { addId, removeId } = useInViewIds();
  const { ref, entry } = useIntersection({
    threshold: 1,
    rootMargin: '0px',
  });

  useEffect(() => {
    if (entry.isIntersecting) {
      addId(block.id);
    } else {
      removeId(block.id);
    }
  }, [entry, block.id, addId, removeId]);

  return (
    <h3
      id={block.id}
      className="my-4 border-0 border-b-2 border-solid border-slate-800 pl-2 text-lg font-bold sp:border-slate-500 sp:text-base"
      ref={ref}
    >
      <RichText text={block.heading_3.rich_text} />
    </h3>
  );
};
