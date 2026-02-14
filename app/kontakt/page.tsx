'use client';

import { JSX } from 'react';
import ContactForm from '@/components/Contact/ContactForm';
import { ContactCard, PageSection } from '@salzpate/react-ui';

function Contact(): JSX.Element {
  return (
    <PageSection headline="Kontakt" id="kontakt" className="page-section bg-[url(/assets/images/bg-svd-white.jpg)] bg-cover bg-scroll bg-center bg-no-repeat dark:bg-[url(/assets/images/bg-svd-black.jpg)]">
      <div>Hast du Fragen rund um den Walhallalauf?</div>
      <div className="my-6 grid auto-rows-fr grid-cols-1 gap-6 sm:my-8 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <ContactCard
            name="Ronny Krammer"
            position="1. Abteilungsleiter Ausdauer"
            imageSrc="/assets/images/contact-krammer.jpg"
            email="1.ausdauer@sv-donaustauf.de"
            emailHref="/api/mailto-1aus/"
            className="supports-backdrop-filter:bg-gray-400/20 dark:supports-backdrop-filter:bg-gray-700/30"
          />
        </div>
        <div>
          <ContactCard
            name="Jean-Marc Schwarz"
            position="2. Abteilungsleiter Ausdauer"
            imageSrc="/assets/images/contact-folgt.png"
            email="2.ausdauer@sv-donaustauf.de"
            emailHref="/api/mailto-2aus/"
            className="supports-backdrop-filter:bg-gray-400/20 dark:supports-backdrop-filter:bg-gray-700/30"
          />
        </div>
        <div className="sm:col-span-2 lg:col-span-2">
          <ContactForm url="/api/send-email/" />
        </div>
      </div>
    </PageSection>
  );
}

export default Contact;
