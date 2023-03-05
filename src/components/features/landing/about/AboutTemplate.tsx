import type { FC } from 'react';

import { PageTitle } from '@/components/common/PageTitle';
import { Navbar } from '@/components/features/landing/about/Navbar';
import { Overview } from '@/components/features/landing/about/Overview';
import { useState } from 'react';

export const AboutTemplate: FC = () => {
  const [inViewIds, setInViewIds] = useState<string[]>([]);

  return (
    <div className="w-main mx-auto">
      <PageTitle title="About" />

      <div className="mt-8 flex gap-8">
        <div className="max-w-[240px]">
          <Navbar inViewIds={inViewIds} />
        </div>
        <div>
          <Overview setInViewIds={setInViewIds} />
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
    </div>
  );
};
