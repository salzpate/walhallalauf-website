import { JSX } from 'react';
import PageSection from '@/components/PageSection';
import Image from 'next/image';

function Benefiz(): JSX.Element {
  return (
    <>
      <PageSection headline="Benefiz" id="benefiz">
        <div className="mb-4">
          Seit dem ersten Walhallalauf ist es unser Anspruch &quot;Kinder und Jugendliche für Sport zu begeistern&quot;, weshalb auch die Teilnahme am Baminilauf und am Kid&apos;s Run völlig kostenlos für die Teilnehmer ist. Seit 2015 ist
          es uns zudem wichtig, regionale Organisationen bei der Bewegungs- und Sportförderung von Kindern und Jugendlichen im Rahmen unserer Benefizaktionen zu unterstützen.
        </div>
      </PageSection>
      <PageSection subSection headline="Benefizaktion 2023" id="benefiz2023" className="pb-6 sm:pb-8 page-section">
        <p>
          Seit 2022 mit dem Lauf den <strong>Verein für helfende Hunde e.V.</strong>
        </p>
        <br></br>
        <p>
          Der Verein für helfende Hunde e.V., ist ein gemeinnütziger Verein mit Sitz in Regenstauf. Die Mitglieder sind ein bunter Mix aus verschiedenen Berufsgruppen, mit und ohne Hundeerfahrung. Alle verbindet der Wunsch, hilfebedürftige
          Menschen zu unterstützen, den Inklusionsgedanken zu fördern und die Rahmenbedingungen für Assistenzhunde in unserer Gesellschaft zu verbessern. Die Zutrittskampagne „Assistenzhunde willkommen“ wird von der Stadt Regensburg und dem
          Landkreis Regensburg unterstützt.
        </p>
        <br></br>
        <p>
          Der Verein unterstützt finanziell und beratend die Bereiche Assistenzhunde, tiergestützte soziale/therapeutische Arbeit mit Hunden und setzen uns für Barrierefreiheit und die Teilnahme am sozialen Leben für beeinträchtigte
          Menschen ein.
        </p>
        <br></br>
        <p>
          Der Assistenzhund als medizinisches Hilfsmittel ist in Deutschland noch nicht anerkannt. Dabei kann ein Hund viel mehr als nur ein Haustier sein. Menschen mit körperlichen oder seelischen Beeinträchtigungen benötigen oftmals Hilfe
          im Leben. Für diesen Bedarf kann ein Assistenzhund eine große Stütze sein. Ebenso ist die positive Wirkung eines ausgebildeten Besuchshundes/Therapiebegleithundes in sozialen und therapeutischen Einrichtungen bekannt.
        </p>
        <br></br>
        <p>
          Mithilfe unserer Sponsoren, dem Armin Wolf Laufteam und unserer Teilnehmer konnten wir im Jahr 2022 wieder unsere Kinderläufe kostenlos anbieten und dem Verein für helfende Hunde e.V. eine Spendensumme von 3.000,-- EUR
          überreichen. Vielen Dank an alle, die dies ermöglicht haben. An dieser Stelle wollten wir uns auch nochmals beim Verein für helfende Hunde e.V. bedanken, welcher sich beim Lauf mit eingebracht hat.
        </p>
        <br></br>
        <p>
          <Image src="/assets/images/spende-rote-pfote.jpg" width={640} height={480} alt="Spendenübergabe" />
        </p>
        <br></br>
        <p className="page-section">
          Weitere Informationen finden Sie auf der Homepage des Vereins für helfende Hunde e.V.:<br></br>
          <a href="https://www.rote-pfote.de" target="_blank" rel="noreferrer">
            https://www.rote-pfote.de
          </a>
        </p>
      </PageSection>
    </>
  );
}

export default Benefiz;
