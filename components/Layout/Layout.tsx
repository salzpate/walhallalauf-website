import { JSX } from 'react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import SnackBarProvider from '@/components/SnackBar';
import { MenuData } from '@/data/MenuData';
import Head from 'next/head';

export const siteTitle = 'Walhallalauf - Ausdauer - SV Donaustauf';

const footerText = '© SV Donaustauf';

interface LayoutProps {
  title?: string;
  activeMenu?: string;
}

function Layout(props: React.PropsWithChildren<LayoutProps>): JSX.Element {
  const { children, title = siteTitle, activeMenu } = props;
  const navMenuItems = MenuData.main;
  const footerMenuItems = MenuData.footer;
  return (
    <SnackBarProvider>
      <Head>
        <title>{title}</title>
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.png" />
        <meta name="description" content="Der Lauf am Fuße der Walhalla." />
      </Head>

      <Header activeMenu={activeMenu} navMenuItems={navMenuItems} />

      <main className="flex-1 pt-14 sm:pt-16">{children}</main>

      <Footer text={footerText} menuItems={footerMenuItems} />
    </SnackBarProvider>
  );
}
export default Layout;
