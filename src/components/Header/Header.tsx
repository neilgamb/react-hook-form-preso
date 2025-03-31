import { BoxProps, Container, Text, Title } from '@mantine/core';
import classes from './Header.module.css';

interface HeaderProps extends BoxProps {
  title?: string;
  subTitle?: string;
}

export function Header({ title, subTitle, ...rest }: HeaderProps) {
  return (
    <Container size="lg" {...rest}>
      {title && (
        <Title className={classes.title} ta="center">
          <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'blue' }}>
            {title}
          </Text>
        </Title>
      )}
      {subTitle && (
        <Title className={classes.subTitle} ta="center">
          {subTitle}
        </Title>
      )}
    </Container>
  );
}
