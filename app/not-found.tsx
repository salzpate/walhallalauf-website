import { JSX } from 'react';
import HeaderImage from '@/components/Header/HeaderImage';
import HeaderMainLayout from '@/components/HeaderMainLayout/HeaderMainLayout';
import { Metadata } from 'next';
import { HEADER_LINE_1, HEADER_LINE_2 } from '@/lib/constants';
import PageSection from '@/components/PageSection/PageSection';
import Link from 'next/link';
import styles from '@/styles/index.module.css';
import { MenuData } from '@/data/MenuData';

export const metadata: Metadata = {
  title: '404 - Seite nicht gefunden',
  description: 'Die angeforderte Seite konnte nicht gefunden werden.',
};

function FileNotFound(): JSX.Element {
  const popularPages = [
    { title: 'Startseite', href: '/', icon: 'home' },
    { title: 'Ausschreibung', href: '/ausschreibung/', icon: 'document' },
    { title: 'Strecken', href: '/strecken/', icon: 'map' },
    { title: 'Kontakt', href: '/kontakt/', icon: 'mail' },
  ];

  return (
    <HeaderMainLayout>
      <HeaderImage text1={HEADER_LINE_1} text2={HEADER_LINE_2} imageClass={styles.headerimage} />
      <PageSection headline="Seite nicht gefunden" id="notfound">
        <div className="pb-6 text-lg text-paragraph sm:pb-8 dark:text-paragraph-dark">Die gewünschte Seite wurde leider nicht gefunden. Möglicherweise wurde sie verschoben oder gelöscht.</div>
        <div className="pb-6 sm:pb-8">
          <h3 className="mt-4 mb-4 text-lg tracking-tight text-secondary uppercase sm:text-xl lg:text-2xl lg:font-medium dark:text-secondary-dark">Beliebte Seiten</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {popularPages.map(page => (
              <Link key={page.href} href={page.href} className="flex items-center gap-3 rounded-lg border border-gray-200 p-4 transition-all hover:border-secondary hover:shadow-md dark:border-gray-700 dark:hover:border-secondary">
                {page.icon === 'home' && (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-secondary dark:text-secondary-dark">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                )}
                {page.icon === 'document' && (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-secondary dark:text-secondary-dark">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                    />
                  </svg>
                )}
                {page.icon === 'map' && (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-secondary dark:text-secondary-dark">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z"
                    />
                  </svg>
                )}
                {page.icon === 'mail' && (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-secondary dark:text-secondary-dark">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                )}
                <span className="font-medium text-paragraph dark:text-paragraph-dark">{page.title}</span>
              </Link>
            ))}
          </div>
        </div>
        <div className="pb-6 sm:pb-8">
          <h3 className="mt-4 mb-4 text-lg tracking-tight text-secondary uppercase sm:text-xl lg:text-2xl lg:font-medium dark:text-secondary-dark">Alle Seiten</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {MenuData.main.map(item => (
              <Link key={item.href} href={item.href} className="rounded-lg border border-gray-200 p-4 transition-all hover:border-secondary hover:shadow-md dark:border-gray-700 dark:hover:border-secondary">
                <span className="font-medium text-paragraph dark:text-paragraph-dark">{item.children}</span>
              </Link>
            ))}
          </div>
        </div>
      </PageSection>
    </HeaderMainLayout>
  );
}

export default FileNotFound;
