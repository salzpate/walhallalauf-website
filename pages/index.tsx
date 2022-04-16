import ContactCard from '@/components/Contact/ContactCard';
import ContactForm from '@/components/Contact/ContactForm';
import HeaderImage from '@/components/Header/HeaderImage';
import ImageButtonLink from '@/components/ImageButtonLink';
import InfoArticle from '@/components/InfoArticle';
import Layout from '@/components/Layout';
import MoreLink from '@/components/MoreLink';
import PageSection from '@/components/PageSection';
import SponsorGallery from '@/components/SponsorGallery';
import infoService from '@/lib/InfoService';
import markdownToHtml from '@/lib/markdownToHtml';
import styles from '@/styles/index.module.css';
import { HEADER_LINE_1, HEADER_LINE_2 } from 'lib/constants';
import { GetStaticProps } from 'next';
import { FC } from 'react';
import { SponsorData } from '@/data/SponsorData';

type Info = {
  id: number;
  title: string;
  message: string;
};

type HomeProps = {
  infos: Info[];
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getStaticProps: GetStaticProps = async context => {
  try {
    const res = await infoService.getInfos();
    const infos: { id: number; title: string; message: string }[] = res.data.data.map((d: { id: number; attributes: { title: string; message: string } }) => {
      return {
        id: d.id,
        title: d.attributes.title,
        message: d.attributes.message,
      };
    });

    infos.forEach(async info => {
      info.message = await markdownToHtml(info.message);
    });

    return {
      props: { infos: infos },
    };
  } catch (error) {
    return {
      props: {
        infos: [
          {
            id: 1,
            title: 'Nach 2 Jahren Pause wird es wieder Zeit die Laufschuhe zu schnüren',
            message:
              'Der Lauf findet zwar etwas später als gewohnt statt, dadurch kann er aber auch als perfekte Vorbereitung für den Regensburg Marathon genutzt werden. Hinter dem Walhallalauf steht seit Jahren der Benefiz-Gedanke verbunden mit dem Ziel Kinder und Jugendliche dem Spaß am Sport näher zu bringen. Wir werden auch dieses Jahr wieder einen Großteil der Einnahmen Spenden und bieten die Teilnahme an den Kinderläufen wieder kostenlos an. Aktuell gilt für alle Teilnehmenden die 3G Regel, daher sind wir auch guten Mutes den Lauf in gewohnter Weise durchführen zu können. Sollten sich die Veranstaltungsregeln nochmals ändern, hätten wir u.a. auch noch die Möglichkeit die Startzeiten weiter auseinander zuziehen.',
          },
        ],
      },
    };
  }
};

const Home: FC<HomeProps> = (props: HomeProps) => {
  const { infos } = props;

  return (
    <Layout>
      <HeaderImage text1={HEADER_LINE_1} text2={HEADER_LINE_2} imageClass={styles.headerimage} />
      <section id="fuss" className="page-section">
        <div className="max-w-screen-xl mx-auto tracking-wide text-gray-900 dark:text-gray-300 py-4 text-center font-bold text-2xl sm:text-3xl lg:text-4xl sm:py-6 lg:px-8 lg:py-8">Donaustauf erleben - Der Lauf am Fuße der Walhalla</div>
      </section>

      <PageSection headline="Aktuelles" id="aktuelles" subSection className="pb-4 sm:pb-8 page-section">
        {infos &&
          infos.map(info => (
            <InfoArticle key={info.id} headline={info.title}>
              <div className="index-page-article" dangerouslySetInnerHTML={{ __html: info.message }} />
            </InfoArticle>
          ))}
        <div className="pb-4">
          <a
            className="bg-transparent text-secondary dark:text-secondary-dark text-sm uppercase tracking-wider py-2 px-4 border border-secondary rounded transition ease-in-out duration-150 hover:bg-secondary hover:bg-opacity-15 hover:no-underline dark:border-secondary-dark dark:hover:bg-secondary-dark"
            href="https://anmeldung.zeitgemaess.info/202205152"
            target="_blank"
            rel="noreferrer"
          >
            Anmeldung
          </a>
          <a
            className="bg-transparent text-secondary dark:text-secondary-dark text-sm uppercase tracking-wider ml-4 py-2 px-4 border border-secondary rounded transition ease-in-out duration-150 hover:bg-secondary hover:bg-opacity-15 hover:no-underline dark:border-secondary-dark dark:hover:bg-secondary-dark"
            href="https://starterliste.zeitgemaess.info/202205152"
            target="_blank"
            rel="noreferrer"
          >
            Starterliste
          </a>
        </div>
      </PageSection>
      <PageSection headline="Strecken" id="strecken" subSection className="pb-6 sm:pb-8 page-section strecken-index-image">
        <div>Mit unseren Strecken decken wir alle Alters- und Leistungsstufen ab. Beim Walhallalauf geht es auch darum, etwas von Donaustauf zu erleben.</div>
        <div className="flex flex-wrap -m-2 my-6 sm:my-8">
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <ImageButtonLink headline="10 km Lauf" href="/strecken/#lauf10" imgSrc="/assets/images/index-10km.jpg">
              10 km Rundkurs, flach, meist geteert, geschottert
            </ImageButtonLink>
          </div>
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <ImageButtonLink headline="5 km Lauf" href="/strecken/#lauf5" imgSrc="/assets/images/index-5km.jpg">
              5,4 km Rundkurs, flach, meist geteert
            </ImageButtonLink>
          </div>
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <ImageButtonLink headline="Waldlauf" href="/strecken/#waldlauf" imgSrc="/assets/images/index-waldlauf.jpg">
              7,1 km Rundkurs, anspruchvoll (ca. 160 HM) geteert, geschottert und Waldweg
            </ImageButtonLink>
          </div>
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <ImageButtonLink headline="Nordic Walken" href="/strecken/#waldlauf" imgSrc="/assets/images/index-walken.jpg">
              7,1 km Rundkurs, anspruchvoll (ca. 160 HM) geteert, geschottert und Waldweg
            </ImageButtonLink>
          </div>
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <ImageButtonLink headline="1,6 km Kid's Run" href="/strecken/#kidsrun" imgSrc="/assets/images/index-kidsrun.jpg">
              1,6 km Rundkurs, 3 Runden, geschottert (ab 7 Jahre)
            </ImageButtonLink>
          </div>
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <ImageButtonLink headline="400 m Bambinilauf" href="/strecken/#bambini" imgSrc="/assets/images/index-bambini.jpg">
              400 m Strecke, geschottert (bis 7 Jahre)
            </ImageButtonLink>
          </div>
        </div>
      </PageSection>

      <PageSection headline="Benefiz" id="benefiz" subSection className="pb-6 sm:pb-8 page-section">
        <MoreLink href="/benefiz/">
          <p>
            Seit dem ersten Walhallalauf ist es unser Anspruch &quot;Kinder und Jugendliche für Sport zu begeistern&quot;, weshalb auch die Teilnahme am Baminilauf und am Kid&apos;s Run völlig kostenlos für die Teilnehmer ist. Seit 2015 ist
            es uns zudem wichtig, regionale Organisationen bei der Bewegungs- und Sportförderung von Kindern und Jugendlichen im Rahmen unserer Benefizaktionen zu unterstützen.
          </p>
          <br></br>
          <p>2022 unterstützen wir mit dem Lauf den Verein für helfende Hunde e.V.</p>
        </MoreLink>
      </PageSection>

      <PageSection headline="Sponsoren" id="sponsoren" subSection className="pb-6 sm:pb-8 page-section">
        <p>Wir sagen vielen Dank für die Unterstützung an unsere Partner und Sponsoren</p>
        <SponsorGallery items={SponsorData} />
      </PageSection>

      <PageSection headline="Kontakt" id="kontakt" subSection className="bg-gray-200 dark:bg-gray-900 pb-6 sm:pb-8 page-section">
        <div>Hast du Fragen rund um den Walhallalauf?</div>
        <div className="grid grid-cols-1 gap-6 my-6 sm:my-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <ContactCard name="Ronny Krammer" position="Abteilungsleiter Ausdauer" imageSrc="/assets/images/contact-krammer.jpg" email="1.ausdauer@sv-donaustauf.de" emailHref="/api/mailto-1aus/" className="bg-white dark:bg-black" />
          </div>
          <div>
            <ContactCard name="Eduard Zimmermann" position="2. Vorstand" imageSrc="/assets/images/contact-zimmermann-618c567e52.jpg" email="2.ausdauer@sv-donaustauf.de" emailHref="/api/mailto-2aus/" className="bg-white dark:bg-black" />
          </div>
          <div className="sm:col-span-2 lg:col-span-2">
            <ContactForm url="/api/send-email/" style="white" />
          </div>
        </div>
      </PageSection>
    </Layout>
  );
};

export default Home;
