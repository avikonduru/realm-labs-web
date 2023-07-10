import { Fragment } from 'react';
import { Layout } from '../layout/Layout';

// components
import { HeaderSection } from '../component/FaqPageComponents/HeaderSection';
import AccordianSection from '../component/FaqPageComponents/AccordianSection';

const FaqPage = () => {
  return (
    <Fragment>
      <Layout>
        <HeaderSection />
        <AccordianSection />
      </Layout>
    </Fragment>
  );
};

export default FaqPage;
