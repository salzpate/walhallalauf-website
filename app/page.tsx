import { JSX } from 'react';
import HeaderImage from '@/components/Header/HeaderImage';
import InfoArticle from '@/components/InfoArticle';
import HeaderMainLayout from '@/components/HeaderMainLayout/HeaderMainLayout';
import PageSection from '@/components/PageSection';
import infoService from '@/lib/InfoService';
import { HEADER_LINE_1, HEADER_LINE_2 } from 'lib/constants';
import { TimingButtons } from '@/features/TimingButtons';
import MainContent from '@/features/MainContent';
import { PortableText, PortableTextComponents } from 'next-sanity';
import { INFO_QUERYResult } from '@/types/sanityTypes';
import Link from 'next/link';

async function getData(): Promise<INFO_QUERYResult> {
  return infoService.getInfos();
}

const portableTextComponents: PortableTextComponents = {
  marks: {
    link: ({ value, children }) => {
      const href = value?.href;
      const isExternal = href?.startsWith('http://') || href?.startsWith('https://');

      if (isExternal) {
        return (
          <a href={href} target="_blank" rel="noopener noreferrer" className="text-link hover:underline hover:decoration-dotted dark:text-link-dark dark:hover:text-link-dark-hover">
            {children}
          </a>
        );
      }

      return (
        <Link href={href} className="text-link hover:underline hover:decoration-dotted dark:text-link-dark dark:hover:text-link-dark-hover">
          {children}
        </Link>
      );
    },
    code: ({ children }) => <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-sm text-red-600 dark:bg-gray-800 dark:text-red-400">{children}</code>,
  },
  block: {
    h1: ({ children }) => <h1 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">{children}</h1>,
    h2: ({ children }) => <h2 className="mb-4 text-xl font-bold tracking-tight sm:text-2xl lg:text-3xl">{children}</h2>,
    h3: ({ children }) => <h3 className="mb-4 text-lg font-bold tracking-tight sm:text-xl lg:text-2xl">{children}</h3>,
    h4: ({ children }) => <h4 className="text-md mb-4 font-bold tracking-tight sm:text-lg lg:text-xl">{children}</h4>,
    h5: ({ children }) => <h5 className="sm:text-md mb-4 text-sm font-bold tracking-tight lg:text-lg">{children}</h5>,
    h6: ({ children }) => <h6 className="lg:text-md mb-4 text-xs font-bold tracking-tight sm:text-sm">{children}</h6>,
    blockquote: ({ children }) => <blockquote className="my-4 border-l-4 border-gray-600 py-2 pl-4 text-gray-700 italic dark:border-gray-300 dark:text-gray-400">{children}</blockquote>,
    code: ({ children }) => (
      <pre className="my-4 overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100 dark:bg-gray-950">
        <code className="font-mono">{children}</code>
      </pre>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="list-inside list-disc space-y-1">{children}</ul>,
    number: ({ children }) => <ol className="list-inside list-decimal space-y-1">{children}</ol>,
  },
};

async function Home(): Promise<JSX.Element> {
  const infos = await getData();

  return (
    <HeaderMainLayout>
      <HeaderImage text1={HEADER_LINE_1} text2={HEADER_LINE_2} imageClass="bg-[url('/assets/images/head-index.jpg')]" />
      <section id="fuss" className="page-section">
        <div className="mx-auto max-w-7xl py-4 text-center text-2xl font-bold tracking-wide text-gray-900 sm:py-6 sm:text-3xl lg:px-8 lg:py-8 lg:text-4xl dark:text-gray-300">Donaustauf erleben - Der Lauf am Fuße der Walhalla</div>
      </section>

      <PageSection headline="Aktuelles" id="aktuelles" subSection className="page-section pb-4 sm:pb-8">
        {infos?.map(info => (
          <InfoArticle key={info._id} headline={info.title || ''}>
            {Array.isArray(info.message) && (
              <div className="index-page-article">
                <PortableText value={info.message} components={portableTextComponents} />
              </div>
            )}
          </InfoArticle>
        ))}
        <div className="pb-4">
          <TimingButtons />
        </div>
      </PageSection>
      <MainContent />
    </HeaderMainLayout>
  );
}

export default Home;
