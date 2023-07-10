import { Container, Flex } from '@chakra-ui/react';

export const Main = props => {
  return (
    <Flex as="main" role="main" direction="column" flex="1" {...props}>
      <Container flex="1">{props.children}</Container>
    </Flex>
  );
};
