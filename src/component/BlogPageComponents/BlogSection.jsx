import {
  Avatar,
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';

export const posts = [
  {
    id: '1',
    title: '2022 Developer Survey',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    image: 'https://tinyurl.com/4wzh2ph9',
    category: 'Research',
    publishedAt: 'December 29, 2022',
    author: {
      name: 'Samy Tom',
      avatarUrl: 'https://tinyurl.com/2p8h98w8',
    },
  },
  {
    id: '2',
    title: 'Women in Tech',
    excerpt:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    image: 'https://tinyurl.com/5czjdxj7',
    category: 'Community',
    publishedAt: 'November 30, 2022',
    author: {
      name: 'Angelina Gates',
      avatarUrl: 'https://tinyurl.com/2p98t7nh',
    },
  },
  {
    id: '3',
    title: 'Using Chakra UI in Sketch',
    excerpt:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id.',
    image: 'https://tinyurl.com/yh2xkpzm',
    category: 'Design',
    publishedAt: 'October 31, 2022',
    author: {
      name: 'Busola Banks',
      avatarUrl: 'https://tinyurl.com/2p8fy9ym',
    },
  },
];

export const BlogSection = () => {
  const isMobile = useBreakpointValue({
    base: true,
    md: false,
  });
  return (
    <Box bg="bg.surface">
      <Container
        py={{
          base: '16',
          md: '24',
        }}
      >
        <Stack
          spacing={{
            base: '12',
            md: '16',
          }}
        >
          <Stack direction="row" justify="space-between">
            <Stack
              spacing={{
                base: '4',
                md: '5',
              }}
            >
              <Stack spacing="3">
                <Text
                  color="accent"
                  fontWeight="semibold"
                  fontSize={{
                    base: 'sm',
                    md: 'md',
                  }}
                >
                  Our Blog
                </Text>
                <Heading
                  size={{
                    base: 'sm',
                    md: 'md',
                  }}
                >
                  Latest blog posts
                </Heading>
              </Stack>
              <Text
                color="fg.muted"
                fontSize={{
                  base: 'lg',
                  md: 'xl',
                }}
              >
                Ice cream pudding dragée macaroon donut marzipan chocolate
              </Text>
            </Stack>
            {!isMobile && (
              <Button variant="primary" size="xl">
                Show all
              </Button>
            )}
          </Stack>
          <SimpleGrid
            columns={{
              base: 1,
              md: 2,
              lg: 3,
            }}
            gap={{
              base: '12',
              lg: '8',
            }}
          >
            {posts.map(post => (
              <Link
                key={post.id}
                _hover={{
                  textDecor: 'none',
                }}
                role="group"
              >
                <Stack spacing="8">
                  <Box overflow="hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width="full"
                      height="15rem"
                      objectFit="cover"
                      transition="all 0.2s"
                      _groupHover={{
                        transform: 'scale(1.05)',
                      }}
                    />
                  </Box>
                  <Stack spacing="3">
                    <Text fontSize="sm" fontWeight="semibold" color="accent">
                      {post.category}
                    </Text>
                    <Heading size="xs">{post.title}</Heading>
                    <Text color="fg.muted">{post.excerpt}</Text>
                  </Stack>
                  <HStack>
                    <Avatar src={post.author.avatarUrl} boxSize="10" />
                    <Box fontSize="sm">
                      <Text fontWeight="medium">{post.author.name}</Text>
                      <Text color="fg.muted">{post.publishedAt}</Text>
                    </Box>
                  </HStack>
                </Stack>
              </Link>
            ))}
          </SimpleGrid>
          {isMobile && (
            <Button variant="primary" size="xl">
              Show all
            </Button>
          )}
        </Stack>
      </Container>
    </Box>
  );
};
