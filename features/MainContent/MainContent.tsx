'use client';

import ContactForm from '@/components/Contact/ContactForm';
import ImageButtonLink from '@/components/ImageButtonLink';
import SponsorGallery from '@/components/SponsorGallery';
import { SponsorData } from '@/data/SponsorData';
import { ContactCard, MoreLink, PageLink, PageSection } from '@salzpate/react-ui';
import Image from 'next/image';
import { JSX } from 'react';

function MainContent(): JSX.Element {
  return (
    <>
      <PageSection headline="Strecken" id="strecken" subSection className="page-section strecken-index-image pb-6 sm:pb-8">
        <article>
          <div>Mit unseren Strecken decken wir alle Alters- und Leistungsstufen ab. Beim Walhallalauf geht es auch darum, etwas von Donaustauf zu erleben.</div>
          <div className="-m-2 my-6 flex flex-wrap sm:my-8">
            <div className="w-full p-2 md:w-1/2 lg:w-1/3">
              <ImageButtonLink headline="10 km Lauf" href="/strecken/#lauf10" imgSrc="/assets/images/index-10km.jpg">
                10 km Rundkurs, flach, meist geteert, geschottert
              </ImageButtonLink>
            </div>
            <div className="w-full p-2 md:w-1/2 lg:w-1/3">
              <ImageButtonLink headline="5 km Lauf" href="/strecken/#lauf5" imgSrc="/assets/images/index-5km.jpg">
                5,4 km Rundkurs, flach, meist geteert
              </ImageButtonLink>
            </div>
            <div className="w-full p-2 md:w-1/2 lg:w-1/3">
              <ImageButtonLink headline="Waldlauf" href="/strecken/#waldlauf" imgSrc="/assets/images/index-waldlauf.jpg">
                7,1 km Rundkurs, anspruchsvoll (ca. 160 HM) geteert, geschottert und Waldweg
              </ImageButtonLink>
            </div>
            <div className="w-full p-2 md:w-1/2 lg:w-1/3">
              <ImageButtonLink headline="Nordic Walken" href="/strecken/#waldlauf" imgSrc="/assets/images/index-walken.jpg">
                7,1 km Rundkurs, anspruchsvoll (ca. 160 HM) geteert, geschottert und Waldweg
              </ImageButtonLink>
            </div>
            <div className="w-full p-2 md:w-1/2 lg:w-1/3">
              <ImageButtonLink headline="1,2 km Kid's Run" href="/strecken/#kidsrun" imgSrc="/assets/images/index-kidsrun.jpg">
                1,2 km Rundkurs, 2 Runden, geschottert (ab 7 Jahre)
              </ImageButtonLink>
            </div>
            <div className="w-full p-2 md:w-1/2 lg:w-1/3">
              <ImageButtonLink headline="400 m Bambinilauf" href="/strecken/#bambini" imgSrc="/assets/images/index-bambini.jpg">
                400 m Strecke, geschottert (bis 7 Jahre)
              </ImageButtonLink>
            </div>
          </div>
        </article>
      </PageSection>

      <PageSection headline="Informationen" id="informationen" subSection className="page-section pb-6 sm:pb-8">
        <article>
          <div className="md:inline-flex">
            <div className="w-full pb-4 md:w-2/3 md:pr-4 md:pb-0">
              <MoreLink href="/informationen/">
                <p>
                  Start- und Zielbereich der Veranstaltung ist auf dem Parkplatz des Fürstengarten (gegenüber Maxstraße 2) in Donaustauf. Alles wichtige zur Laufveranstaltung steht in der{' '}
                  <PageLink href="/ausschreibung/">Ausschreibung</PageLink>.
                </p>
                <br></br>
                <p>Weitere Themen, wie Startzeiten und Startrichtung, Anreise und Parken, Nachmeldung und Startunterlagen, Kinder, Hunde oder Ergebnislisten befinden sich unter nachfolgenden Link:</p>
              </MoreLink>
            </div>
            <div className="w-full md:w-1/3 md:shrink-0 md:justify-center">
              <Image src="/assets/images/index-info.jpg" width={405} height={227} alt="Ziel" />
            </div>
          </div>
        </article>
      </PageSection>

      <PageSection headline="Benefiz" id="benefiz" subSection className="page-section bg-gray-200 pb-6 sm:pb-8 dark:bg-gray-900">
        <article>
          <MoreLink href="/benefiz/">
            <p>
              Seit dem ersten Walhallalauf ist es unser Anspruch &quot;Kinder und Jugendliche für Sport zu begeistern&quot;, weshalb auch die Teilnahme am Baminilauf und am Kid&apos;s Run völlig kostenlos für die Teilnehmer ist. Seit 2015
              ist es uns zudem wichtig, regionale Organisationen bei der Bewegungs- und Sportförderung von Kindern und Jugendlichen im Rahmen unserer Benefizaktionen zu unterstützen.
            </p>
            <br></br>
            <p>
              Im Jahr 2025 unterstützen wir mit dem Lauf die <strong>Traumzeit e.V.</strong> - Herzenswunsch-Aktionen für krebskranke Kinder.
            </p>
          </MoreLink>
        </article>
      </PageSection>

      <PageSection headline="Sponsoren" id="sponsoren" subSection className="page-section pb-6 sm:pb-8">
        <p>Wir sagen vielen Dank für die Unterstützung an unsere Partner und Sponsoren</p>
        <SponsorGallery groups={SponsorData} />
      </PageSection>

      <PageSection headline="Kontakt" id="kontakt" subSection className="page-section bg-gray-200 pb-6 sm:pb-8 dark:bg-gray-900">
        <article>
          <div>Hast du Fragen rund um den Walhallalauf?</div>
          <div className="my-6 grid grid-cols-1 gap-6 sm:my-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <ContactCard name="Ronny Krammer" position="1. Abteilungsleiter Ausdauer" imageSrc="/assets/images/contact-krammer.jpg" email="1.ausdauer@sv-donaustauf.de" emailHref="/api/mailto-1aus/" className="bg-white dark:bg-black" />
            </div>
            <div>
              <ContactCard
                name="Andreas Hintermeier"
                position="2. Abteilungsleiter Ausdauer"
                imageSrc="/assets/images/contact-hintermeier.jpg"
                email="2.ausdauer@sv-donaustauf.de"
                emailHref="/api/mailto-2aus/"
                className="bg-white dark:bg-black"
              />
            </div>
            <div className="sm:col-span-2 lg:col-span-2">
              <ContactForm url="/api/send-email/" style="white" />
            </div>
          </div>
        </article>
      </PageSection>
    </>
  );
}

export default MainContent;
