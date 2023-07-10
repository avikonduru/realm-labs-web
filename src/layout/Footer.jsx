import { Box, Container } from '@chakra-ui/react';
import { Placeholder } from './Placeholder';

export const Footer = props => {
  return (
    <Box as="footer" role="contentinfo" bg="bg.accent.default" {...props}>
      <Container>
        <Placeholder minH="20">Footer</Placeholder>
      </Container>
    </Box>
  );
};
