import { Fragment } from 'react';
import { Layout } from '../layout/Layout';

// components
import { HeaderSection } from '../component/ContactPageComponents/HeaderSection';
import { PhoneAndEmailSection } from '../component/ContactPageComponents/PhoneAndEmailSection';
import { ContactSection } from '../component/ContactPageComponents/ContactSection';

const ContactUsPage = () => {
  return (
    <Fragment>
      <Layout>
        <HeaderSection />
        <PhoneAndEmailSection />
        <ContactSection />
      </Layout>
    </Fragment>
  );
};

export default ContactUsPage;
