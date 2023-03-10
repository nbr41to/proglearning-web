import '@/styles/globals.css';
import '@/libs/axios/client';

import type { Session } from '@supabase/auth-helpers-nextjs';
import type { AppProps } from 'next/app';

import { Auth } from '@/components/layouts/Auth';
import { LayoutWrapper } from '@/components/layouts/index';
import { Maintenance } from '@/components/layouts/Maintenance';
import { Providers } from '@/components/layouts/Providers/Providers';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';

const meta = {
  title: 'progLearning',
  description: 'ゆるく始めるプログラミング学習コミュニティ。',
  url: 'https://www.proglearning.org',
  image: 'https://www.proglearning.org/ogp.png',
};

export default function App({
  Component,
  pageProps,
}: AppProps<{
  initialSession: Session;
}>) {
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

      {process.env.NEXT_PUBLIC_MAINTENANCE_MODE === 'true' ? (
        <Maintenance />
      ) : (
        <Providers initialSession={pageProps.initialSession}>
          <LayoutWrapper>
            <Auth>
              <Component {...pageProps} />
            </Auth>
          </LayoutWrapper>
        </Providers>
      )}
    </>
  );
}
