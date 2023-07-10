import { Box } from '@chakra-ui/react';

// components
import Footer from '../component/common/Footer';

export const FooterLayout = props => {
  return (
    <Box as="footer" role="contentinfo" bg="bg.accent.default" {...props}>
      <Footer />
    </Box>
  );
};
