import type { FC } from 'react';

import { PageTitle } from '@/components/common/PageTitle';
import { SignboardContainer } from '@/components/common/SignboardContainer/SignboardContainer';
import { ContactBySns } from '@/components/features/contact/ContactBySns';
import { ContactForm } from '@/components/features/contact/ContactForm';

type Props = {
  onSubmit: (text: string, onSuccess: () => void) => Promise<void>;
};

export const ContactTemplate: FC<Props> = ({ onSubmit }) => {
  return (
    <div className="w-main mx-auto pt-12 sp:-mt-3 sp:pt-0">
      <SignboardContainer fill>
        <div className="space-y-8 p-8 sp:p-0">
          <div>
            <PageTitle title="Contact" />
            <p className="mt-4 whitespace-pre text-center sp:whitespace-pre-wrap">
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
