'use client';

import { JSX } from 'react';
import ContactForm from '@/components/Contact/ContactForm';
import { ContactCard, PageSection } from '@salzpate/react-ui';

function Contact(): JSX.Element {
  return (
    <PageSection headline="Kontakt" id="kontakt" className="page-section">
      <div>Hast du Fragen rund um den Walhallalauf?</div>
      <div className="my-6 grid auto-rows-fr grid-cols-1 gap-6 sm:my-8 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <ContactCard name="Ronny Krammer" position="1. Abteilungsleiter Ausdauer" imageSrc="/assets/images/contact-krammer.jpg" email="1.ausdauer@sv-donaustauf.de" emailHref="/api/mailto-1aus/" />
        </div>
        <div>
          <ContactCard name="Andreas Hintermeier" position="2. Jugendwart Ausdauer" imageSrc="/assets/images/contact-hintermeier.jpg" email="1.ausdauer@sv-donaustauf.de" emailHref="/api/mailto-1aus/" />
        </div>
        <div className="sm:col-span-2 lg:col-span-2">
          <ContactForm url="/api/send-email/" />
        </div>
      </div>
    </PageSection>
  );
}

export default Contact;
