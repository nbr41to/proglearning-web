import type { FC } from 'react';

import { PageTitle } from '@/common/PageTitle';
import { SignboardContainer } from '@/common/SignboardContainer/SignboardContainer';
import { ContactBySns } from '@/features/contact/ContactBySns';
import { ContactForm } from '@/features/contact/ContactForm';

type Props = {
  onSubmit: (text: string) => Promise<void>;
};

export const ContactTemplate: FC<Props> = ({ onSubmit }) => {
  return (
    <div className="w-main mx-auto pt-12">
      <SignboardContainer>
        <div className="space-y-8 p-8">
          <div>
            <PageTitle title="Contact" />
            <p className="mt-4 whitespace-pre text-center">
              プログラミング学習の相談からサービスに関する相談まで幅広く受け付けております。
              <wbr />
              気軽にご連絡ください。
            </p>
          </div>
          <ContactBySns />
          <ContactForm onSubmit={onSubmit} />
        </div>
      </SignboardContainer>
    </div>
  );
};
