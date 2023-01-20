'use client';

import { PageTitle } from '@/components/common/PageTitle';
import { SignboardContainer } from '@/components/common/SignboardContainer';

const About = () => {
  return (
    <div className="w-main mx-auto">
      <SignboardContainer>
        <div className="space-y-8 p-8">
          <PageTitle title="About" />
        </div>
      </SignboardContainer>
    </div>
  );
};

export default About;
