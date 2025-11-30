'use client';

import { JSX } from 'react';
import { START_TIME_10, START_TIME_5, START_TIME_7, START_TIME_KIDS_1000, START_TIME_KIDS_400, START_TIME_KIDS_600, START_TIME_NORDIC } from '@/lib/constants';
import { PageSection, DataList } from '@salzpate/react-ui';

function Ausschreibung(): JSX.Element {
  return (
    <PageSection headline="Ausschreibung" id="ausschreibung">
      <DataList headline="Veranstaltung">15. Walhallalauf</DataList>
      <DataList headline="Termin">Sonntag, 26.04.2026</DataList>
      <DataList headline="Veranstalter">SV Donaustauf, Abteilung Ausdauer</DataList>
      <DataList headline="Ort">
        Fürstengarten <br />
        (gegenüber Maxstraße 2)
        <br />
        93093 Donaustauf
      </DataList>
      <DataList headline="Strecken">
        <h4 className="md:font-bold">Kinderlauf 400 m:</h4>
        <p>ca. 400 m Strecke - Park- und Wiesenwege (bis ca. 5 Jahre)</p>
        <h4 className="md:font-bold">Kinderlauf 600 m:</h4>
        <p>ca. 600 m Strecke - Park- und Wiesenwege (bis ca. 7 Jahre)</p>
        <h4 className="md:font-bold">Kinderlauf 1.000 m:</h4>
        <p>ca. 1.000 m Strecke - Park- und Wiesenwege (ab ca. 8 Jahre)</p>
        <h4 className="mt-2 md:font-bold">Waldlauf:</h4>
        <p>7,1 km Rundkurs - anspruchsvoll (ca. 160 HM) geteert, geschottert und Waldweg - gelbe Bodenmarkierung</p>
        <h4 className="mt-2 md:font-bold">Nordic Walking:</h4>
        <p>7,1 km Rundkurs - anspruchsvoll (ca. 160 HM) geteert, geschottert und Waldweg - gelbe Bodenmarkierung</p>
        <h4 className="mt-2 md:font-bold">5 km Lauf:</h4>
        <p>5,4 km Rundkurs - flach, meist geteert - weiße Bodenmarkierung</p>
        <h4 className="mt-2 md:font-bold">10 km Lauf:</h4>
        <p>10 km Rundkurs - flach, meist geteert, geschottert - blaue Bodenmarkierung</p>
      </DataList>
      <DataList headline="Startzeiten">
        <table>
          <tbody>
            <tr>
              <td>{START_TIME_KIDS_400}</td>
              <td className="px-4 text-right">ca. 400 m</td>
              <td>Kinderlauf (bis ca. 5 Jahre)</td>
            </tr>
            <tr>
              <td>{START_TIME_KIDS_600}</td>
              <td className="px-4 text-right">ca. 600 m</td>
              <td>Kinderlauf (bis ca. 7 Jahre)</td>
            </tr>
            <tr>
              <td>{START_TIME_KIDS_1000}</td>
              <td className="px-4 text-right">ca. 1.000 m</td>
              <td>Kinderlauf (ab ca. 8 Jahren)</td>
            </tr>
            <tr>
              <td>{START_TIME_7}</td>
              <td className="px-4 text-right">7 km</td>
              <td>Waldlauf</td>
            </tr>
            <tr>
              <td>{START_TIME_NORDIC}</td>
              <td className="px-4 text-right">7 km</td>
              <td>Nordic Walking</td>
            </tr>
            <tr>
              <td>{START_TIME_10}</td>
              <td className="px-4 text-right">10 km</td>
              <td>Lauf</td>
            </tr>
            <tr>
              <td>{START_TIME_5}</td>
              <td className="px-4 text-right">5 km</td>
              <td>Lauf</td>
            </tr>
          </tbody>
        </table>
      </DataList>
      <DataList headline="Siegerehrung">
        <h4 className="md:font-bold">Kinderläufe</h4>
        Medaillen beim Zieleinlauf und Online Urkunden
        <br />
        <br />
        <h4 className="md:font-bold">7 km Waldlauf und Nordic-Walking</h4>
        Ab ca. 12:50 Uhr
        <p className="text-xs sm:text-sm">jeweils die ersten drei Sieger männlich und weiblich</p>
        <br />
        <h4 className="md:font-bold">5 km Lauf und 10 km Lauf</h4>
        Ab ca. 15:15 Uhr
        <p className="text-xs sm:text-sm">
          jeweils die ersten drei Sieger männlich und weiblich
          <br />
          Jugend U16: jeweils die ersten drei Sieger männlich und weiblich
          <br />
        </p>
      </DataList>
      <DataList headline="Verlosung">Ab ca. 11:00 Uhr findet eine Verlosung für die Teilnehmer der Kinderläufe statt.</DataList>
      <DataList headline="Startgebühren">
        5 km Lauf bis 25.03.2026 je 13 EUR 7 km Waldlauf, 10 km Lauf und Nordic-Walking bis 25.03.2026 je 14 EUR
        <br />
        5 km Lauf ab 26.03.2026 je 16 EUR
        <br />
        7 km Waldlauf, 10 km Lauf und Nordic-Walking ab 26.03.2026 je 17 EUR
        <br />
        5km, 7 km Waldlauf, 10 km Lauf und Nordic-Walking am Veranstaltungstag 26.04.2026 je 20 EUR (3-4 EUR Nachmeldegebühr)
        <br />
        <br />
        Kinderläufe sind kostenfrei
      </DataList>
      <DataList headline="Anmeldung">
        <span className="page-section">über ZEITGEMAESS GmbH</span>
      </DataList>
      <DataList headline="Anmeldeschluss">Freitag, den 24.04.2026, 18:00 Uhr (Online)</DataList>
      <DataList headline="Nachmeldung / Ummeldung / Startunterlagen">
        <h4 className="md:font-bold">Am 25.04.2026 von 17:00 Uhr – 19:00 Uhr:</h4>
        Mehrzweckhalle (Jugendzimmer)
        <br />
        Regensburger Str. 30
        <br />
        93093 Donaustauf
        <br />
        <br />
        <h4 className="md:font-bold">Am 26.04.2026 von 09:30 Uhr bis 30 Minuten vor dem jeweiligen Start möglich:</h4>
        Fürstengarten <br />
        (gegenüber Maxstraße 2)
        <br />
        93093 Donaustauf
      </DataList>
      <DataList headline="Zeitnahme">
        Mit Transponder durch ZEITGEMAESS GmbH bei 5 km Lauf, 7 km Waldlauf, 10 km Lauf und Nordic-Walking.
        <br />
        <br />
        Kinderläufe sind ohne Zeitmessung.
      </DataList>
      <DataList headline="Ergebnisliste">
        Nach dem Lauf werden die Ergebnisse und Online-Urkunden bei <span className="page-section">ZEITGEMAESS GmbH</span> veröffentlicht.
      </DataList>
      <DataList headline="Verpflegung">Wasserstation beim 10 km Lauf und bei Nordic-Walking Getränke und Obst im Zielbereich</DataList>
      <DataList headline="Benefizaktion">für 2026 noch offen</DataList>
      <DataList headline="Sonstiges">
        Für das leibliche Wohl wird bestens gesorgt.
        <br />
        Wir können leider keine Duschmöglichkeiten anbieten.
      </DataList>
      <DataList headline="Haftungsausschluss">
        Der SV Donaustauf übernimmt keine Garantie dafür, dass die bereitgestellten Informationen vollständig, richtig und in jedem Fall aktuell sind.
        <br />
        Haftungsansprüche gegen den SV Donaustauf für Schäden materieller oder immaterieller Art, verursacht auf Grund der dargebotenen Informationen, sind ausgeschlossen, sofern Vorsatz oder grobfahrlässiges Verschulden des SV Donaustauf
        nicht nachgewiesen werden kann.
        <br />
        Alle Angebote sind freibleibend und unverbindlich.
        <br />
        Der SV Donaustauf behält sich ausdrücklich vor, Teile der Seiten oder Angebotsbereiche ohne gesonderte Ankündigung zu verändern, zu ergänzen, zu löschen oder die Veröffentlichung zeitweise oder endgültig einzustellen.
        <br />
        Auf allen nicht voll gesperrten Strecken gilt, der Straßenverkehr Vorrang hat und man notfalls warten muss, bis ein Fahrzeug eine nicht gesperrte Straße passiert hat. Den Anweisungen der Streckenposten und der Feuerwehr ist
        unbedingt Folge zu leisten.
      </DataList>
    </PageSection>
  );
}

export default Ausschreibung;
