import '@/styles/globals.css';

import type { AppProps } from 'next/app';

import { Layout } from '@/layout/Layout';
import { NotificationsProvider } from '@mantine/notifications';
import { SessionProvider } from 'next-auth/react';
import { DefaultSeo } from 'next-seo';
import Head from 'next/head';
import { RecoilRoot } from 'recoil';

const meta = {
  title: 'noblog',
  description:
    'Notion API と Next.js / Tailwind CSS で本格ブログを作ってみました。',
  url: 'https://www.nbr41.com/',
  image: 'https://www.nbr41.com/noblog.png',
};

export default function App({ Component, pageProps }: AppProps) {
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

      <SessionProvider session={pageProps.session}>
        <RecoilRoot>
          <NotificationsProvider position="top-center">
            <Layout {...pageProps}>
              <Component {...pageProps} />
            </Layout>
          </NotificationsProvider>
        </RecoilRoot>
      </SessionProvider>
    </>
  );
}
