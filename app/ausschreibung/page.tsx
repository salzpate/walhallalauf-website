import { JSX } from 'react';
import DataList from '@/components/DataList';
import PageSection from '@/components/PageSection';

function Ausschreibung(): JSX.Element {
  return (
    <PageSection headline="Ausschreibung" id="ausschreibung">
      <DataList headline="Veranstaltung">12. Walhallalauf</DataList>
      <DataList headline="Termin">Sonntag, 16.04.2023</DataList>
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
              <td>10:30 Uhr</td>
              <td className="text-right px-4">400 m</td>
              <td>Bambini-Lauf (bis 7 Jahre)</td>
            </tr>
            <tr>
              <td>10:50 Uhr</td>
              <td className="text-right px-4">1,6 km</td>
              <td>Kid&apos;s Run (ab 7 Jahren)</td>
            </tr>
            <tr>
              <td>11:45 Uhr</td>
              <td className="text-right px-4">7 km</td>
              <td>Waldlauf</td>
            </tr>
            <tr>
              <td>11:50 Uhr</td>
              <td className="text-right px-4">7 km</td>
              <td>Nordic Walking</td>
            </tr>
            <tr>
              <td>13:35 Uhr</td>
              <td className="text-right px-4">10 km</td>
              <td>Lauf</td>
            </tr>
            <tr>
              <td>13:45 Uhr</td>
              <td className="text-right px-4">5 km</td>
              <td>Lauf</td>
            </tr>
          </tbody>
        </table>
      </DataList>
      <DataList headline="Siegerehrung">
        <h4 className="md:font-bold">Bambini-Lauf und Kid&apos;s Run</h4>
        Medaillen beim Zieleinlauf und Online Urkunden
        <br />
        <br />
        <h4 className="md:font-bold">7km Waldlauf und Nordic-Walking</h4>
        Ab ca. 12:50 Uhr
        <p className="text-xs sm:text-sm">
          jeweils die Ersten drei Sieger männlich und weiblich
          <br />
          Jugend U16: jeweils die Ersten drei Sieger männlich und weiblich <br />
        </p>
        <br />
        <h4 className="md:font-bold"> 5 km Lauf und 10 km Lauf</h4>
        Ab ca. 15:15 Uhr
        <p className="text-xs sm:text-sm">
          jeweils die Ersten drei Sieger männlich und weiblich
          <br />
          Jugend U16: jeweils die Ersten drei Sieger männlich und weiblich <br />
        </p>
      </DataList>
      <DataList headline="Verlosung">Ab ca. 11:00 Uhr findet eine Verlosung für die Teilnehmer der Kinderläufe statt.</DataList>
      <DataList headline="Startgebühren">
        5 km Lauf, 7km Waldlauf, 10 km Lauf und Nordic-Walking bis 15.03.2023 je 12 EUR
        <br />
        5 km Lauf, 7km Waldlauf, 10 km Lauf und Nordic-Walking ab 16.03.2023 je 15 EUR
        <br />
        Nachmeldegebühr, am 15.04.2023 und am Veranstaltungstag 3 EUR
        <br />
        <br />
        Bambini-Lauf und Kid&apos;s Run kostenfrei
      </DataList>
      <DataList headline="Anmeldung">
        <span className="page-section">über ZEITGEMAESS GmbH</span>
      </DataList>
      <DataList headline="Anmeldeschluss">Donnerstag, den 13.04.2022, 23:59 Uhr (Online)</DataList>
      <DataList headline="Nachmeldung / Startunterlagen">
        <h4 className="md:font-bold">Am 15.04.2023 von 17:00 Uhr – 19:00 Uhr:</h4>
        Mehrzweckhalle (Jugendzimmer)
        <br />
        Regensburger Str. 30
        <br />
        93093 Donaustauf
        <br />
        <br />
        <h4 className="md:font-bold">Am 16.04.2023 von 10:00 Uhr bis 15 Minuten vor dem jeweiligen Start möglich:</h4>
        Fürstengarten <br />
        (gegenüber Maxstraße 2)
        <br />
        93093 Donaustauf
      </DataList>
      <DataList headline="Zeitnahme">
        Mit Transponder durch ZEITGEMAESS GmbH bei 5 km Lauf, 7 km Waldlauf, 10 km Lauf und Nordic-Walking.
        <br />
        <br />
        Bambini-Lauf und Kid&apos;s Run sind ohne Zeitmessung.
      </DataList>
      <DataList headline="Ergebnisliste">
        Nach dem Lauf werden die Ergebnisse und Online-Urkunden bei <span className="page-section">ZEITGEMAESS GmbH</span> veröffentlicht.
      </DataList>
      <DataList headline="Verpflegung">Wasserstation beim 10 km Lauf und bei Nordic-Walking Getränke und Obst im Zielbereich</DataList>
      <DataList headline="Benefizaktion">Verein für helfende Hunde e.V.</DataList>
      <DataList headline="Sonstiges">
        Für das leibliche Wohl wird bestens gesorgt.
        <br />
        Wir können dieses Jahr leider keine Duschmöglichkeiten anbieten, die Baustelle in der Mehrzweckhalle ist leider noch nicht fertig geworden.
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
  );
}

export default Ausschreibung;