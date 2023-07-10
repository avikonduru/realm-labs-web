import { Flex } from '@chakra-ui/react';
import { FooterLayout } from './Footer';
import { Main } from './Main';
import { Navbar } from './Navbar';

export const Layout = ({ children }) => (
  <Flex direction="column" flex="1">
    <Navbar />
    <Main>{children}</Main>
    <FooterLayout />
  </Flex>
);
