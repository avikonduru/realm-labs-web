import { Fragment } from 'react';
import { Layout } from '../layout/Layout';

// components
import { HeaderSection } from '../component/IndustriesPageComponents/HeaderSection';
import { IndustriesSection } from '../component/IndustriesPageComponents/IndustriesSection';

const IndustriesPage = () => {
  return (
    <Fragment>
      <Layout>
        <HeaderSection />
        <IndustriesSection />
      </Layout>
    </Fragment>
  );
};

export default IndustriesPage;
