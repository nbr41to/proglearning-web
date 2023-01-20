import { PageTitle } from '@/components/common/PageTitle';
import { SignboardContainer } from '@/components/common/SignboardContainer';
import { ContactBySns } from '@/features/contact/ContactBySns';
import { ContactForm } from '@/features/contact/ContactForm';
import axios from 'axios';

const Contact = () => {
  const handleSubmit = async (text: string) => {
    await axios.post('/api/slack/messages', {
      text,
    });
  };

  return (
    <div className="w-main mx-auto pt-12">
      <SignboardContainer>
        <div className="space-y-8 p-8">
          <div>
            <PageTitle title="Contact" />
            <p className="mt-4 whitespace-pre text-center">
              プログラミング学習の相談からサービスに関する相談まだ幅広く受け付けております。
              <wbr />
              気軽にご連絡ください。
            </p>
          </div>
          <ContactBySns />
          <ContactForm onSubmit={handleSubmit} />
        </div>
      </SignboardContainer>
    </div>
  );
};

export default Contact;
