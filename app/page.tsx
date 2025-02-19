import { JSX } from 'react';
import HeaderImage from '@/components/Header/HeaderImage';
import InfoArticle from '@/components/InfoArticle';
import HeaderMainLayout from '@/components/HeaderMainLayout/HeaderMainLayout';
import PageSection from '@/components/PageSection';
import infoService from '@/lib/InfoService';
import markdownToHtml from '@/lib/markdownToHtml';
import { HEADER_LINE_1, HEADER_LINE_2 } from 'lib/constants';
import { TimingButtons } from '@/features/TimingButtons';
import MainContent from '@/features/MainContent';

import styles from '@/styles/index.module.css';

interface Info {
  id: number;
  title: string;
  message: string;
}

async function convertMarkdownToHtml(info: Info): Promise<void> {
  info.message = await markdownToHtml(info.message);
}

async function getData(): Promise<Info[]> {
  try {
    const res = await infoService.getInfos();
    const infos: Info[] = res.data.data.map((d: { id: number; attributes: { title: string; message: string } }) => {
      return {
        id: d.id,
        title: d.attributes.title,
        message: d.attributes.message,
      };
    });

    infos.forEach(async info => await convertMarkdownToHtml(info));

    return infos;
  } catch (error) {
    console.error('Error fetching data:', error);

    return [
      {
        id: 1,
        title: '',
        message: '',
      },
    ];
  }
}

async function Home(): Promise<JSX.Element> {
  const infos = await getData();

  return (
    <HeaderMainLayout>
      <HeaderImage text1={HEADER_LINE_1} text2={HEADER_LINE_2} imageClass={styles.headerimage} />
      <section id="fuss" className="page-section">
        <div className="max-w-screen-xl mx-auto tracking-wide text-gray-900 dark:text-gray-300 py-4 text-center font-bold text-2xl sm:text-3xl lg:text-4xl sm:py-6 lg:px-8 lg:py-8">Donaustauf erleben - Der Lauf am Fuße der Walhalla</div>
      </section>

      <PageSection headline="Aktuelles" id="aktuelles" subSection className="pb-4 sm:pb-8 page-section">
        {infos?.map(info => (
          <InfoArticle key={info.id} headline={info.title}>
            <div className="index-page-article" dangerouslySetInnerHTML={{ __html: info.message }} />
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
