import Banner from '@/components/Banner';
import { BannerTypes } from '@/components/Banner/Banner';
import DataList from '@/components/DataList';
import HeaderImage from '@/components/Header/HeaderImage';
import Layout from '@/components/Layout';
import { siteTitle } from '@/components/Layout/Layout';
import PageSection from '@/components/PageSection';
import styles from '@/styles/index.module.css';
import { HEADER_LINE_1, HEADER_LINE_2 } from 'lib/constants';
import { FC } from 'react';

export const pageTitle = 'Ausschreibung';

const Ausschreibung: FC = () => {
  return (
    <Layout title={pageTitle + ' - ' + siteTitle}>
      <HeaderImage text1={HEADER_LINE_1} text2={HEADER_LINE_2} imageClass={styles.headerimage} />
      <PageSection headline={pageTitle} id="ausschreibung">
        <div className="mb-8">
          <Banner type={BannerTypes.warning}>Durch die aktuelle Situation können wir hier bisher leider nur eine vorläufige Ausschreibung anzeigen. Bis zur endgültigen Version ab ca. 15.03.2022 kann es noch zu Änderungen kommen.</Banner>
        </div>
        <DataList headline="Veranstaltung">11. Walhallalauf</DataList>
        <DataList headline="Termin">Sonntag, 15.05.2022</DataList>
        <DataList headline="Veranstalter">SV Donaustauf, Abteilung Ausdauer</DataList>
        <DataList headline="Ort">
          Fürstengarten <br />
          (gegenüber Maxstraße 2)
          <br />
          93093 Donaustauf
        </DataList>
        <DataList headline="Strecken">
          <h4 className="md:font-bold">Bambini-Lauf:</h4>
          <p>400 m Strecke, geschottert (bis 7 Jahre)</p>
          <h4 className="md:font-bold mt-2">Kid&apos;s Run:</h4>
          <p>1,6 km Rundkurs, 3 Runden, geschottert (ab 7 Jahre)</p>
          <h4 className="md:font-bold mt-2">Waldlauf:</h4>
          <p>7,1 km Rundkurs, anspruchvoll (ca. 160 HM) geteert, geschottert und Waldweg</p>
          <h4 className="md:font-bold mt-2">Nordic Walking:</h4>
          <p>7,1 km Rundkurs, anspruchvoll (ca. 160 HM) geteert, geschottert und Waldweg</p>
          <h4 className="md:font-bold mt-2">5km Lauf:</h4>
          <p>5,4 km Rundkurs, flach, meist geteert</p>
          <h4 className="md:font-bold mt-2">10km Lauf:</h4>
          <p>10 km Rundkurs, flach, meist geteert, geschottert</p>
        </DataList>
        <DataList headline="Startzeiten">
          <table>
            <tbody>
              <tr>
                <td>11:00 Uhr</td>
                <td className="text-right px-4">400 m</td>
                <td>Bambini-Lauf (bis 7 Jahre)</td>
              </tr>
              <tr>
                <td>11:20 Uhr</td>
                <td className="text-right px-4">1,6 km</td>
                <td>Kid&apos;s Run (ab 7 Jahren)</td>
              </tr>
              <tr>
                <td>12:10 Uhr</td>
                <td className="text-right px-4">7 km</td>
                <td>Waldlauf</td>
              </tr>
              <tr>
                <td>12:15 Uhr</td>
                <td className="text-right px-4">7 km</td>
                <td>Nordic Walking</td>
              </tr>
              <tr>
                <td>13:10 Uhr</td>
                <td className="text-right px-4">5 km</td>
                <td>Lauf</td>
              </tr>
              <tr>
                <td>13:20 Uhr</td>
                <td className="text-right px-4">10 km</td>
                <td>Lauf</td>
              </tr>
            </tbody>
          </table>
        </DataList>
        <DataList headline="Siegerehrung">
          Ab ca. 15:30 Uhr
          <p className="text-xs sm:text-sm">
            5 km Lauf, 7km Waldlauf 10 km Lauf und Nordic-Walking: jeweils die Ersten drei Sieger männlich und weiblich
            <br />
            Jugend U16: jeweils die Ersten drei Sieger männlich und weiblich <br />
            Bambini-Lauf und Kid&apos;s Run: Medaillen und Urkunden
          </p>
        </DataList>
        <DataList headline="Startgebühren">
          5 km Lauf, 7km Waldlauf, 10 km Lauf und Nordic-Walking je 10 EUR
          <br />
          Nachmeldegebühr am Veranstaltungstag 2 EUR
          <br />
          <br />
          Bambini-Lauf und Kid&apos;s Run kostenfrei
        </DataList>
        <DataList headline="Anmeldung">Wird ab dem 15.03.2022 freigeschaltet</DataList>
        <DataList headline="Anmeldeschluss">Samstag, den 14.03.2022, 12:00 Uhr (Online)</DataList>
        <DataList headline="Nachmeldung / Startunterlagen">
          Sportverein Donaustauf
          <br />
          Regensburger Str. 30
          <br />
          93093 Donaustauf
          <br />
          <br />
          14.05.2022 von 17:00 Uhr – 19:00 Uhr
          <br />
          15.05.2022 von 10:00 Uhr bis 15 Minuten vor dem jeweiligen Start möglich.
        </DataList>
        <DataList headline="Zeitnahme">
          Mit Transponder durch Zeitgemaess GmbH bei 5 km Lauf, 7 km Waldlauf, 10 km Lauf und Nordic-Walking.
          <br />
          <br />
          Bambini-Lauf und Kid&apos;s Run sind ohne Zeitmessung.
        </DataList>
        <DataList headline="Ergebnisliste">Nach dem Lauf werden die Ergebnisse und Online-Urkunden bei Zeitgemaess GmbH veröffentlicht.</DataList>
        <DataList headline="Verpflegung">Wasserstation beim 10 km Lauf und bei Nordic-Walking Getränke und Obst im Zielbereich</DataList>
        <DataList headline="Benefizaktion">Noch offen</DataList>
        <DataList headline="Sonstiges">
          Für das leibliche Wohl wird bestens gesorgt.
          <br />
          Duschmöglichkeiten sind in der Mehrzweckhalle Donaustauf vorhanden.
        </DataList>
        <DataList headline="Haftungsausschluss">
          Der SV Donaustauf übernimmt keine Garantie dafür, dass die bereitgestellten Informationen vollständig, richtig und in jedem Fall aktuell sind.
          <br />
          Haftungsansprüche gegen den SV Donaustauf für Schäden materieller oder immaterieller Art, verursacht auf Grund der dargebotenen Informationen, sind ausgeschlossen, sofern Vorsatz oder grobfahrlässiges Verschulden des SV Donaustauf
          nicht nachgewiesen werden kann.
          <br />
          Alle Angebote sind freibleibend und unverbindlich.
          <br />
          Der SV Donaustauf behält sich ausdrücklich vor, Teile der Seiten oder Angebotsbereiche ohne gesonderte Ankündigung zu verändern, zu ergänzen, zu löschen oder die Veröffentlichung zeitweise oder endgültig einzustellen
        </DataList>
      </PageSection>
    </Layout>
  );
};

export default Ausschreibung;
