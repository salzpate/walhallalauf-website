'use client';

import { JSX } from 'react';
import Image from 'next/image';
import { ButtonLink, PageSection } from '@salzpate/react-ui';

import { START_TIME_10, START_TIME_5, START_TIME_7, START_TIME_KIDS_1000, START_TIME_KIDS_400, START_TIME_KIDS_600, START_TIME_NORDIC } from '@/lib/constants';

function Strecken(): JSX.Element {
  return (
    <>
      <PageSection headline="Strecken" id="strecken">
        <div className="mb-4">
          Mit unseren Strecken decken wir alle Alters- und Leistungsstufen ab. Beim Walhallalauf geht es auch darum, etwas von Donaustauf zu erleben. Dein Weg führt dich zunächst durch den historischen Markt. Entlang der Donau siehst du
          schon von Weitem unsere Burg und natürlich auch die Walhalla. Vorbei an der historischen St. Salvator Kirche und dem chinesischen Turm geht es zum Schlussspurt. Im Ziel lädt der Fürstengarten zum Verweilen ein. Dort laufen auch
          die Kinder mit unserem Maskottchen um die Wette. Als Alternative zur Donau geht es auch gerne in den Wald und dort du darfst ein paar Höhenmeter zurücklegen. Zu beachten gilt, auf allen nicht voll gesperrten Strecken gilt, der
          Straßenverkehr Vorrang hat und man notfalls warten muss, bis ein Fahrzeug eine nicht gesperrte Straße passiert hat. Den Anweisungen der Streckenposten und der Feuerwehr ist unbedingt Folge zu leisten.
        </div>
      </PageSection>
      <a id="lauf10" aria-label="10 km Lauf"></a>
      <PageSection headline="10 km Lauf" id="sectionlauf10" subSection className="pb-8">
        <article>
          <div className="md:inline-flex">
            <div className="w-full pb-4 md:w-2/3 md:pr-4 md:pb-0">
              <h4 className="pb-4 font-bold">Profil</h4>
              <div>9,1 km Rundkurs, flach, meist geteert, geschottert - blaue Bodenmarkierung</div>
              <h4 className="py-4 font-bold">Startzeit</h4>
              <div>{START_TIME_10}</div>
              <h4 className="py-4 font-bold">Wegbeschreibung</h4>
              <div>
                Der Start erfolgt am Ende der Eichendorffstraße (auf Höhe des Wertstoffhofs) in Richtung Westen. Nach etwa 400 Metern überquert die Strecke die Barbinger Straße bei der Einfahrt Donaustauf Mitte. Danach geht es Richtung
                Festplatz und hinter der Feuerwehr vorbei über den Parkplatz weiter bis zur Bauernbrücke. Von dort läuft man auf dem Donauradweg weiter Richtung Tegernheim. Danach wird der Donauradweg überquert, und die Strecke führt über
                den Damm. An der ersten Kreuzung geht es rechts weiter. Am Ende des Weges biegt man links ab und läuft am Bachlauf entlang. Kurz vor dem Altwasser geht es noch einmal links. Nach der nächsten Biegung folgt gleich rechts eine
                weitere Abzweigung, am Ende des Weges dann links. Danach führt die Route zurück zum Damm und dem Dammweg beziehungsweise Donauradweg in Richtung Sulzbach/Demling. Auf diesem Weg geht es geradeaus bis zur Einfahrt zur
                Slipanlage. Dort läuft man wieder unter der Brücke hindurch, anschließend direkt über die Treppen hinauf und weiter bis zur Unterführung Donaustauf Ost. Dort wird die Straße unterquert, dann geht es in den Fürstengarten und
                von dort Richtung Ziel.
              </div>
              <h4 className="py-4 font-bold">Änderungen zur normalen Strecke</h4>
              <div>
                <ul className="list-inside list-disc space-y-1">
                  <li className="list-disc">Start in der Eichendorffstraße (auf Höhe des Wertstoffhofs). Vom gewohnten Start aus geht es gleich die Straße noch links runter. Ist 100m vom alten Startplatz aus entfernt.</li>
                  <li className="list-disc">
                    Nachdem die Strecke die Barbinger Straße (Einfahrt Donaustauf Mitte) überquert hat, wird es ein bisschen enger und es geht am Ende des Weges nach links entlang des Festplatzes und hinterhalb der Feuerwehr vorbei über den
                    Parkplatz auf die Bauernbrücke.
                  </li>
                  <li className="list-disc">
                    Auf dem Donauradweg vor der (Donau) Brücke Richtung in Richtung Slip-Anlage laufen und dann nach der Brücke links über die Treppen den Damm überqueren. Der Durchgang unter der Brücke direkt am Donauradweg ist gesperrt.
                  </li>
                  <li className="list-disc">
                    Die Staatsstraße wird schon bei der Unterführung Donaustauf Ost überquert. <b>Die Unterführung ist sehr eng und es gilt hier ein Überholverbot.</b>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full md:w-1/3 md:shrink-0 md:justify-center">
              <Image src="/assets/images/strecken-10km-2026.jpg" width={405} height={236} alt="Strecke 9 km Lauf" />
              <div className="my-4">
                <ButtonLink href="/assets/gpx-2026/walhallalauf-10-km.gpx" className="block w-full">
                  GPX-Datei (9km Strecke)
                </ButtonLink>
              </div>
            </div>
          </div>
        </article>
      </PageSection>
      <a id="lauf5" aria-label="5 km Lauf"></a>
      <PageSection headline="5 km Lauf" id="sectionlauf5" subSection className="page-section bg-gray-200 pb-8 sm:pb-8 dark:bg-gray-900">
        <article>
          <div className="md:inline-flex">
            <div className="w-full pb-4 md:w-2/3 md:pr-4 md:pb-0">
              <h4 className="pb-4 font-bold">Profil</h4>
              <div>5,5 km Rundkurs, flach, meist geteert - weiße Bodenmarkierung</div>
              <h4 className="py-4 font-bold">Startzeit</h4>
              <div>{START_TIME_5}</div>
              <h4 className="py-4 text-lg font-medium tracking-wide">Wegbeschreibung</h4>
              <div>
                Der Start erfolgt am Ende der Eichendorffstraße (auf Höhe des Wertstoffhofs) in Richtung Westen. Nach etwa 400 Metern überquert die Strecke die Barbinger Straße bei der Einfahrt Donaustauf Mitte. Danach geht es Richtung
                Festplatz und hinter der Feuerwehr vorbei über den Parkplatz weiter bis zur Bauernbrücke. Von dort läuft man auf dem Donauradweg in Richtung Tegernheim. Kurz darauf biegt die Strecke rechts ab, anschließend geht es zweimal
                links durch eine Schleife. Danach folgt man dem Dammweg beziehungsweise Donauradweg in entgegengesetzter Richtung, also Richtung Sulzbach/Demling. Es geht geradeaus bis zur Einfahrt zur Slipanlage. Dort führt die Route
                wieder unter der Brücke hindurch, danach gleich über die Treppen hinauf und weiter bis zur Unterführung Donaustauf Ost. Dort wird die Straße unterquert, anschließend biegt man in den Fürstengarten ein und läuft von dort zum
                Ziel.
              </div>
              <h4 className="py-4 font-bold">Änderungen zur normalen Strecke</h4>
              <div>
                <ul className="list-inside list-disc space-y-1">
                  <li className="list-disc">Start in der Eichendorffstraße (auf Höhe des Wertstoffhofs). Vom gewohnten Start aus geht es gleich die Straße noch links runter. Ist 100m vom alten Startplatz aus entfernt.</li>
                  <li className="list-disc">
                    Nachdem die Strecke die Barbinger Straße (Einfahrt Donaustauf Mitte) überquert hat, wird es ein bisschen enger und es geht am Ende des Weges nach links entlang des Festplatzes und hinterhalb der Feuerwehr vorbei über den
                    Parkplatz auf die Bauernbrücke.
                  </li>
                  <li className="list-disc">Es geht einen Weg später nach links Richtung Donauradweg / Wende.</li>
                  <li className="list-disc">
                    Auf dem Donauradweg vor der (Donau) Brücke Richtung in Richtung Slip-Anlage laufen und dann nach der Brücke links über die Treppen den Damm überqueren. Der Durchgang unter der Brücke direkt am Donauradweg ist gesperrt.
                  </li>
                  <li className="list-disc">
                    Die Staatsstraße wird schon bei der Unterführung Donaustauf Ost überquert. <b>Die Unterführung ist sehr eng und es gilt hier ein Überholverbot.</b>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full md:w-1/3 md:shrink-0 md:justify-center">
              <Image src="/assets/images/strecken-5km-2026.jpg" width={405} height={155} alt="Strecke 5 km Lauf" />
              <div className="my-4">
                <ButtonLink href="/assets/gpx-2026/walhallalauf-5-km.gpx" className="block w-full">
                  GPX-Datei (5km Strecke)
                </ButtonLink>
              </div>
            </div>
          </div>
        </article>
      </PageSection>
      <a id="waldlauf" aria-label="8 km Waldlauf und Nordic Walken"></a>
      <PageSection headline="8 km Waldlauf und Nordic Walken" id="sectionwaldlauf" subSection className="pb-8">
        <article>
          <div className="md:inline-flex">
            <div className="w-full pb-4 md:w-2/3 md:pr-4 md:pb-0">
              <h4 className="pb-4 font-bold">Profil</h4>
              <div>8,3 km Rundkurs, anspruchvoll (ca. 176 HM) geteert, geschottert und Waldweg - gelbe Bodenmarkierung</div>
              <h4 className="py-4 font-bold">Startzeit</h4>
              <div>
                Waldlauf: {START_TIME_7}, Nordic Walken: {START_TIME_NORDIC}
              </div>
              <h4 className="py-4 text-lg font-medium tracking-wide">Wegbeschreibung</h4>
              <div>
                Vom Start geht es durch den Fürstengarten und durch die Unterführung auf den Donauradweg Richtung Osten. Nach etwa 400 Metern führt die Strecke links wieder durch die Unterführung in Richtung Walhalla. Dann läufst du entlang
                der Walhalla bis Sulzbach. Dort geht es links einen kurzen Anstieg hinauf. Oben, hinter der Walhalla, biegst du links ab und kurz darauf rechts in Richtung Reiflding. In Reiflding hältst du dich rechts, läufst dann links in
                die Bergstraße und weiter in den Donaustaufer Forst. Im Wald nimmst du die erste Abzweigung rechts und danach gleich wieder die erste rechts. Sobald du den Wald verlässt, läufst du auf demselben Weg hinter der Walhalla
                wieder zurück. An der Walhalla gehst du erneut durch die Unterführung auf den Radweg und läufst Richtung Westen, also zurück nach Regensburg. Nach etwa 400 Metern gehst du an der Unterführung bei Donaustauf Ost durch, läufst
                wieder durch den Fürstengarten und kommst ins Ziel.
              </div>
              <h4 className="py-4 font-bold">Änderungen zur normalen Strecke</h4>
              <div>
                <ul className="list-inside list-disc space-y-1">
                  <li className="list-disc">
                    Vom Fürstengarten kann man nicht direkt auf den Schotterweg zur Walhalla weiterlaufen. Es muss die Staatsstraße bei der Unterführung Donaustauf Ost überquert werden.{' '}
                    <strong>Die Unterführung ist sehr eng und es gilt hier ein Überholverbot.</strong> Danach geht es ein Stück auf den Donauradweg entlang und über die Unterführung bei der Walhalla zurück auf die gewohnte Strecke.
                  </li>
                  <li className="list-disc">Statt gerade in den Wald, wird links die Bergstraße hoch gelaufen.</li>
                  <li className="list-disc">Am Ende des Weges nach rechts und wieder am Ende des Weges rechts.</li>
                  <li className="list-disc">Wenn man aus dem Wald rauskommt geht es wieder den gleichen Weg zurück zum Ziel.</li>
                </ul>
              </div>
            </div>
            <div className="w-full md:w-1/3 md:shrink-0 md:justify-center">
              <Image src="/assets/images/strecken-waldlauf-2026.jpg" width={405} height={304} alt="Strecke Waldlauf" />
              <div className="my-4">
                <ButtonLink href="/assets/gpx-2026/walhallalauf-7-km.gpx" className="block w-full">
                  GPX-Datei (Waldlauf Strecke)
                </ButtonLink>
              </div>
            </div>
          </div>
        </article>
      </PageSection>
      <a id="kinder-1000" aria-label="1000 m Kinderlauf"></a>
      <PageSection headline="1.000 m Kinderlauf" id="sectionkidsrun" subSection className="page-section bg-gray-200 pb-8 sm:pb-8 dark:bg-gray-900">
        <article>
          <h4 className="pb-4 font-bold">Profil</h4>
          <div>1.000 m Rundkurs, Park- und Wiesenwege (ab ca. 8 Jahre)</div>
          <h4 className="py-4 font-bold">Startzeit</h4>
          <div>{START_TIME_KIDS_1000}</div>
          <h4 className="py-4 text-lg font-medium tracking-wide">Wegbeschreibung</h4>
          <div className="md:inline-flex">
            <div className="w-full pb-4 md:w-2/3 md:pr-4 md:pb-0">
              <div>Der Start erfolgt in Richtung Osten im Start/Zielbereiches. Es geht einmal bis ans andere Ende des Fürstengartens und dann wieder zurück.</div>
            </div>
          </div>
        </article>
      </PageSection>
      <a id="kinder-600" aria-label="600 m Kinderlauf"></a>
      <PageSection headline="600 m Kinderlauf" id="sectionkinder600" subSection className="pb-8">
        <article>
          <h4 className="pb-4 font-bold">Profil</h4>
          <div>600 m Rundkurs, Park- und Wiesenwege (bis ca. 7 Jahre)</div>
          <h4 className="py-4 font-bold">Startzeit</h4>
          <div>{START_TIME_KIDS_600}</div>
          <h4 className="py-4 text-lg font-medium tracking-wide">Wegbeschreibung</h4>
          <div className="md:inline-flex">
            <div className="w-full pb-4 md:w-2/3 md:pr-4 md:pb-0">
              <div>Der Start erfolgt in Richtung Osten im Start/Zielbereiches. Die 600 m Strecke geht einmal um den chinesischen Turm rum.</div>
            </div>
          </div>
        </article>
      </PageSection>
      <a id="kinder-400" aria-label="400 m Kinderlauf"></a>
      <PageSection headline="400 m Kinderlauf" id="sectionbambini" subSection className="page-section bg-gray-200 pb-8 sm:pb-8 dark:bg-gray-900">
        <article>
          <h4 className="pb-4 font-bold">Profil</h4>
          <div>400 m Rundkurs, Park- und Wiesenwege (bis ca. 5 Jahre)</div>
          <h4 className="py-4 font-bold">Startzeit</h4>
          <div>{START_TIME_KIDS_400}</div>
          <h4 className="py-4 text-lg font-medium tracking-wide">Wegbeschreibung</h4>
          <div className="md:inline-flex">
            <div className="w-full pb-4 md:w-2/3 md:pr-4 md:pb-0">
              <div>Der Start erfolgt in Richtung Osten im Start/Zielbereiches. Die 400 m Strecke biegt vor dem chinesischen Turm in Richtung Ziel ab.</div>
            </div>
          </div>
        </article>
      </PageSection>
    </>
  );
}

export default Strecken;
