'use client';

import { SignboardContainer } from '@/common/SignboardContainer/SignboardContainer';
import { PageTitle } from '@/components/common/PageTitle';

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
