import type { FC } from 'react';

import { IntersectionWrapper } from '@/components/features/landing/about/IntersectionWrapper';

type Props = {
  setInViewIds: React.Dispatch<React.SetStateAction<string[]>>;
};
export const LearningProgramming: FC<Props> = ({ setInViewIds }) => {
  return (
    <div>
      <IntersectionWrapper
        headding={2}
        title="プログラミングを学ぶ"
        id="learning-programming"
        setInViewIds={setInViewIds}
      >
        <p>説明</p>
        <IntersectionWrapper
          headding={3}
          title="リスキリングの重要性"
          id="why-learning"
          setInViewIds={setInViewIds}
        >
          <div>内容ほげほげ</div>
        </IntersectionWrapper>
      </IntersectionWrapper>
    </div>
  );
};
