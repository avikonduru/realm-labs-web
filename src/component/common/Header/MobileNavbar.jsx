import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  Stack,
} from '@chakra-ui/react';

export const MobileDrawer = props => (
  <Drawer placement="top" {...props}>
    <DrawerContent>
      <DrawerBody mt="16">
        <Stack spacing="6" align="stretch">
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
            <Button key={item} size="lg" variant="text" colorScheme="gray">
              {item}
            </Button>
          ))}
        </Stack>
      </DrawerBody>
    </DrawerContent>
  </Drawer>
);
