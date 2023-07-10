import { Flex } from '@chakra-ui/react';
import { Footer } from './Footer';
import { Main } from './Main';
import { Navbar } from './Navbar';

// components
import { HeroSection } from '../component/HomePageComponents/HeroSection';

export const LayoutWithHero = ({ children }) => (
  <Flex direction="column" flex="1">
    <Navbar />
    <HeroSection />
    <Main>{children}</Main>
    <Footer />
  </Flex>
);
