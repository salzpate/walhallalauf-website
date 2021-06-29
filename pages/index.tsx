import ContactCard from '@/components/Contact/ContactCard';
import ContactForm from '@/components/Contact/ContactForm';
import DisplayMore from '@/components/DisplayMore';
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
          <p>Der Walhallalauf musste leider als einer der ersten Läufe im vergangenen Jahr abgesagt werden und die Pandemie führte danach noch zu vielen weiteren Absagen.</p>
          <p>
            Nach Monaten einsamer Trainingsrunden und dem Fehlen der Veranstaltungen stellen wir immer mehr fest, dass unsere Motivation langsam nachlässt. Zusammen zu laufen, ob gegen andere oder nur gegen deine eigene Zeit, macht immer
            noch am meisten Spaß. Wir brauchen endlich wieder neue Ziele und vermissen die Atmosphäre der Veranstaltungen und das Kribbeln kurz vor dem Start.
          </p>
          <DisplayMore>
            <p>
              Uns war sehr schnell klar, dass wir 2021 unbedingt wieder einen Lauf anbieten wollen, da hinter dem Walhallalauf auch seit Jahren ein Benefiz Gedanke steht und das Ziel Kinder und Jugendliche dem Spaß am Sport näher zu
              bringen.
            </p>
            <p>
              Leider können wir unseren üblichen Termin im April dieses Jahres nicht einhalten. Nach vielen Überlegungen und viel Hin und Her denken wir, endlich ein Datum gefunden zu haben, an dem der Lauf allen Spaß machen könnte und auch
              alle gesund bleiben.
            </p>
            <p>
              Heute können wir noch nicht sicher sagen, ob und unter welchen Auflagen wir an den Start gehen können. Wir wissen auch noch nicht, ob wir wieder alle Strecken anbieten können. Deswegen wird es leider vorerst noch keine
              endgültige Ausschreibung geben und wir werden die Anmeldung vermutlich erst ab 1. September freischalten lassen. Aber wir haben heute schon ein Ziel und auch ein Datum.
            </p>
            <p>Wir wünschen allen ein verletzungsfreies und erfolgreiches Sportjahr. Bleibt gesund und wir freuen uns auf euch.</p>
          </DisplayMore>
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
