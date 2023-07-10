import { Fragment } from 'react';
import { Layout } from '../layout/Layout';

// components
import { TeamSection } from '../component/AboutUsComponents/TeamSection';
import { KeyDifferentiatorsSection } from '../component/AboutUsComponents/KeyDifferentiatorsSection';
import { CompanyHistorySection } from '../component/AboutUsComponents/CompanyHistorySection';
import { MissionAndValuesSection } from '../component/AboutUsComponents/MissionAndValuesSection';

const AboutUsPage = () => {
  return (
    <Fragment>
      <Layout>
        <CompanyHistorySection />
        <MissionAndValuesSection />
        <TeamSection />
        <KeyDifferentiatorsSection />
      </Layout>
    </Fragment>
  );
};

export default AboutUsPage;
