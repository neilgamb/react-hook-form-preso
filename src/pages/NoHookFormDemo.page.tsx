import { Container } from '@mantine/core';
import { FeedbackNoHookForm } from '@/components/FeedbackNoHookForm/FeedbackNoHookForm';
import { Header } from '@/components/Header/Header';

export function NoHookFormDemo() {
  return (
    <Container pb={200}>
      <Header subTitle="...a form with the fuss" mt={100} />
      <Container size="sm" px="md" mt={50}>
        <FeedbackNoHookForm />
      </Container>
    </Container>
  );
}
