'use client';

import { JSX } from 'react';
import SponsorGallery from '@/components/SponsorGallery/SponsorGallery';
import { SponsorData } from '@/data/SponsorData';
import Image from 'next/image';
import { START_TIME_10, START_TIME_5, START_TIME_7, START_TIME_KIDS_1000, START_TIME_KIDS_400, START_TIME_KIDS_600, START_TIME_NORDIC } from '@/lib/constants';
import { PageLink, PageSection } from '@salzpate/react-ui';

function Informationen(): JSX.Element {
  return (
    <>
      <PageSection headline="Informationen" id="informationen">
        <div className="mb-4">Neben der Ausschreibung befinden sich hier weitere Informationen rund um den Lauf.</div>
      </PageSection>
      <PageSection headline="Wichtige Information zu den Streckenänderungen beim 15. Walhallalauf" id="aenderungen">
        <p>Liebe Teilnehmerinnen und Teilnehmer,</p>
        <br />
        <p>
          aufgrund der seit dem 27.03.2026 bestehenden Vollsperrung der Staatsstraße 2125 im Bereich der Donaubrücke bei Donaustauf mussten unsere Strecken kurzfristig angepasst werden. Hintergrund der Sperrung sind erhebliche
          Brückenschäden, die bei einer beschädigten Gewindestange mit Korrosionsfolgen an der Brüstung festgestellt wurden.
        </p>

        <p>
          Ursprünglich war davon ausgegangen worden, dass die Arbeiten vor dem Lauf abgeschlossen sein würden. Da der Durchgangsverkehr derzeit jedoch über die Maxstraße in Donaustauf geführt wird, können wir weder den Start dort absperren
          noch die Wörther Straße in Richtung Ziel überqueren lassen.
        </p>
        <br />
        <p>Die gute Nachricht: Der Lauf kann stattfinden.</p>
        <p>Die schlechte Nachricht: Wir mussten die Strecken leicht verändern.</p>
        <br />
        <p>Unter Strecken findet ihr die Beschreibungen, GPX-Daten der neuen Strecken sowie eine Übersicht der Änderungen.</p>
        <br />
        <p>
          <strong>Waldlauf / Nordic Walking</strong>
        </p>

        <p>
          Der Waldlauf bzw. Nordic Walking hat nun leider etwas weniger Waldanteil, bleibt aber anspruchsvoll. Gleichzeitig wurde die Strecke um 1 km verlängert. Da wir in diesem Jahr nicht direkt vom Fürstengarten auf den Schotterweg zur
          Walhalla laufen können, führt die Strecke zunächst über den Donauradweg. Dabei müssen zwei Unterführungen passiert werden; derselbe Weg wird auch wieder zurückgelaufen.
        </p>

        <p>Bitte beachtet: Die erste und somit letzte Unterführung ist leider sehr eng. Lauft in diesem Bereich bitte besonders vorsichtig, und es gilt Überholverbot.</p>

        <p>Wer die neue Streckenführung nicht laufen möchte, kann sich am Lauftag vor Ort auf die 5-km- oder 10-km-Strecke umschreiben lassen.</p>
        <br />
        <p>
          <strong>5 km / 10 km</strong>
        </p>

        <p>Auch hier mussten wir Anpassungen vornehmen. Der Start wird um etwa 100 m verschoben und befindet sich nun unten in der Eichendorffstraße.</p>

        <p>
          Der direkte Weg zur Bauernbrücke steht nicht zur Verfügung. Stattdessen geht es am Festplatz und hinter der Feuerwehr vorbei. Ab der Straßenüberquerung bei der Einfahrt Donaustauf Mitte wird es stellenweise enger; zudem gibt es
          einzelne Pfosten in der Straße und einige 90-Grad-Kurven. Bitte lauft dort besonders aufmerksam.
        </p>

        <p>Am Kreuzweg Richtung Tegernheim biegen die 5-km-Läuferinnen und -Läufer nicht den ersten Weg nach links ab, sondern laufen wie die 10-km-Strecke weiter.</p>

        <p>
          Am Donauradweg können wir nicht unter der Donaubrücke hindurchlaufen. Kurz vorher geht es leicht rechts in Richtung Slip-Anlage weiter. Von dort ist der sichere Weg unter der Brücke möglich. Anschließend führt die Strecke über die
          Treppen auf den Damm zurück zum Donauradweg.
        </p>

        <p>
          Auch die Unterführung bei der Walhalla kann diesmal nicht genutzt werden. Stattdessen führt die Strecke bereits bei Donaustauf Ost unter der Straße hindurch. Diese Unterführung ist ebenfalls sehr eng. Bitte seid dort besonders
          vorsichtig, und auch hier gilt Überholverbot.
        </p>

        <p>Die 10-km-Strecke wurde dadurch auf 9,1 km verkürzt. Trotzdem freuen wir uns auf starke Zeiten und vielleicht bauen wir im Bereich des Fürstengartens nahe des Ziels noch eine kleine Zusatzschleife ein.</p>
        <br />
        <p>
          Uns ist bewusst, dass die diesjährigen Strecken nicht ganz so optimal sind, wie ihr es vom Walhallalauf gewohnt seid. Wir haben jedoch versucht, so viel der gewohnten Streckenführung wie möglich zu erhalten und hoffen auf euer
          Verständnis.
        </p>
        <br />
        <p>
          Wir wissen, dass viele von euch sich erst in den letzten Tagen vor dem Lauf entscheiden, und genau darauf hoffen wir auch in diesem Jahr. Trotz der kurzfristigen Änderungen wünschen wir uns sehr, dass euch die neue Streckenführung
          nicht abschreckt und ihr weiterhin mit Freude dabei seid. Jede Anmeldung freut uns sehr und trägt dazu bei, dass der Walhallalauf wieder ein besonderes Erlebnis für alle wird. Eine Online-Anmeldung ist noch bis Freitag um 18:00
          Uhr möglich. Darüber hinaus könnt ihr euch am 25.04.2026 von 17:00 Uhr bis 19:00 Uhr sowie am Lauftag selbst noch nachmelden.
        </p>
        <br />
        <p>
          An dieser Stelle möchten wir uns herzlich bei der Gemeinde, der Feuerwehr und den zuständigen Behörden bedanken. Alle haben sich bei der neuen Streckenführung sehr kooperativ gezeigt und damit ermöglicht, dass der Lauf nicht
          abgesagt werden musste.
        </p>
        <br />
        <p>Trotz aller Änderungen wünschen wir euch viel Spaß und Erfolg beim Lauf und freuen uns auf euer Kommen. Wie immer beim Walhallalauf hoffen wir auf bestes Laufwetter.</p>
      </PageSection>
      <PageSection headline="Startzeiten und -richtung" id="sectionzeiten" subSection className="pb-6 sm:pb-8">
        <article>
          <div className="md:inline-flex">
            <div className="w-full pb-4 md:w-2/3 md:pr-4 md:pb-0">
              <h4 className="pb-4 font-bold">Kinderlauf 400 m</h4>
              <div>{START_TIME_KIDS_400} - Richtung Fürstengarten</div>
              <h4 className="py-4 font-bold">Kinderlauf 600 m</h4>
              <div>{START_TIME_KIDS_600} - Richtung Fürstengarten</div>
              <h4 className="py-4 font-bold">Kinderlauf 1.000 m</h4>
              <div>{START_TIME_KIDS_1000} - Richtung Fürstengarten</div>
              <h4 className="py-4 font-bold">7 km Waldlauf</h4>
              <div>{START_TIME_7} - Richtung Fürstengarten Schotterweg - gelbe Bodenmarkierung</div>
              <h4 className="py-4 font-bold">7 km Nordic Walking</h4>
              <div>{START_TIME_NORDIC} - Richtung Fürstengarten Schotterweg - gelbe Bodenmarkierung</div>
              <h4 className="py-4 font-bold">10 km Laufen</h4>
              <div>
                {START_TIME_10} - <strong>Eichendorffstraße</strong> - blaue Bodenmarkierung
              </div>
              <h4 className="py-4 font-bold">5 km Laufen</h4>
              <div>
                {START_TIME_5} - <strong>Eichendorffstraße</strong> - weiße Bodenmarkierung
              </div>
            </div>
            <div className="w-full md:w-1/3 md:shrink-0 md:justify-center">
              <Image src="/assets/images/information-start-ziel-2026.jpg" width={810} height={372} alt="Start-Ziel Bereich" />
              Start für 2026 des 5 km und 10 km Laufs:
              <Image src="/assets/images/information-start-2026.jpg" width={810} height={372} alt="Start-Ziel Bereich" />
            </div>
          </div>
        </article>
      </PageSection>
      <PageSection headline="Anreise und Parken" id="parken" subSection className="bg-gray-200 pb-6 sm:pb-8 dark:bg-gray-900">
        <article>
          <div className="md:inline-flex">
            <div className="w-full pb-4 md:w-2/3 md:pr-4 md:pb-0">
              <h4 className="pb-4 font-bold">Parkplätze</h4>
              <div>Donaustauf bietet rund um den Fürstengarten mehrere, kleinere Parkplätze. Es bietet sich an, den von uns bereitgestellten Parkplatz am Festplatz zu benutzen. Dieser liegt ca. 500m vom Veranstaltungsort entfernt.</div>
              <h4 className="py-4 font-bold">Anfahrt mit dem öffentlichen Verkehrsmitteln</h4>
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
        </article>
      </PageSection>
      <PageSection headline="Nachmeldung / Ummeldung / Startunterlagen" id="startnummernausgabe" subSection className="pb-6 sm:pb-8">
        <article>
          <div className="md:inline-flex">
            <div className="w-full pb-4 md:w-2/3 md:pr-4 md:pb-0">
              Bereits einen Tag vor dem Lauf kann man sich stressfrei die Startunterlagen im Jugendzimmer der Mehrzweckhalle abholen oder auch noch Ummelden oder Nachmelden. Aktuell befindet sich der Eingang zum Jugendzimmer hinter dem
              Haus:
              <br />
              <br />
              <strong>Samstag, den 25.04.2026 von 17:00 Uhr bis 19:00 Uhr:</strong>
              <br />
              <br />
              Mehrzweckhalle Donaustauf (Jugendzimmer)
              <br />
              Regensburger Str. 30
              <br />
              93093 Donaustauf
              <br />
              <br />
              <strong>Sonntag, den 26.04.2026 ab 09:30 Uhr bis 30 Minuten vor dem jeweiligen Start:</strong>
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
        </article>
      </PageSection>
      <PageSection headline="Kinder" id="kinder" subSection className="bg-gray-200 pb-6 sm:pb-8 dark:bg-gray-900">
        <article>
          <div className="md:inline-flex">
            <div className="w-full pb-4 md:w-2/3 md:pr-4 md:pb-0">
              Unser Anspruch ist es &quot;Kinder und Jugendliche für Sport zu begeistern&quot;, weshalb auch die Teilnahme an den Kinderläufen völlig kostenlos für die Teilnehmer ist. Die Kinderläufe enden alle im Zielbereich, hier erhalten
              die Kinder dann jeweils eine Medaille. Die Urkunde zum Lauf kann man sich nach dem Lauf in der Ergebnisliste ansehen und ausdrucken. Und nach dem Lauf können sich die Kleinen noch auf dem Spielplatz im Fürstengarten austoben
              oder in Ruhe eine Bratwurstsemmel oder ein Stück Kuchen genießen.
            </div>
            <div className="w-full md:w-1/3 md:shrink-0 md:justify-center">
              <Image src="/assets/images/information-kinderlauf.jpg" width={405} height={189} alt="Kinderlauf" />
            </div>
          </div>
        </article>
      </PageSection>
      <PageSection headline="Hunde" id="hunde" subSection className="pb-6 sm:pb-8">
        <article>
          <div className="md:inline-flex">
            <div className="w-full pb-4 md:w-2/3 md:pr-4 md:pb-0">
              Hunde dürfen bei uns sehr gerne mit auf die Strecke, allerdings bitten wir die Halter besonders auf die Unfallverhütung, z.B. durch die Gefahr von Leinen zu achten und sich beim Start eher an das Ende zu orientieren.
            </div>
          </div>
        </article>
      </PageSection>
      <PageSection headline="Ergebnislisten vergangener Läufe" id="ergebnislisten" subSection className="bg-gray-200 pb-6 sm:pb-8 dark:bg-gray-900">
        <article>
          <ul className="page-section">
            <li>
              <PageLink href="https://ergebnisse.zeitgemaess.info/202604011" target="_blank" rel="noreferrer">
                15. Walhallalauf (26.04.2026)
              </PageLink>
            </li>
            <li>
              <PageLink href="https://ergebnisse.zeitgemaess.info/202504271" target="_blank" rel="noreferrer">
                14. Walhallalauf (27.04.2025)
              </PageLink>
            </li>
            <li>
              <PageLink href="https://ergebnisse.zeitgemaess.info/202404071" target="_blank" rel="noreferrer">
                13. Walhallalauf (07.04.2024)
              </PageLink>
            </li>
            <li>
              <PageLink href="https://ergebnisse.zeitgemaess.info/202304161" target="_blank" rel="noreferrer">
                12. Walhallalauf (16.04.2023)
              </PageLink>
            </li>
            <li>
              <PageLink href="https://ergebnisse.zeitgemaess.info/202205152" target="_blank" rel="noreferrer">
                11. Walhallalauf (15.05.2022)
              </PageLink>
            </li>
            <li>
              <PageLink href="https://www.zeitgemaess.info/event.php?ACCESSCODE=201904281" target="_blank" rel="noreferrer">
                10. Walhallalauf (28.04.2019)
              </PageLink>
            </li>
            <li>
              <PageLink href="https://www.zeitgemaess.info/event.php?ACCESSCODE=201804081" target="_blank" rel="noreferrer">
                9. Walhallalauf (08.04.2018)
              </PageLink>
            </li>
            <li>
              <PageLink href="https://www.zeitgemaess.info/event.php?ACCESSCODE=201703261" target="_blank" rel="noreferrer">
                8. Walhallalauf (26.03.2017)
              </PageLink>
            </li>
            <li>
              <PageLink href="https://www.zeitgemaess.info/event.php?ACCESSCODE=201604021" target="_blank" rel="noreferrer">
                7. Walhallalauf (02.04.2016)
              </PageLink>
            </li>
            <li>
              <PageLink href="https://www.zeitgemaess.info/event.php?ACCESSCODE=201503281" target="_blank" rel="noreferrer">
                6. Walhallalauf (28.03.2015)
              </PageLink>
            </li>
            <li>
              <PageLink href="https://www.zeitgemaess.info/event.php?ACCESSCODE=201403291" target="_blank" rel="noreferrer">
                5. Walhallalauf (29.03.2014)
              </PageLink>
            </li>
            <li>
              <PageLink href="https://www.zeitgemaess.info/event.php?ACCESSCODE=201303231" target="_blank" rel="noreferrer">
                4. Walhallalauf (23.03.2013)
              </PageLink>
            </li>
          </ul>
        </article>
      </PageSection>
      <PageSection headline="Sponsoren" id="sponsoren" subSection className="page-section pb-6 sm:pb-8">
        <p>Wir sagen vielen Dank für die Unterstützung an unsere Partner und Sponsoren</p>
        <SponsorGallery groups={SponsorData} />
      </PageSection>
    </>
  );
}

export default Informationen;
