import { Box } from '@chakra-ui/react';
import { useNavbar } from './useNavbar';

// components
import { Header } from '../component/common/Header/Header';

export const Navbar = () => {
  const { rootProps } = useNavbar();
  return (
    <Box
      as="nav"
      role="navigation"
      position="sticky"
      top="0"
      zIndex="docked"
      bg="bg.accent.default"
      {...rootProps}
    >
      <Header />
    </Box>
  );
};
