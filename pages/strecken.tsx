/* eslint-disable @next/next/no-img-element */
import HeaderImage from '@/components/Header/HeaderImage';
import Layout from '@/components/Layout';
import { siteTitle } from '@/components/Layout/Layout';
import PageSection from '@/components/PageSection';
import styles from '@/styles/index.module.css';
import { HEADER_LINE_1, HEADER_LINE_2 } from 'lib/constants';
import { FunctionComponent } from 'react';

export const pageTitle = 'Strecken';

const Strecken: FunctionComponent = () => {
  return (
    <Layout title={pageTitle + ' - ' + siteTitle}>
      <HeaderImage text1={HEADER_LINE_1} text2={HEADER_LINE_2} imageClass={styles.headerimage} />
      <PageSection headline={pageTitle} id="strecken">
        <div className="mb-4">
          Mit unseren Strecken decken wir alle Alters- und Leistungsstufen ab. Beim Walhallalauf geht es auch darum, etwas von Donaustauf zu erleben. Dein Weg führt dich zunächst durch den historischen Markt. Entlang der Donau siehst du
          schon von Weitem unsere Burg und natürlich auch die Walhalla. Vorbei an der historischen St. Salvator Kirche und dem chinesischen Turm geht es zum Schlussspurt. Im Ziel lädt der Fürstengarten zum Verweilen ein. Dort laufen auch
          die Kinder mit unserem Maskottchen um die Wette. Als Alternative zur Donau geht es auch gerne in den Wald und dort du darfst ein paar Höhenmeter zurücklegen.
        </div>
      </PageSection>
      <a id="lauf10"></a>
      <PageSection headline="10 km Lauf" id="sectionlauf10" subSection className="pb-8">
        <h4 className="font-bold pb-4">Profil</h4>
        <div>10 km Rundkurs, flach, meist geteert, geschottert</div>

        <h4 className="font-bold py-4">Wegbeschreibung</h4>
        <div className="md:inline-flex">
          <div className="w-full pb-4 md:w-2/3 md:pr-4 md:pb-0">
            <div>
              Der Start erfolgt Richtung Westen durch den historischen Ortskern Donaustaufs bis Donaustauf West Bauernbrücke. Erst links abbiegen, die Bauernbrücke überqueren und rechts in Richtung Tegernheim weiter. Kurz darauf rechts
              einbiegen, danach links weiter. Nun den Donauradweg überqueren und über den Damm drüber. An der ersten Kreuzung rechts weiter und dann am Ende des Weges nach links dem Bachlauf entlang. Kurz vor dem Altwasser wieder nach
              links. Nach der nächsten Biegung geht es gleich rechts und am Ende des Weges links. Nach dem Damm Richtung (Sulzbach / Demling) dem Dammweg/Donauradweg folgen Nun geht es gerade bis zur Unterführung Walhalla. Hier geht links
              unter der Unterführung durch und nach 20m wieder links unter der Walhalla entlang. Bei Donaustauf Ost die Straße überqueren, im Fürstengarten einbiegen und Richtung Ziel laufen.
            </div>
          </div>
          <div className="w-full md:w-1/3 md:flex-shrink-0 md:justify-center">
            <img src="/assets/images/strecken-10km.jpg" alt="Strecke 10 km Lauf" />
            <div className="my-4">
              <a
                href="/assets/gpx/walhallalauf-10-km.gpx"
                className="button-link w-full block bg-transparent text-secondary dark:text-secondary-dark text-sm uppercase tracking-wider py-2 px-4 border border-secondary rounded transition ease-in-out duration-150 hover:bg-secondary hover:bg-opacity-15 dark:border-secondary-dark dark:hover:bg-secondary-dark"
              >
                GPX-Datei (10km Strecke)
              </a>
            </div>
          </div>
        </div>
      </PageSection>
      <a id="lauf5"></a>
      <PageSection headline="5 km Lauf" id="sectionlauf5" subSection className="bg-gray-200 dark:bg-gray-900 sm:pb-8 page-section pb-8">
        <h4 className="font-bold pb-4">Profil</h4>
        <div>5,4 km Rundkurs, flach, meist geteert</div>
        <h4 className="text-lg tracking-wide font-medium py-4">Wegbeschreibung</h4>
        <div className="md:inline-flex">
          <div className="w-full pb-4 md:w-2/3 md:pr-4 md:pb-0">
            <div>
              Der Start erfolgt Richtung Westen durch den historischen Ortskern Donaustaufs bis Donaustauf West Bauernbrücke. Erst links abbiegen, die Bauernbrücke überqueren und rechts in Richtung Tegernheim weiter. Kurz darauf rechts
              einbiegen, dann zweimal links (Schleife) und in entgegengesetzter Richtung (Sulzbach / Demling) dem Dammweg/Donauradweg folgen. Nun geht es gerade bis zur Unterführung Walhalla. Hier geht links unter der Unterführung durch und
              nach 20m wieder links unter der Walhalla entlang. Bei Donaustauf Ost die Straße überqueren, im Fürstengarten einbiegen und Richtung Ziel laufen.
            </div>
          </div>
          <div className="w-full md:w-1/3 md:flex-shrink-0 md:justify-center">
            <img src="/assets/images/strecken-5km.jpg" alt="Strecke 5 km Lauf" />
            <div className="my-4">
              <a
                href="/assets/gpx/walhallalauf-5-km.gpx"
                className="button-link w-full block bg-transparent text-secondary dark:text-secondary-dark text-sm uppercase tracking-wider py-2 px-4 border border-secondary rounded transition ease-in-out duration-150 hover:bg-secondary hover:bg-opacity-15 dark:border-secondary-dark dark:hover:bg-secondary-dark"
              >
                GPX-Datei (5km Strecke)
              </a>
            </div>
          </div>
        </div>
      </PageSection>
      <a id="waldlauf"></a>
      <PageSection headline="7,1 km Waldlauf und Nordic Walken" id="sectionwaldlauf" subSection className="pb-8">
        <h4 className="font-bold pb-4">Profil</h4>
        <div>7,1 km Rundkurs, anspruchvoll (ca. 160 HM) geteert, geschottert und Waldweg</div>
        <h4 className="text-lg tracking-wide font-medium py-4">Wegbeschreibung</h4>
        <div className="md:inline-flex">
          <div className="w-full pb-4 md:w-2/3 md:pr-4 md:pb-0">
            <div>
              Vom Start weg geht es in Richtung Osten durch den Fürstengarten und entlang der Walhalla. Bei Sulzbach nach links einen kleinen Anstieg hinauf. Oben, hinter der Walhalla angekommen, links abbiegen und kurz darauf rechts
              Richtung Reiflding weiter. In Reiflding rechts abbiegen von dort geht es in den Donaustaufer Forst. Im Wald die erste Abzweigung nehmen. Entlang der südlichen Hänge schlängelt sich der Weg erst aufwärts dann abwärts bis zur
              Jahnstraße. Dort am ersten Wohnhaus Linksabbiegen entlang des „alten Baches“. Danach gerade aus der Fatimastraße folgen und am Ende rechts abbiegen. Nochmals rechts in die Walhallastraße abbiegen bis Ecke Wörther Straße /
              Ludwigstraße. Dort die Wörther Straße überqueren und im Fürstengarten ins Ziel Walken.
            </div>
          </div>
          <div className="w-full md:w-1/3 md:flex-shrink-0 md:justify-center">
            <img src="/assets/images/strecken-waldlauf.jpg" alt="Strecke Waldlauf" />
            <div className="my-4">
              <a
                href="/assets/gpx/walhallalauf-7-km.gpx"
                className="button-link w-full block bg-transparent text-secondary dark:text-secondary-dark text-sm uppercase tracking-wider py-2 px-4 border border-secondary rounded transition ease-in-out duration-150 hover:bg-secondary hover:bg-opacity-15 dark:border-secondary-dark dark:hover:bg-secondary-dark"
              >
                GPX-Datei (Waldlauf Strecke)
              </a>
            </div>
          </div>
        </div>
      </PageSection>
      <a id="kidsrun"></a>
      <PageSection headline="1,6 km Kid's Run" id="sectionkidsrun" subSection className="bg-gray-200 dark:bg-gray-900 sm:pb-8 page-section pb-8">
        <h4 className="font-bold pb-4">Profil</h4>
        <div>1,6 km Rundkurs, 3 Runden, geschottert (ab 7 Jahre)</div>
        <h4 className="text-lg tracking-wide font-medium py-4">Wegbeschreibung</h4>
        <div className="md:inline-flex">
          <div className="w-full pb-4 md:w-2/3 md:pr-4 md:pb-0">
            <div>Der Start erfolgt in Richtung Osten etwas unterhalb der Zielbereiches. Am chinesischen Turm wird zweimal hintereinander links abgebogen. Es werden drei Runden gelaufen, bevor es ins Ziel geht.</div>
          </div>
          <div className="w-full md:w-1/3 md:flex-shrink-0 md:justify-center">
            <img src="/assets/images/strecken-kidsrun.jpg" alt="Strecke Kid's Run" />
            <div className="my-4">
              <a
                href="/assets/gpx/walhallalauf-kidsrun.gpx"
                className="button-link w-full block bg-transparent text-secondary dark:text-secondary-dark text-sm uppercase tracking-wider py-2 px-4 border border-secondary rounded transition ease-in-out duration-150 hover:bg-secondary hover:bg-opacity-15 dark:border-secondary-dark dark:hover:bg-secondary-dark"
              >
                GPX-Datei (Kid&apos;s Run Strecke)
              </a>
            </div>
          </div>
        </div>
      </PageSection>
      <a id="bambini"></a>
      <PageSection headline="400 m Bambinilauf" id="sectionbambini" subSection className="pb-8">
        <h4 className="font-bold pb-4">Profil</h4>
        <div>400 m Strecke, geschottert (bis 7 Jahre)</div>
        <h4 className="text-lg tracking-wide font-medium py-4">Wegbeschreibung</h4>
        <div className="md:inline-flex">
          <div className="w-full pb-4 md:w-2/3 md:pr-4 md:pb-0">
            <div>Der Start erfolgt in Richtung Osten etwas unterhalb der Zielbereiches. Am chinesischen Turm wird zweimal hintereinander links abgebogen, bevor es ins Ziel geht.</div>
          </div>
          <div className="w-full md:w-1/3 md:flex-shrink-0 md:justify-center">
            <img src="/assets/images/strecken-bambini.jpg" alt="Strecke Bambinilauf" />
          </div>
        </div>
      </PageSection>
    </Layout>
  );
};

export default Strecken;
