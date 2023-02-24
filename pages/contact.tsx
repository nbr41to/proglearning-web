import { ContactTemplate } from '@/components/features/contact/ContactTemplate';
import { sendToSlackChannel } from '@/useCases/contact/apis';

const ContactPage = () => {
  const handleSubmit = async (text: string) => {
    await sendToSlackChannel(text);
  };

  return (
    <>
      <ContactTemplate onSubmit={handleSubmit} />
    </>
  );
};

export default ContactPage;
