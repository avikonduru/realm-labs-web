import { Box, Container, Stack, Avatar, Text } from '@chakra-ui/react';
import { testimonials } from './data';

export const Testimonial = props => {
  const { avatarUrl, name, quote, title, company, logo: Logo } = props;
  return (
    <Stack spacing="8" align="center" textAlign="center">
      <Logo />
      <Text
        textStyle={{
          base: 'lg',
          md: 'xl',
        }}
        fontWeight="medium"
      >
        {quote}
      </Text>
      <Stack spacing="4" align="center">
        <Avatar src={avatarUrl} size="lg" name={name} />
        <Stack spacing="1">
          <Text fontWeight="semibold">{name}</Text>
          <Text color="fg.muted">
            {title}, {company}
          </Text>
        </Stack>
      </Stack>
    </Stack>
  );
};

export const Testimonials = () => (
  <Box
    as="section"
    py={{
      base: '16',
      md: '24',
    }}
  >
    <Container>
      <Stack
        direction={{
          base: 'column',
          md: 'row',
        }}
        spacing="16"
      >
        {testimonials.map((testimonial, id) => (
          <Testimonial key={id} {...testimonial} />
        ))}
      </Stack>
    </Container>
  </Box>
);
