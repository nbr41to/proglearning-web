'use client';

import { PageTitle } from '@/components/common/PageTitle';
import { SignboardContainer } from '@/components/common/SignboardContainer';
import { ContactBySns } from '@/features/contact/ContactBySns';
import { ContactForm } from '@/features/contact/ContactForm';

const Page = () => {
  const handleSubmit = async () => {
    // eslint-disable-next-line no-console
    console.log('submit');
  };

  return (
    <div className="w-main mx-auto">
      <SignboardContainer>
        <div className="space-y-8 p-8">
          <PageTitle title="Contact" />
          <ContactBySns />
          <ContactForm onSubmit={handleSubmit} />
        </div>
      </SignboardContainer>
    </div>
  );
};

export default Page;
