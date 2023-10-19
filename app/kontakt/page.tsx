import { JSX } from 'react';
import ContactCard from '@/components/Contact/ContactCard';
import ContactForm from '@/components/Contact/ContactForm';
import PageSection from '@/components/PageSection';

function Contact(): JSX.Element {
  return (
    <PageSection headline="Kontakt" id="kontakt" className="page-section">
      <div>Hast du Fragen rund um den Walhallalauf?</div>
      <div className="grid grid-cols-1 gap-6 my-6 sm:my-8 sm:grid-cols-2 lg:grid-cols-4 auto-rows-fr">
        <div>
          <ContactCard name="Ronny Krammer" position="1. Abteilungsleiter Ausdauer" imageSrc="/assets/images/contact-krammer.jpg" email="1.ausdauer@sv-donaustauf.de" emailHref="/api/mailto-1aus/" />
        </div>
        <div>
          <ContactCard name="Andreas Hintermeier" position="2. Abteilungsleiter Ausdauer" imageSrc="/assets/images/contact-hintermeier.jpg" email="2.ausdauer@sv-donaustauf.de" emailHref="/api/mailto-2aus/" />
        </div>
        <div className="sm:col-span-2 lg:col-span-2">
          <ContactForm url="/api/send-email/" />
        </div>
      </div>
    </PageSection>
  );
}

export default Contact;
