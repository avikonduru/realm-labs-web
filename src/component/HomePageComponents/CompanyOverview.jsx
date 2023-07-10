import { Container, Heading, Stack, Text, Button } from '@chakra-ui/react';
import { FiArrowRight } from 'react-icons/fi';

export const stats = [
  {
    label: 'Downloads per month',
    description:
      'One of the fastest growing headless UI libraries in the world',
    value: '1.3M',
    cta: 'Learn more',
  },
  {
    label: 'Github stars',
    description: 'Appreciated by developers for its simplicity and flexibility',
    value: '30.3K',
    cta: 'Like us on GitHub',
  },
  {
    label: 'Core contributors',
    description: 'A team of talented and passionate developers ready to help',
    value: '8',
    cta: 'Meet the team',
  },
  {
    label: 'Discord members',
    description: 'Join our friendly and helpful developer community on Discord',
    value: '8.3K',
    cta: 'Join Discord',
  },
];

export const Stat = props => {
  const { label, description, value, cta } = props;
  return (
    <Stack spacing="3" flex="1">
      <Text
        textStyle={{
          base: '5xl',
          md: '6xl',
        }}
        color="accent"
        fontWeight="semibold"
      >
        {value}
      </Text>
      <Stack spacing="5">
        <Stack>
          <Text textStyle="lg" fontWeight="semibold">
            {label}
          </Text>
          <Text color="fg.muted">{description}</Text>
        </Stack>
        <Button
          alignSelf="start"
          size="lg"
          variant="link"
          colorScheme="blue"
          rightIcon={<FiArrowRight />}
        >
          {cta}
        </Button>
      </Stack>
    </Stack>
  );
};

export const CompanyOverview = () => (
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
      alignItems="stretch"
    >
      <Stack
        spacing={{
          base: '4',
          md: '5',
        }}
        direction="column"
      >
        <Heading
          size={{
            base: 'md',
            md: 'lg',
          }}
        >
          Build something great
        </Heading>
        <Text
          color="fg.muted"
          textStyle={{
            base: 'lg',
            md: 'xl',
          }}
        >
          Everything you need to build modern UI and great products.
        </Text>
      </Stack>
      <Stack
        spacing="8"
        direction={{
          base: 'column',
          md: 'row',
        }}
      >
        {stats.map(stat => (
          <Stat key={stat.label} {...stat} />
        ))}
      </Stack>
    </Stack>
  </Container>
);
