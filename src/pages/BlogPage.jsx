import { Fragment } from 'react';
import { Layout } from '../layout/Layout';

// components
import { BlogSection } from '../component/BlogPageComponents/BlogSection';

const BlogPage = () => {
  return (
    <Fragment>
      <Layout>
        <BlogSection />
      </Layout>
    </Fragment>
  );
};

export default BlogPage;
