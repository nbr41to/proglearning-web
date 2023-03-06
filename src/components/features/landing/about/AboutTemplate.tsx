import type { FC } from 'react';

import { LearningProgramming } from '@/components/features/landing/about/LearningProgramming';
import { Navbar } from '@/components/features/landing/about/Navbar';
import { Overview } from '@/components/features/landing/about/Overview';
import { StartLearning } from '@/components/features/landing/about/StartLearning';
import { useState } from 'react';

export const AboutTemplate: FC = () => {
  const [inViewIds, setInViewIds] = useState<string[]>([]);
  // console.log(inViewIds);

  return (
    <div className="mx-auto flex justify-center gap-8 px-8 pt-7">
      <div className="w-aside">
        <div className="sticky top-28 max-w-[240px]">
          <Navbar inViewIds={inViewIds} />
        </div>
      </div>

      <div className="w-main flex-grow">
        <Overview setInViewIds={setInViewIds} />
        <div className="h-[1000px]"></div>
        <StartLearning setInViewIds={setInViewIds} />
        <div className="h-[1000px]"></div>
        <LearningProgramming setInViewIds={setInViewIds} />
        <h2>見出し</h2>
        <p>内容</p>
        <h2>見出し</h2>
        <p>内容</p>
        <h2>見出し</h2>
        <p>内容</p>
        <h2>見出し</h2>
        <p>内容</p>
      </div>
    </div>
  );
};
