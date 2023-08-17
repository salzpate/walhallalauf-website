import { JSX, PropsWithChildren } from 'react';
import { Metadata } from 'next';
import HeaderMainLayout from '@/components/HeaderMainLayout/HeaderMainLayout';
import { HEADER_LINE_1, HEADER_LINE_2, SITE_TITLE } from '@/lib/constants';
import HeaderImage from '@/components/Header/HeaderImage/HeaderImage';
import styles from '@/styles/index.module.css';

export const metadata: Metadata = {
  title: `Informationen - ${SITE_TITLE}`,
};

function InformationenLayout({ children }: PropsWithChildren<object>): JSX.Element {
  return (
    <HeaderMainLayout activeMenu="informationen">
      <HeaderImage text1={HEADER_LINE_1} text2={HEADER_LINE_2} imageClass={styles.headerimage} />
      {children}
    </HeaderMainLayout>
  );
}

export default InformationenLayout;
