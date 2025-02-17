import { JSX } from 'react';
import HeaderImage from '@/components/Header/HeaderImage';
import HeaderMainLayout from '@/components/HeaderMainLayout/HeaderMainLayout';
import { Metadata } from 'next';
import { HEADER_LINE_1, HEADER_LINE_2 } from '@/lib/constants';
import PageSection from '@/components/PageSection/PageSection';
import Link from 'next/link';
import styles from '@/styles/index.module.css';

export const metadata: Metadata = {
  title: '404',
};

function FileNotFound(): JSX.Element {
  return (
    <HeaderMainLayout>
      <HeaderImage text1={HEADER_LINE_1} text2={HEADER_LINE_2} imageClass={styles.headerimage} />
      <PageSection headline="Seite nicht gefunden" id="notfound">
        <div>Die gewünschte Seite wurde nicht gefunden.</div>
        <div className="bg-yellow-400 rounded-sm p-8 my-16">
          <Link href="/" legacyBehavior>
            <a className="inline-flex items-center gap-0 text-yellow-800 hover:underline hover:gap-1">
              <span>Weiter zur Startseite</span>{' '}
              <svg className="w-3 h-3 ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </Link>
        </div>
      </PageSection>
    </HeaderMainLayout>
  );
}

export default FileNotFound;
