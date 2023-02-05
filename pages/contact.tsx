import { ContactTemplate } from '@/components/features/contact/ContactTemplate';
import { sendSlackChannel } from '@/utils/axios/slack';

const ContactPage = () => {
  const handleSubmit = async (text: string) => {
    await sendSlackChannel(text);
  };

  return (
    <>
      <ContactTemplate onSubmit={handleSubmit} />
    </>
  );
};

export default ContactPage;
