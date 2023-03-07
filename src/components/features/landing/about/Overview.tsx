import type { FC } from 'react';

import { IntersectionWrapper } from '@/components/features/landing/about/IntersectionWrapper';

type Props = {
  setInViewIds: React.Dispatch<React.SetStateAction<string[]>>;
};
export const Overview: FC<Props> = ({ setInViewIds }) => {
  return (
    <div>
      <IntersectionWrapper
        headding={2}
        title="概要"
        id="overview"
        setInViewIds={setInViewIds}
      >
        <p>3つのCで簡単に説明</p>
        <IntersectionWrapper
          headding={3}
          title="Concepts"
          id="concepts"
          setInViewIds={setInViewIds}
        >
          <div>内容ほげほげ</div>
        </IntersectionWrapper>
        <IntersectionWrapper
          headding={3}
          title="Contents"
          id="contents"
          setInViewIds={setInViewIds}
        >
          <div>内容ほげほげ</div>
        </IntersectionWrapper>
        <IntersectionWrapper
          headding={3}
          title="Communications"
          id="communications"
          setInViewIds={setInViewIds}
        >
          <div>内容ほげほげ</div>
        </IntersectionWrapper>
      </IntersectionWrapper>
    </div>
  );
};
