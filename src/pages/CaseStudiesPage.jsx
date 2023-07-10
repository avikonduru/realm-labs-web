import { Fragment } from 'react';
import { Layout } from '../layout/Layout';

// components
import { Testimonials } from '../component/CaseStudiesComponents/Testimonials/Testimonials';
import { MetricsSection } from '../component/CaseStudiesComponents/Metrics/MetricsSection';
import { SuccessStoriesSection } from '../component/CaseStudiesComponents/SuccessStoriesSection';

const CaseStudiesPage = () => {
  return (
    <Fragment>
      <Layout>
        <SuccessStoriesSection />
        <Testimonials />
        <MetricsSection />
      </Layout>
    </Fragment>
  );
};

export default CaseStudiesPage;
