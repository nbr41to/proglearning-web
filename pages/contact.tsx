import { ContactTemplate } from '@/components/features/contact/ContactTemplate';
import { sendToSlackChannel } from '@/useCases/contact/apis';

const ContactPage = () => {
  const handleSubmit = async (text: string, onSuccess: () => void) => {
    const response = await sendToSlackChannel(text);
    if (response.status !== 200) return;

    onSuccess();
  };

  return (
    <>
      <ContactTemplate onSubmit={handleSubmit} />
    </>
  );
};

export default ContactPage;
