import {
  Avatar,
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Icon,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export const members = [
  {
    role: 'Co-Founder / CEO',
    image:
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzN8fGxhZHklMjBzbWlsaW5nfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    name: 'Camila West',
    description:
      ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
  },
  {
    role: 'Co-Founder / CTO',
    image:
      'https://images.unsplash.com/photo-1573007974656-b958089e9f7b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8Z3V5JTIwc21pbGluZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    name: 'Mark Linhsorg',
    description:
      'Habitant morbi tristique senectus et netus et malesuada fames vestibulum.',
  },
  {
    role: 'Marketing Manager',
    image:
      'https://images.unsplash.com/photo-1521296797187-726205347ca9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTd8fGxhZHklMjBzbWlsaW5nfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    name: 'Kim Yung',
    description:
      'Quis risus sed vulputate odio ut enim blandit volutpat. Amet cursus sit amet.',
  },
  {
    role: 'Manager, Business Relations',
    image:
      'https://images.unsplash.com/photo-1524660988542-c440de9c0fde?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTYwfHxibGFjayUyMGd1eXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    name: 'Morgan Adebayo',
    description:
      'Consectetur libero id faucibus nisl tincidunt eget nullam fringilla urna.',
  },
  {
    role: 'Chief Operating Officer',
    image:
      'https://images.unsplash.com/photo-1522938974444-f12497b69347?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzJ8fGJsYWNrJTIwbGFkeXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    name: 'Bimbo Akintola',
    description:
      'Mi eget mauris pharetra et ultrices neque ornare aenean massa eget egestas.',
  },
  {
    role: 'Head of Human Resources',
    image:
      'https://images.unsplash.com/photo-1574034589502-9f8a1ed46fa7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTMxfHxsYWR5JTIwc21pbGluZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    name: 'Yasmine Jones',
    description:
      'Diam maecenas sed enim ut sem viverra aliquet eget magna ac placerat.',
  },
];

export const TeamSection = () => (
  <Container py={{ base: '16', md: '24' }}>
    <Stack spacing={{ base: '12', md: '16' }}>
      <Stack spacing={{ base: '8', md: '10' }}>
        <Stack spacing="3" align="center" textAlign="center">
          <Text
            fontSize={{ base: 'sm', md: 'md' }}
            color="accent"
            fontWeight="semibold"
          >
            We're hiring
          </Text>
          <Stack spacing={{ base: '4', md: '5' }}>
            <Heading size={{ base: 'sm', md: 'md' }}>Meet our team</Heading>
            <Text fontSize={{ base: 'lg', md: 'xl' }} color="fg.muted">
              Chupa chups pudding marzipan cake chocolate shortbread macaroon
              oat cake.
            </Text>
          </Stack>
        </Stack>
        <Stack
          direction={{ base: 'column-reverse', md: 'row' }}
          spacing="3"
          justify="center"
        >
          <Button variant="secondary" size="xl">
            Contact us
          </Button>
          <Button variant="primary" size="xl">
            Join our team
          </Button>
        </Stack>
      </Stack>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        columnGap="8"
        rowGap={{ base: '6', md: '8', lg: '16' }}
      >
        {members.map(member => (
          <Box
            key={member.name}
            bg="bg.surface"
            p="6"
            boxShadow="sm"
            borderRadius="md"
          >
            <Stack spacing="4" align="center" textAlign="center">
              <Stack>
                <Stack spacing={{ base: '4', md: '5' }} align="center">
                  <Avatar
                    src={member.image}
                    boxSize={{ base: '16', md: '20' }}
                  />
                  <Box>
                    <Text fontWeight="medium" fontSize="lg">
                      {member.name}
                    </Text>
                    <Text color="accent">{member.role}</Text>
                  </Box>
                </Stack>
                <Text color="fg.muted">{member.description}</Text>
              </Stack>
              <HStack spacing="4" color="fg.subtle">
                {[FaGithub, FaLinkedin, FaTwitter].map((item, id) => (
                  <Link href="#" key={id}>
                    <Icon as={item} boxSize="5" />
                  </Link>
                ))}
              </HStack>
            </Stack>
          </Box>
        ))}
      </SimpleGrid>
    </Stack>
  </Container>
);
