import { JSX } from 'react';
import HeaderImage from '@/components/Header/HeaderImage';
import HeaderMainLayout from '@/components/HeaderMainLayout/HeaderMainLayout';
import { Metadata } from 'next';
import { HEADER_LINE_1, HEADER_LINE_2 } from '@/lib/constants';
import PageSection from '@/components/PageSection/PageSection';
import Link from 'next/link';
import styles from '@/styles/index.module.css';
import { MenuData } from '@/data/MenuData';
import { Home, FileText, Map, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: '404 - Seite nicht gefunden',
  description: 'Die angeforderte Seite konnte nicht gefunden werden.',
};

type PopularPage = {
  title: string;
  href: string;
  icon: typeof Home;
};

function FileNotFound(): JSX.Element {
  const popularPages: PopularPage[] = [
    { title: 'Startseite', href: '/', icon: Home },
    { title: 'Ausschreibung', href: '/ausschreibung/', icon: FileText },
    { title: 'Strecken', href: '/strecken/', icon: Map },
    { title: 'Kontakt', href: '/kontakt/', icon: Mail },
  ];

  return (
    <HeaderMainLayout>
      <HeaderImage text1={HEADER_LINE_1} text2={HEADER_LINE_2} imageClass={styles.headerimage} />
      <PageSection headline="Seite nicht gefunden" id="notfound">
        <div className="pb-6 text-lg text-paragraph sm:pb-8 dark:text-paragraph-dark">Die gewünschte Seite wurde leider nicht gefunden. Möglicherweise wurde sie verschoben oder gelöscht.</div>
        <div className="pb-6 sm:pb-8">
          <h3 className="mt-4 mb-4 text-lg tracking-tight text-secondary uppercase sm:text-xl lg:text-2xl lg:font-medium dark:text-secondary-dark">Beliebte Seiten</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {popularPages.map(page => {
              const Icon = page.icon;
              return (
                <Link key={page.title} href={page.href} className="flex items-center gap-3 rounded-lg border border-gray-200 p-4 transition-all hover:border-secondary hover:shadow-md dark:border-gray-700 dark:hover:border-secondary">
                  <Icon className="size-6 shrink-0 text-secondary dark:text-secondary-dark" strokeWidth={1.5} />
                  <span className="font-medium text-paragraph dark:text-paragraph-dark">{page.title}</span>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="pb-6 sm:pb-8">
          <h3 className="mt-4 mb-4 text-lg tracking-tight text-secondary uppercase sm:text-xl lg:text-2xl lg:font-medium dark:text-secondary-dark">Alle Seiten</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {MenuData.main.map(item => (
              <Link key={item.activeMenuName} href={item.href} className="rounded-lg border border-gray-200 p-4 transition-all hover:border-secondary hover:shadow-md dark:border-gray-700 dark:hover:border-secondary">
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
