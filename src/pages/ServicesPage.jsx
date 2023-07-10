import { Fragment } from 'react';
import { Layout } from '../layout/Layout';

// components
import { HeaderSection } from '../component/ServicesPageComponents/HeaderSection';
import { ServicesSection } from '../component/ServicesPageComponents/ServicesSection';

const ServicesPage = () => {
  return (
    <Fragment>
      <Layout>
        <HeaderSection />
        <ServicesSection />
      </Layout>
    </Fragment>
  );
};

export default ServicesPage;
