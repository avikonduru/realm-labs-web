import { Fragment } from 'react';
import { Logo } from '../LogoBlack';
import { MobileDrawer } from './MobileNavbar';
import { ToggleButton } from './ToggleButton';
import { useNavigate } from 'react-router-dom';

// chakra
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  HStack,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';

const links = [
  {
    label: 'About Us',
    pageLink: '/about-us',
  },
  {
    label: 'Services',
    pageLink: '/services',
  },
  {
    label: 'Industries',
    pageLink: '/industries',
  },
  {
    label: 'Case Studies',
    pageLink: '/case-studies',
  },
  {
    label: 'Blog',
    pageLink: '/blog',
  },
  {
    label: 'Resources',
    pageLink: '/resources',
  },
  {
    label: 'Contact Us',
    pageLink: '/contact-us',
  },
  {
    label: 'FAQ',
    pageLink: '/faq',
  },
];

const Header = () => {
  const navigate = useNavigate();
  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
  });
  const mobileNavbar = useDisclosure();

  return (
    <Fragment>
      <Box as="section">
        <Box
          borderBottomWidth="1px"
          bg="bg.surface"
          position="relative"
          zIndex="tooltip"
        >
          <Container py="4">
            <HStack justify="space-between">
              <Box
                cursor="pointer"
                onClick={() => {
                  navigate('/');
                }}
              >
                <Logo />
              </Box>

              {isDesktop ? (
                <HStack spacing="8">
                  <ButtonGroup
                    size="lg"
                    variant="text"
                    colorScheme="gray"
                    spacing="8"
                  >
                    {links.map(item => (
                      <Button
                        key={item.label}
                        onClick={() => {
                          navigate(item.pageLink);
                        }}
                      >
                        {item.label}
                      </Button>
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
    </Fragment>
  );
};

export default Header;
