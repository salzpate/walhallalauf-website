import ContactCard from '@/components/Contact/ContactCard';
import ContactForm from '@/components/Contact/ContactForm';
import HeaderImage from '@/components/Header/HeaderImage';
import Layout from '@/components/Layout';
import { siteTitle } from '@/components/Layout/Layout';
import PageSection from '@/components/PageSection';
import styles from '@/styles/kontakt.module.css';
import { HEADER_LINE_1, HEADER_LINE_2 } from 'lib/constants';
import { FC } from 'react';

export const pageTitle = 'Kontakt';

const Contact: FC = () => {
  return (
    <Layout title={pageTitle + ' - ' + siteTitle} activeMenu="kontakt">
      <HeaderImage text1={HEADER_LINE_1} text2={HEADER_LINE_2} imageClass={styles.headerimage} />
      <PageSection headline="Kontakt" id="kontakt">
        <div>Hast du Fragen rund um den Walhallalauf?</div>
        <div className="grid grid-cols-1 gap-6 my-6 sm:my-8 sm:grid-cols-2 lg:grid-cols-4 auto-rows-fr">
          <div>
            <ContactCard name="Ronny Krammer" position="Abteilungsleiter Ausdauer" imageSrc="/assets/images/contact-krammer.jpg" email="1.ausdauer@sv-donaustauf.de" emailHref="/api/mailto-1aus/" />
          </div>
          <div>
            <ContactCard name="Eduard Zimmermann" position="2. Vorstand" imageSrc="/assets/images/contact-zimmermann-618c567e52.jpg" email="2.ausdauer@sv-donaustauf.de" emailHref="/api/mailto-2aus/" />
          </div>
          <div className="sm:col-span-2 lg:col-span-2">
            <ContactForm url="/api/send-email/" />
          </div>
        </div>
      </PageSection>
    </Layout>
  );
};

export default Contact;
