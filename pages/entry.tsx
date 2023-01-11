import { EntryTemplate } from '@/features/entry/EntryTemplate';
import Head from 'next/head';

const EntryPage = () => {
  return (
    <>
      <Head>
        <title>お申し込み</title>
      </Head>
      <EntryTemplate />
    </>
  );
};

export default EntryPage;
