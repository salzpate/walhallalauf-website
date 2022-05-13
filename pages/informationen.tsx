/* eslint-disable @next/next/no-img-element */
import HeaderImage from '@/components/Header/HeaderImage';
import Layout from '@/components/Layout';
import { siteTitle } from '@/components/Layout/Layout';
import PageSection from '@/components/PageSection';
import SponsorGallery from '@/components/SponsorGallery';
import { SponsorData } from '@/data/SponsorData';
import styles from '@/styles/index.module.css';
import { HEADER_LINE_1, HEADER_LINE_2 } from 'lib/constants';
import { FC } from 'react';

export const pageTitle = 'Informationen';

const Informationen: FC = () => {
  return (
    <Layout title={pageTitle + ' - ' + siteTitle}>
      <HeaderImage text1={HEADER_LINE_1} text2={HEADER_LINE_2} imageClass={styles.headerimage} />
      <PageSection headline={pageTitle} id="informationen">
        <div className="mb-4">Neben der Ausschreibung befinden sich hier weitere Informationen rund um den Lauf.</div>
      </PageSection>
      <PageSection headline="Startzeiten und -richtung" id="sectionzeiten" subSection className="pb-6 sm:pb-8">
        <div className="md:inline-flex">
          <div className="w-full pb-4 md:w-2/3 md:pr-4 md:pb-0">
            <h4 className="font-bold pb-4">Bambinilauf</h4>
            <div>11:00 Uhr - Richtung Fürstengarten / Wiese - Farbe Weiß</div>
            <h4 className="font-bold py-4">Kid&apos;s Run</h4>
            <div>11:20 Uhr - Richtung Fürstengarten / Wiese - Farbe Weiß</div>
            <h4 className="font-bold py-4">7 km Waldlauf</h4>
            <div>12:10 Uhr - Richtung Fürstengarten Schotterweg - Farbe Orange</div>
            <h4 className="font-bold py-4">7 km Nordic Walking</h4>
            <div>12:15 Uhr - Richtung Fürstengarten Schotterweg - Farbe Gelb</div>
            <h4 className="font-bold py-4">5 km Laufen</h4>
            <div>13:10 Uhr - Richtung Maxstraße - Farbe Grün</div>
            <h4 className="font-bold py-4">10 km Laufen</h4>
            <div>13:20 Uhr - Richtung Maxstraße - Farbe Blau</div>
          </div>
          <div className="w-full md:w-1/3 md:shrink-0 md:justify-center">
            <img src="/assets/images/information-start-ziel-2022.jpg" alt="Start-Ziel Bereich" />
          </div>
        </div>
      </PageSection>
      <PageSection headline="Anreise und Parken" id="parken" subSection className="bg-gray-200 dark:bg-gray-900 pb-6 sm:pb-8">
        <div className="md:inline-flex">
          <div className="w-full pb-4 md:w-2/3 md:pr-4 md:pb-0">
            <h4 className="font-bold pb-4">Parkplätze</h4>
            <div>Donaustauf bietet rund um den Fürstengarten mehrere, kleinere Parkplätze. Es bietet sich an, den von uns bereitgestellten Parkplatz am Festplatz zu benutzen. Dieser liegt ca. 500m vom Veranstaltungsort entfernt.</div>
          </div>
          <div className="w-full md:w-1/3 md:shrink-0 md:justify-center">
            <div className="pb-2">
              <img src="/assets/images/information-parkplatz.jpg" alt="Parkplätze" />
            </div>
            <div className="pb-2">
              <img src="/assets/images/information-parkplatz2.jpg" alt="Parkplätze" />
            </div>
            <div className="pb-2">
              <img src="/assets/images/information-parkplatz3.jpg" alt="Parkplätze" />
            </div>
          </div>
        </div>
      </PageSection>
      <PageSection headline="Nachmeldung / Startunterlagen" id="startnummernausgabe" subSection className="pb-6 sm:pb-8">
        <div className="md:inline-flex">
          <div className="w-full pb-4 md:w-2/3 md:pr-4 md:pb-0">
            Bereits einen Tag vor dem Lauf kann man sich stressfrei die Startunterlagen im Jugendzimmer der Mehrzweckhalle abholen oder auch noch Nachmelden. Aktuell befindet sich der Eingang zum Jugendzimmer hinter dem Haus:
            <br />
            <br />
            <strong>Samstag, den 14.05.2022 von 17:00 Uhr bis 19:00 Uhr:</strong>
            <br />
            <br />
            Mehrzweckhalle Donaustauf (Jungendzimmer)
            <br />
            Regensburger Str. 30
            <br />
            93093 Donaustauf
            <br />
            <br />
            <strong>Sonntag, den 15.05.2022 ab 10:00 Uhr bis 15 Minuten vor dem jeweiligen Start:</strong>
            <br />
            <br />
            Fürstengarten <br />
            (gegenüber Maxstraße 2)
            <br />
            93093 Donaustauf
          </div>
          <div className="w-full md:w-1/3 md:shrink-0 md:justify-center">
            <div className="pb-2">
              <img src="/assets/images/information-jugendzimmer.jpg" alt="Jugendzimmer" />
            </div>
          </div>
        </div>
      </PageSection>
      <PageSection headline="Kinder" id="kinder" subSection className="bg-gray-200 dark:bg-gray-900 pb-6 sm:pb-8">
        <div className="md:inline-flex">
          <div className="w-full pb-4 md:w-2/3 md:pr-4 md:pb-0">
            Unser Anspruch ist es &quot;Kinder und Jugendliche für Sport zu begeistern&quot;, weshalb auch die Teilnahme am Baminilauf und am Kid&apos;s Run völlig kostenlos für die Teilnehmer ist. Die Kinderläufe enden alle im Zielbereich,
            hier erhalten die Kinder dann je nach Jahr eine Urkunde und/oder Medaille. Und nach dem Lauf können sich die Kleinen noch auf dem Spielplatz im Fürstengarten austoben oder in Ruhe eine Bratwurstsemmel oder ein Stück Kuchen
            genießen.
          </div>
          <div className="w-full md:w-1/3 md:shrink-0 md:justify-center">
            <img src="/assets/images/information-kinderlauf.jpg" alt="Start-Ziel Bereich" />
          </div>
        </div>
      </PageSection>
      <PageSection headline="Hunde" id="hunde" subSection className="pb-6 sm:pb-8">
        <div className="md:inline-flex">
          <div className="w-full pb-4 md:w-2/3 md:pr-4 md:pb-0">
            Hunde dürfen bei uns sehr gerne mit auf die Strecke, allerdings bitten wir die Halter besonders auf die Unfallverhütung, z.B. durch die Gefahr von Leinen zu achten und sich beim Start eher an das Ende zu orientieren.
          </div>
        </div>
      </PageSection>
      <PageSection headline="Ergebnislisten vergangener Läufe" id="ergebnislisten" subSection className="bg-gray-200 dark:bg-gray-900 pb-6 sm:pb-8">
        <ul className="page-section">
          <li>
            <a href="https://ergebnisse.zeitgemaess.info/202205152" target="_blank" rel="noreferrer">
              11. Walhallalauf (15.05.2022)
            </a>
          </li>
          <li>
            <a href="https://www.zeitgemaess.info/event.php?ACCESSCODE=201904281" target="_blank" rel="noreferrer">
              10. Walhallalauf (28.04.2019)
            </a>
          </li>
          <li>
            <a href="https://www.zeitgemaess.info/event.php?ACCESSCODE=201804081" target="_blank" rel="noreferrer">
              9. Walhallalauf (08.04.2018)
            </a>
          </li>
          <li>
            <a href="https://www.zeitgemaess.info/event.php?ACCESSCODE=201703261" target="_blank" rel="noreferrer">
              8. Walhallalauf (26.03.2017)
            </a>
          </li>
          <li>
            <a href="https://www.zeitgemaess.info/event.php?ACCESSCODE=201604021" target="_blank" rel="noreferrer">
              7. Walhallalauf (02.04.2016)
            </a>
          </li>
          <li>
            <a href="https://www.zeitgemaess.info/event.php?ACCESSCODE=201503281" target="_blank" rel="noreferrer">
              6. Walhallalauf (28.03.2015)
            </a>
          </li>
          <li>
            <a href="https://www.zeitgemaess.info/event.php?ACCESSCODE=201403291" target="_blank" rel="noreferrer">
              5. Walhallalauf (29.03.2014)
            </a>
          </li>
          <li>
            <a href="https://www.zeitgemaess.info/event.php?ACCESSCODE=201303231" target="_blank" rel="noreferrer">
              4. Walhallalauf (23.03.2013)
            </a>
          </li>
        </ul>
      </PageSection>
      <PageSection headline="Sponsoren" id="sponsoren" subSection className="pb-6 sm:pb-8 page-section">
        <p>Wir sagen vielen Dank für die Unterstützung an unsere Partner und Sponsoren</p>
        <SponsorGallery items={SponsorData} />
      </PageSection>
    </Layout>
  );
};

export default Informationen;
