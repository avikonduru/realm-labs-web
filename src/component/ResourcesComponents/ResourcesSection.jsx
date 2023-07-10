import {
  Container,
  GridItem,
  SimpleGrid,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react';

export const posts = [
  {
    id: '1',
    title: 'Tools you need for UX Design in 2023',
    image: 'https://pro.chakra-ui.com/components/marketing/blog/post1.png',
    category: 'Design',
  },
  {
    id: '2',
    title: 'How to write a great blog post',
    image: 'https://pro.chakra-ui.com/components/marketing/blog/post2.png',
    category: 'Community',
  },
  {
    id: '3',
    title: 'Developer Survey 2022',
    image: 'https://pro.chakra-ui.com/components/marketing/blog/post3.png',
    category: 'Community',
  },
  {
    id: '4',
    title: 'Rock your next job interview',
    image: 'https://pro.chakra-ui.com/components/marketing/blog/post4.png',
    category: 'Community',
  },
];

export const BlogPost = props => {
  const { post } = props;
  return (
    <Link
      _hover={{
        textDecor: 'none',
      }}
      role="group"
    >
      <Flex
        bgImage={post.image}
        bgSize="cover"
        bgPos="center"
        minH="sm"
        direction="column-reverse"
      >
        <Stack
          spacing="3"
          alignSelf="start"
          w="xs"
          bg="bg.canvas"
          paddingEnd="16"
          paddingTop="8"
          paddingBottom="4"
        >
          <Text
            textStyle={{
              base: 'xs',
              md: 'sm',
            }}
            fontWeight="semibold"
            color="accent"
          >
            {post.category}
          </Text>
          <Heading
            size={{
              base: 'xs',
              md: 'sm',
            }}
          >
            {post.title}
          </Heading>
        </Stack>
      </Flex>
    </Link>
  );
};

export const ResourcesSection = () => (
  <Container
    py={{
      base: '16',
      md: '24',
    }}
  >
    <SimpleGrid
      columns={2}
      gridRowGap={{
        base: '8',
        md: '16',
      }}
      gridColumnGap="8"
    >
      {posts.map(post => (
        <GridItem
          key={post.id}
          sx={{
            ':nth-of-type(3n-2)': {
              gridColumn: 'span 2',
            },
          }}
          gridColumn={{
            base: 'span 2',
            md: 'span 1',
          }}
        >
          <BlogPost post={post} />
        </GridItem>
      ))}
    </SimpleGrid>
  </Container>
);
