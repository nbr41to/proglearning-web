import type { NextPage } from 'next';

import { EntryTemplate } from '@/features/entry/EntryTemplate';
import Head from 'next/head';

const Entry: NextPage = () => {
  return (
    <>
      <Head>
        <title>お申し込み | progLearning</title>
      </Head>
      <EntryTemplate />
    </>
  );
};

export default Entry;
