import type { Heading3BlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import type { FC } from 'react';

import { RichText } from '@/components/notion/RichText';
import { inViewHeadingIdsAtom } from '@/libs/recoil/atoms';
import { useIntersection } from '@mantine/hooks';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

type Props = {
  block: Heading3BlockObjectResponse;
};

export const Heading3: FC<Props> = ({ block }) => {
  const setState = useSetRecoilState(inViewHeadingIdsAtom);
  const { ref, entry } = useIntersection({
    threshold: 1,
    rootMargin: '0px',
  });

  useEffect(() => {
    if (!entry) return;
    if (entry.isIntersecting) {
      setState((prev) => [...(prev ?? []), block.id]);
    } else {
      setState((prev) => prev?.filter((id) => id !== block.id));
    }
  }, [entry, block.id, setState]);

  return (
    <h3
      id={block.id}
      className="my-4 scroll-m-24 border-0 border-b-2 border-solid border-slate-800 pl-2 text-lg font-bold sp:border-slate-500 sp:text-base"
      ref={ref}
    >
      <RichText text={block.heading_3.rich_text} />
    </h3>
  );
};
