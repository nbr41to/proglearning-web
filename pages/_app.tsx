import '@/styles/globals.css';
import '@/utils/axios/client';

import type { Account } from '@prisma/client';
import type { Session } from '@supabase/auth-helpers-nextjs';
import type { User } from '@supabase/supabase-js';
import type { AppProps } from 'next/app';

import { Layout } from '@/layout/Layout';
import { NotificationsProvider } from '@mantine/notifications';
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import { DefaultSeo } from 'next-seo';
import Head from 'next/head';
import { useState } from 'react';
import { RecoilRoot } from 'recoil';
const meta = {
  title: 'progLearning',
  description: 'ゆるく始めるプログラミング学習コミュニティ。',
  url: 'https://www.nbr41.com/',
  image: 'https://www.nbr41.com/noblog.png',
};

export default function App({
  Component,
  pageProps,
}: AppProps<{
  initialSession: Session;
  user?: User | null;
  account?: Account | null;
}>) {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient());

  return (
    <>
      {/* <GoogleTagManager gtmId={googleTagManagerId} /> */}
      {/* meta seo */}
      <DefaultSeo
        defaultTitle={meta.title}
        description={meta.description}
        openGraph={{
          type: 'website',
          title: meta.title,
          description: meta.description,
          site_name: meta.title,
          url: meta.url,
          images: [
            {
              url: meta.image,
              width: 800,
              height: 600,
              alt: 'Site Image',
              type: 'image/png',
            },
          ],
        }}
        twitter={{
          handle: '@Knob_nbr41to',
          site: '@Knob_nbr41to',
          cardType: 'summary_large_image',
        }}
      />
      {/* meta seo */}
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <SessionContextProvider
        supabaseClient={supabaseClient}
        initialSession={pageProps.initialSession}
      >
        <RecoilRoot>
          <NotificationsProvider position="top-center">
            <Layout {...pageProps}>
              <Component {...pageProps} />
            </Layout>
          </NotificationsProvider>
        </RecoilRoot>
      </SessionContextProvider>
    </>
  );
}
