import { ContactTemplate } from '@/components/features/contact/ContactTemplate';
import { sendToSlackChannel } from '@/useCases/contact/apis';
import Head from 'next/head';

const ContactPage = () => {
  const handleSubmit = async (text: string, onSuccess: () => void) => {
    const response = await sendToSlackChannel(text);
    if (response.status !== 200) return;

    onSuccess();
  };

  return (
    <>
      <Head>
        <title>Contact | progLearning</title>
      </Head>
      <ContactTemplate onSubmit={handleSubmit} />
    </>
  );
};

export default ContactPage;
