import ContactCard from '@/components/Contact/ContactCard';
import ContactForm from '@/components/Contact/ContactForm';
import HeaderImage from '@/components/Header/HeaderImage';
import ImageButtonLink from '@/components/ImageButtonLink';
import Layout from '@/components/Layout';
import PageSection from '@/components/PageSection';
import styles from '@/styles/index.module.css';
import { HEADER_LINE_1, HEADER_LINE_2 } from 'lib/constants';
import { FunctionComponent } from 'react';

const Home: FunctionComponent = () => {
  return (
    <Layout>
      <HeaderImage text1={HEADER_LINE_1} text2={HEADER_LINE_2} imageClass={styles.headerimage} />
      <section id="fuss" className="page-section">
        <div className="max-w-screen-xl mx-auto tracking-wide text-gray-900 dark:text-gray-300 py-4 text-center font-bold text-2xl sm:text-3xl lg:text-4xl sm:py-6 lg:px-8 lg:py-8">Donaustauf erleben - Der Lauf am Fuße der Walhalla</div>
      </section>

      <PageSection headline="Aktuelles" id="aktuelles" subSection className="pb-12 sm:pb-16 page-section">
        <div className="max-w-screen-xl mx-auto text-gray-900 dark:text-gray-300">
          <p className="font-bold">Leider sind wir auch dieses Jahr wieder dazu gezwungen, den Walhallalauf abzusagen.</p>
          <p>&nbsp;</p>
          <p>
            Wir hatten die letzten Wochen versucht, verschiedene Szenarien durchzuspielen und sogar überlegt, die Strecken und den Termin nochmals kurzfristig zu ändern. Aber nach den ständigen Änderungen und Kompromissen, die wir eingehen
            hätten müssen, glauben wir inzwischen leider nicht mehr daran, euch dieses Jahr ein Laufevent bieten zu können, welches allen Seiten Spaß hat.
          </p>
          <p>Wir bieten euch um Verständnis und hoffen, euch nächstes Jahr wieder ein angemessene Veranstaltung bieten zu können.</p>
          <p>Wir wünschen euch eine verletzungsfreie Zeit und bleibt gesund.</p>
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
