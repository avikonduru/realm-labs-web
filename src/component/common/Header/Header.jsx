import {
  Box,
  Button,
  ButtonGroup,
  Container,
  HStack,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';
import { Logo } from '../LogoBlack';
import { MobileDrawer } from './MobileNavbar';
import { ToggleButton } from './ToggleButton';

export const Header = () => {
  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
  });
  const mobileNavbar = useDisclosure();
  return (
    <Box as="section">
      <Box
        borderBottomWidth="1px"
        bg="bg.surface"
        position="relative"
        zIndex="tooltip"
      >
        <Container py="4">
          <HStack justify="space-between">
            <Logo />
            {isDesktop ? (
              <HStack spacing="8">
                <ButtonGroup
                  size="lg"
                  variant="text"
                  colorScheme="gray"
                  spacing="8"
                >
                  {[
                    'About Us',
                    'Services',
                    'Industries',
                    'Case Studies',
                    'Blog',
                    'Resources',
                    'Contact Us',
                    'FAQ',
                  ].map(item => (
                    <Button key={item}>{item}</Button>
                  ))}
                </ButtonGroup>
              </HStack>
            ) : (
              <>
                <ToggleButton
                  onClick={mobileNavbar.onToggle}
                  isOpen={mobileNavbar.isOpen}
                  aria-label="Open Menu"
                />
                <MobileDrawer
                  isOpen={mobileNavbar.isOpen}
                  onClose={mobileNavbar.onClose}
                />
              </>
            )}
          </HStack>
        </Container>
      </Box>
    </Box>
  );
};
