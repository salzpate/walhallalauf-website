import { JSX } from 'react';
import { Metadata } from 'next';
import HeaderMainLayout from '@/components/HeaderMainLayout/HeaderMainLayout';
import { HEADER_LINE_1, HEADER_LINE_2, SITE_TITLE } from '@/lib/constants';
import HeaderImage from '@/components/Header/HeaderImage/HeaderImage';

export const metadata: Metadata = {
  title: `Benefiz - ${SITE_TITLE}`,
};

function BenefizLayout({ children }: LayoutProps<'/benefiz'>): JSX.Element {
  return (
    <HeaderMainLayout activeMenu="benefiz">
      <HeaderImage text1={HEADER_LINE_1} text2={HEADER_LINE_2} imageClass="bg-[url('/assets/images/head-index.jpg')]" />
      {children}
    </HeaderMainLayout>
  );
}

export default BenefizLayout;
