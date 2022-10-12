import React, { FC, PropsWithChildren } from 'react';

import Head from 'next/head';
import { maxWidth } from '@mui/system';

interface Props extends PropsWithChildren {
  title: string;
  pageDescription: string;
  imageFullUrl?: string; // Image to show on link sharing in social media
}

export const ShopLayout: FC<Props> = ({ children, title, pageDescription, imageFullUrl }) => {
  return (
    <>
      <Head>
        <title>{ title }</title>

        {/* TODO: Metatags */}
        <meta name='description' content={ pageDescription } />

        <meta name='og:title' content={ title } />
        <meta name='og:description' content={ pageDescription } />
        { imageFullUrl && (
          <meta name='og:image' content={ imageFullUrl } />
        )}s
      </Head>

      <nav>
        {/* TODO: Navbar */}
      </nav>

      {/* TODO: Sidebar */}

      <main style={{
        margin: '80px auto',
        maxWidth: '1440px',
        padding: '0px 30px'
      }}>
        { children }
      </main>

      <footer>
        {/* TODO> Custom footer */}
      </footer>

    </>
  );
}