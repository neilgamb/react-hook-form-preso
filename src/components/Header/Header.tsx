import { Container, Text, Title } from '@mantine/core';
import classes from './Header.module.css';

export function Header() {
  return (
    <Container size="lg" px="md">
      <Title className={classes.title} ta="center" mt={50}>
        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'blue' }}>
          React Hook Form
        </Text>
      </Title>
      <Title className={classes.subTitle} ta="center">
        A form without the fuss
      </Title>
    </Container>
  );
}
