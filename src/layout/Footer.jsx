import { Box } from '@chakra-ui/react';

// components
import { Footer as FooterComponent } from '../component/common/Footer';

export const Footer = props => {
  return (
    <Box as="footer" role="contentinfo" bg="bg.accent.default" {...props}>
      <FooterComponent />
    </Box>
  );
};
