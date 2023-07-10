import { Box, Container, Heading, Stack, Text } from '@chakra-ui/react';

export const HeaderSection = () => (
  <Box as="section" bg="bg.surface" py={{ base: '16', md: '24' }}>
    <Container>
      <Stack spacing={{ base: '4', md: '6' }} align="center" textAlign="center">
        <Stack spacing="3">
          <Text
            fontSize={{ base: 'sm', md: 'md' }}
            fontWeight="medium"
            color="accent"
          >
            Pricing
          </Text>
          <Heading size={{ base: 'md', md: 'lg' }} fontWeight="semibold">
            Get lifetime access
          </Heading>
        </Stack>
        <Text color="fg.muted" fontSize={{ base: 'lg', md: 'xl' }} maxW="3xl">
          Get early access to 210+ components and free updates.
        </Text>
      </Stack>
    </Container>
  </Box>
);
