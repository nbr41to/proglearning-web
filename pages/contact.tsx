import { ContactTemplate } from '@/features/contact/ContactTemplate';
import { sendSlackChannel } from '@/utils/axios/slack';

const Contact = () => {
  const handleSubmit = async (text: string) => {
    await sendSlackChannel(text);
  };

  return (
    <>
      <ContactTemplate onSubmit={handleSubmit} />
    </>
  );
};

export default Contact;
