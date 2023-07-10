import { Fragment } from 'react';
import { LayoutWithHero } from '../layout/LayoutWithHero';

// components
import { CtaSection } from '../component/HomePageComponents/CtaSection';
import { KeyFeatures } from '../component/HomePageComponents/KeyFeatures';
import { LogoSection } from '../component/common/LogoSection/LogoSection';
import { CompanyOverview } from '../component/HomePageComponents/CompanyOverview';

const HomePage = () => {
  return (
    <Fragment>
      <LayoutWithHero>
        <LogoSection />
        <CompanyOverview />
        <KeyFeatures />
        <CtaSection />
      </LayoutWithHero>
    </Fragment>
  );
};

export default HomePage;
