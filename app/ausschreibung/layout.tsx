import { JSX } from 'react';
import { Metadata } from 'next';
import HeaderMainLayout from '@/components/HeaderMainLayout/HeaderMainLayout';
import { HEADER_LINE_1, HEADER_LINE_2, SITE_TITLE } from '@/lib/constants';
import HeaderImage from '@/components/Header/HeaderImage/HeaderImage';
import styles from '@/styles/index.module.css';

export const metadata: Metadata = {
  title: `Ausschreibung - ${SITE_TITLE}`,
};

function AusschreibungLayout({ children }: LayoutProps<'/ausschreibung'>): JSX.Element {
  return (
    <HeaderMainLayout activeMenu="ausschreibung">
      <HeaderImage text1={HEADER_LINE_1} text2={HEADER_LINE_2} imageClass={styles.headerimage} />
      {children}
    </HeaderMainLayout>
  );
}

export default AusschreibungLayout;
