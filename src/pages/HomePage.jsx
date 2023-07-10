import { Fragment } from 'react';

// layout
import { Footer } from '../layout/Footer';
import { Main } from '../layout/Main';
import { Navbar } from '../layout/Navbar';

// chakra
import { Flex } from '@chakra-ui/react';

const HomePage = () => {
  return (
    <Fragment>
      <Flex direction="column" flex="1">
        <Navbar />
        <Main />
        <Footer />
      </Flex>
    </Fragment>
  );
};

export default HomePage;
