import { JSX } from 'react';
import HeaderImage from '@/components/Header/HeaderImage';
import InfoArticle from '@/components/InfoArticle';
import HeaderMainLayout from '@/components/HeaderMainLayout/HeaderMainLayout';
import PageSection from '@/components/PageSection';
import infoService from '@/lib/InfoService';
import { HEADER_LINE_1, HEADER_LINE_2 } from '@/lib/constants';
import { TimingButtons } from '@/features/TimingButtons';
import MainContent from '@/features/MainContent';
import { PortableText, PortableTextComponents } from 'next-sanity';
import { INFO_QUERYResult } from '@/types/sanityTypes';
import Link from 'next/link';

async function getData(): Promise<INFO_QUERYResult> {
  return infoService.getInfos();
}

const portableTextComponents: PortableTextComponents = {
  marks: {
    link: ({ value, children }) => {
      const href = value?.href;
      const isExternal = href?.startsWith('http://') || href?.startsWith('https://');

      if (isExternal) {
        return (
          <a href={href} target="_blank" rel="noopener noreferrer" className="text-link hover:underline hover:decoration-dotted dark:text-link-dark dark:hover:text-link-dark-hover">
            {children}
          </a>
        );
      }

      return (
        <Link href={href} className="text-link hover:underline hover:decoration-dotted dark:text-link-dark dark:hover:text-link-dark-hover">
          {children}
        </Link>
      );
    },
    code: ({ children }) => <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-sm text-red-600 dark:bg-gray-800 dark:text-red-400">{children}</code>,
  },
  block: {
    h1: ({ children }) => <h1 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">{children}</h1>,
    h2: ({ children }) => <h2 className="mb-4 text-xl font-bold tracking-tight sm:text-2xl lg:text-3xl">{children}</h2>,
    h3: ({ children }) => <h3 className="mb-4 text-lg font-bold tracking-tight sm:text-xl lg:text-2xl">{children}</h3>,
    h4: ({ children }) => <h4 className="text-md mb-4 font-bold tracking-tight sm:text-lg lg:text-xl">{children}</h4>,
    h5: ({ children }) => <h5 className="sm:text-md mb-4 text-sm font-bold tracking-tight lg:text-lg">{children}</h5>,
    h6: ({ children }) => <h6 className="lg:text-md mb-4 text-xs font-bold tracking-tight sm:text-sm">{children}</h6>,
    blockquote: ({ children }) => <blockquote className="my-4 border-l-4 border-gray-600 py-2 pl-4 text-gray-700 italic dark:border-gray-300 dark:text-gray-400">{children}</blockquote>,
    code: ({ children }) => (
      <pre className="my-4 overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100 dark:bg-gray-950">
        <code className="font-mono">{children}</code>
      </pre>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="list-inside list-disc space-y-1">{children}</ul>,
    number: ({ children }) => <ol className="list-inside list-decimal space-y-1">{children}</ol>,
  },
};

async function Home(): Promise<JSX.Element> {
  const infos = await getData();

  return (
    <HeaderMainLayout>
      <HeaderImage text1={HEADER_LINE_1} text2={HEADER_LINE_2} imageClass="bg-[url('/assets/images/head-index.jpg')]" />
      <section id="fuss" className="page-section">
        <div className="mx-auto max-w-7xl py-4 text-center text-2xl font-bold tracking-wide text-gray-900 sm:py-6 sm:text-3xl lg:px-8 lg:py-8 lg:text-4xl dark:text-gray-300">Donaustauf erleben - Der Lauf am Fuße der Walhalla</div>
      </section>
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
        <p>Trotz aller Änderungen wünschen wir euch viel Spaß und Erfolg beim Lauf und freuen uns auf euer Kommen. Wie bisher immer beim Walhallalauf wird bisher bestes Laufwetter vorausgesagt.</p>
      </PageSection>
      <PageSection headline="Aktuelles" id="aktuelles" subSection className="page-section pb-4 sm:pb-8">
        {infos?.map(info => (
          <InfoArticle key={info._id} headline={info.title || ''}>
            {Array.isArray(info.message) && (
              <div className="index-page-article">
                <PortableText value={info.message} components={portableTextComponents} />
              </div>
            )}
          </InfoArticle>
        ))}
        <div className="pb-4">
          <TimingButtons />
        </div>
      </PageSection>
      <MainContent />
    </HeaderMainLayout>
  );
}

export default Home;
