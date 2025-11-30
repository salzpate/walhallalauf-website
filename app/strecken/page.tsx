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
          <h4 className="pb-4 font-bold">Profil</h4>
          <div>10 km Rundkurs, flach, meist geteert, geschottert - blaue Bodenmarkierung</div>
          <h4 className="py-4 font-bold">Startzeit</h4>
          <div>{START_TIME_10}</div>
          <h4 className="py-4 font-bold">Wegbeschreibung</h4>
          <div className="md:inline-flex">
            <div className="w-full pb-4 md:w-2/3 md:pr-4 md:pb-0">
              <div>
                Der Start erfolgt Richtung Westen durch den historischen Ortskern Donaustaufs bis Donaustauf West Bauernbrücke. Erst links abbiegen, die Bauernbrücke überqueren und rechts in Richtung Tegernheim weiter. Kurz darauf rechts
                einbiegen, danach links weiter. Nun den Donauradweg überqueren und über den Damm drüber. An der ersten Kreuzung rechts weiter und dann am Ende des Weges nach links dem Bachlauf entlang. Kurz vor dem Altwasser wieder nach
                links. Nach der nächsten Biegung geht es gleich rechts und am Ende des Weges links. Nach dem Damm Richtung (Sulzbach / Demling) dem Dammweg/Donauradweg folgen Nun geht es gerade bis zur Unterführung Walhalla. Hier geht links
                unter der Unterführung durch und nach 20m wieder links unter der Walhalla entlang. Bei Donaustauf Ost die Straße überqueren, im Fürstengarten einbiegen und Richtung Ziel laufen.
              </div>
            </div>
            <div className="w-full md:w-1/3 md:shrink-0 md:justify-center">
              <Image src="/assets/images/strecken-10km.jpg" width={405} height={236} alt="Strecke 10 km Lauf" />
              <div className="my-4">
                <ButtonLink href="/assets/gpx/walhallalauf-10-km.gpx" className="block w-full">
                  GPX-Datei (10km Strecke)
                </ButtonLink>
              </div>
            </div>
          </div>
        </article>
      </PageSection>
      <a id="lauf5" aria-label="5 km Lauf"></a>
      <PageSection headline="5 km Lauf" id="sectionlauf5" subSection className="page-section bg-gray-200 pb-8 sm:pb-8 dark:bg-gray-900">
        <article>
          <h4 className="pb-4 font-bold">Profil</h4>
          <div>5,4 km Rundkurs, flach, meist geteert - weiße Bodenmarkierung</div>
          <h4 className="py-4 font-bold">Startzeit</h4>
          <div>{START_TIME_5}</div>
          <h4 className="py-4 text-lg font-medium tracking-wide">Wegbeschreibung</h4>
          <div className="md:inline-flex">
            <div className="w-full pb-4 md:w-2/3 md:pr-4 md:pb-0">
              <div>
                Der Start erfolgt Richtung Westen durch den historischen Ortskern Donaustaufs bis Donaustauf West Bauernbrücke. Erst links abbiegen, die Bauernbrücke überqueren und rechts in Richtung Tegernheim weiter. Kurz darauf rechts
                einbiegen, dann zweimal links (Schleife) und in entgegengesetzter Richtung (Sulzbach / Demling) dem Dammweg/Donauradweg folgen. Nun geht es gerade bis zur Unterführung Walhalla. Hier geht links unter der Unterführung durch
                und nach 20m wieder links unter der Walhalla entlang. Bei Donaustauf Ost die Straße überqueren, im Fürstengarten einbiegen und Richtung Ziel laufen.
              </div>
            </div>
            <div className="w-full md:w-1/3 md:shrink-0 md:justify-center">
              <Image src="/assets/images/strecken-5km.jpg" width={405} height={155} alt="Strecke 5 km Lauf" />
              <div className="my-4">
                <ButtonLink href="/assets/gpx/walhallalauf-5-km.gpx" className="block w-full">
                  GPX-Datei (5km Strecke)
                </ButtonLink>
              </div>
            </div>
          </div>
        </article>
      </PageSection>
      <a id="waldlauf" aria-label="7,1 km Waldlauf und Nordic Walken"></a>
      <PageSection headline="7,1 km Waldlauf und Nordic Walken" id="sectionwaldlauf" subSection className="pb-8">
        <article>
          <h4 className="pb-4 font-bold">Profil</h4>
          <div>7,1 km Rundkurs, anspruchvoll (ca. 160 HM) geteert, geschottert und Waldweg - gelbe Bodenmarkierung</div>
          <h4 className="py-4 font-bold">Startzeit</h4>
          <div>
            Waldlauf: {START_TIME_7}, Nordic Walken: {START_TIME_NORDIC}
          </div>
          <h4 className="py-4 text-lg font-medium tracking-wide">Wegbeschreibung</h4>
          <div className="md:inline-flex">
            <div className="w-full pb-4 md:w-2/3 md:pr-4 md:pb-0">
              <div>
                Vom Start weg geht es in Richtung Osten durch den Fürstengarten und entlang der Walhalla. Bei Sulzbach nach links einen kleinen Anstieg hinauf. Oben, hinter der Walhalla angekommen, links abbiegen und kurz darauf rechts
                Richtung Reiflding weiter. In Reiflding rechts abbiegen von dort geht es in den Donaustaufer Forst. Im Wald die erste Abzweigung nehmen. Entlang der südlichen Hänge schlängelt sich der Weg erst aufwärts dann abwärts bis zur
                Jahnstraße. Dort am ersten Wohnhaus Linksabbiegen entlang des „alten Baches“. Danach gerade aus der Fatimastraße folgen und am Ende rechts abbiegen. Nochmals rechts in die Walhallastraße abbiegen bis Ecke Wörther Straße /
                Ludwigstraße. Dort die Wörther Straße überqueren und im Fürstengarten ins Ziel Walken.
              </div>
            </div>
            <div className="w-full md:w-1/3 md:shrink-0 md:justify-center">
              <Image src="/assets/images/strecken-waldlauf-2022.jpg" width={405} height={304} alt="Strecke Waldlauf" />
              <div className="my-4">
                <ButtonLink href="/assets/gpx/walhallalauf-7-km.gpx" className="block w-full">
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
          <div>1.000 m Rundkurs, 1 Runde, Park- und Wiesenwege (ab ca. 8 Jahre)</div>
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
          <div>1,2 km Rundkurs, 2 Runden, Park- und Wiesenwege (bis ca. 7 Jahre)</div>
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
          <div>400 m Strecke, Park- und Wiesenwege (bis ca. 5 Jahre)</div>
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
