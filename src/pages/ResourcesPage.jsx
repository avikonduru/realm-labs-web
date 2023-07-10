import { Fragment } from 'react';
import { Layout } from '../layout/Layout';

// components
import { ResourcesSection } from '../component/ResourcesComponents/ResourcesSection';

const ResourcesPage = () => {
  return (
    <Fragment>
      <Layout>
        <ResourcesSection />
      </Layout>
    </Fragment>
  );
};

export default ResourcesPage;
