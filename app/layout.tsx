import { JSX, PropsWithChildren } from 'react';
import { Metadata } from 'next';
import Footer from '@/components/Footer';
import SnackBarProvider from '@/components/SnackBar';
import { MenuData } from '@/data/MenuData';
import { SITE_DESC, SITE_TITLE } from '@/lib/constants';

import '@salzpate/react-ui/dist/style.css';
import '@/styles/globals.css';
import '@/styles/print.css';

const footerText = '© SV Donaustauf';

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESC,
  metadataBase: new URL('https://www.walhallalauf.de'),
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESC,
    url: 'https://www.walhallalauf.de',
    siteName: SITE_TITLE,
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESC,
  },
  icons: [
    { rel: 'apple-touch-icon', url: '/apple-touch-icon.png' },
    { rel: 'icon', url: '/favicon.png' },
    { rel: 'shortcut icon', url: '/favicon.ico' },
  ],
};

function RootLayout({ children }: PropsWithChildren<object>): JSX.Element {
  const footerMenuItems = MenuData.footer;
  return (
    <html lang="de">
      <head>
        <meta name="theme-color" content="#ff0000" />
      </head>
      <body>
        <SnackBarProvider>
          {children}
          <Footer text={footerText} menuItems={footerMenuItems} />
        </SnackBarProvider>
      </body>
    </html>
  );
}
export default RootLayout;
