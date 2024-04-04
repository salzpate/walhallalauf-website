import { JSX } from 'react';
import PageSection from '@/components/PageSection';
import SponsorGallery from '@/components/SponsorGallery/SponsorGallery';
import { SponsorData } from '@/data/SponsorData';
import Image from 'next/image';
import { START_TIME_10, START_TIME_5, START_TIME_7, START_TIME_BAMBINI, START_TIME_KIDS, START_TIME_NORDIC } from '@/lib/constants';

function Informationen(): JSX.Element {
  return (
    <>
      <PageSection headline="Informationen" id="informationen">
        <div className="mb-4">Neben der Ausschreibung befinden sich hier weitere Informationen rund um den Lauf.</div>
      </PageSection>
      <PageSection headline="Startzeiten und -richtung" id="sectionzeiten" subSection className="pb-6 sm:pb-8">
        <div className="md:inline-flex">
          <div className="w-full pb-4 md:w-2/3 md:pr-4 md:pb-0">
            <h4 className="font-bold pb-4">Bambinilauf</h4>
            <div>{START_TIME_BAMBINI} - Richtung Fürstengarten / Wiese</div>
            <h4 className="font-bold py-4">Kid&apos;s Run</h4>
            <div>{START_TIME_KIDS} - Richtung Fürstengarten / Wiese</div>
            <h4 className="font-bold py-4">7 km Waldlauf</h4>
            <div>{START_TIME_7} - Richtung Fürstengarten Schotterweg - gelbe Bodenmarkierung</div>
            <h4 className="font-bold py-4">7 km Nordic Walking</h4>
            <div>{START_TIME_NORDIC} - Richtung Fürstengarten Schotterweg - gelbe Bodenmarkierung</div>
            <h4 className="font-bold py-4">10 km Laufen</h4>
            <div>{START_TIME_10} - Richtung Maxstraße - blaue Bodenmarkierung</div>
            <h4 className="font-bold py-4">5 km Laufen</h4>
            <div>{START_TIME_5} - Richtung Maxstraße - weiße Bodenmarkierung</div>
          </div>
          <div className="w-full md:w-1/3 md:shrink-0 md:justify-center">
            <Image src="/assets/images/information-start-ziel-2024.jpg" width={810} height={372} alt="Start-Ziel Bereich" />
          </div>
        </div>
      </PageSection>
      <PageSection headline="Anreise und Parken" id="parken" subSection className="bg-gray-200 dark:bg-gray-900 pb-6 sm:pb-8">
        <div className="md:inline-flex">
          <div className="w-full pb-4 md:w-2/3 md:pr-4 md:pb-0">
            <h4 className="font-bold pb-4">Parkplätze</h4>
            <div>Donaustauf bietet rund um den Fürstengarten mehrere, kleinere Parkplätze. Es bietet sich an, den von uns bereitgestellten Parkplatz am Festplatz zu benutzen. Dieser liegt ca. 500m vom Veranstaltungsort entfernt.</div>
            <h4 className="font-bold py-4">Anfahrt mit dem öffentlichen Verkehrsmitteln</h4>
            <div>Direkt am Veranstaltungsort hält die Buslinie 5 des RVV. Haltestelle: Kriegerdenkmal, Donaustauf.</div>
          </div>
          <div className="w-full md:w-1/3 md:shrink-0 md:justify-center">
            <div className="pb-2">
              <Image src="/assets/images/information-parkplatz.jpg" width={405} height={216} alt="Parkplätze" />
            </div>
            <div className="pb-2">
              <Image src="/assets/images/information-parkplatz2.jpg" width={405} height={240} alt="Parkplätze" />
            </div>
            <div className="pb-2">
              <Image src="/assets/images/information-parkplatz3.jpg" width={405} height={268} alt="Parkplätze" />
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
            <strong>Samstag, den 06.04.2024 von 17:00 Uhr bis 19:00 Uhr:</strong>
            <br />
            <br />
            Mehrzweckhalle Donaustauf (Jungendzimmer)
            <br />
            Regensburger Str. 30
            <br />
            93093 Donaustauf
            <br />
            <br />
            <strong>Sonntag, den 07.04.2024 ab 09:30 Uhr bis 30 Minuten vor dem jeweiligen Start:</strong>
            <br />
            <br />
            Fürstengarten <br />
            (gegenüber Maxstraße 2)
            <br />
            93093 Donaustauf
          </div>
          <div className="w-full md:w-1/3 md:shrink-0 md:justify-center">
            <div className="pb-2">
              <Image src="/assets/images/information-jugendzimmer.jpg" width={405} height={263} alt="Jugendzimmer" />
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
            <Image src="/assets/images/information-kinderlauf.jpg" width={405} height={189} alt="Kinderlauf" />
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
            <a href="https://ergebnisse.zeitgemaess.info/202404071" target="_blank" rel="noreferrer">
              13. Walhallalauf (07.04.2024)
            </a>
          </li>
          <li>
            <a href="https://ergebnisse.zeitgemaess.info/202304161" target="_blank" rel="noreferrer">
              12. Walhallalauf (16.04.2023)
            </a>
          </li>
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
        <SponsorGallery groups={SponsorData} />
      </PageSection>
    </>
  );
}

export default Informationen;
