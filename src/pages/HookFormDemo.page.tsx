import { Container } from '@mantine/core';
import { FeedbackHookForm } from '@/components/FeedbackHookForm/FeedbackHookForm';
import { Header } from '@/components/Header/Header';

export function HookFormDemo() {
  return (
    <Container pb={200}>
      <Header title="React Hook Form" subTitle="A feedback form without the fuss..." mt={40} />
      <Container size="sm" px="md" mt={50}>
        <FeedbackHookForm />
      </Container>
    </Container>
  );
}
