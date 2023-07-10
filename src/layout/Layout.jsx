import { Flex } from '@chakra-ui/react';
import { Footer } from './Footer';
import { Main } from './Main';
import { Navbar } from './Navbar';

export const Layout = ({ children }) => (
  <Flex direction="column" flex="1">
    <Navbar />
    <Main>{children}</Main>
    <Footer />
  </Flex>
);
