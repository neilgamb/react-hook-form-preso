import { Container } from '@mantine/core';
import { FeedbackHookForm } from '@/components/FeedbackHookForm/FeedbackHookForm';
import { Header } from '@/components/Header/Header';

export function HookFormDemo() {
  return (
    <Container>
      <Header title="React Hook Form" subTitle="A form without the fuss..." mt={70} />
      <Container size="sm" px="md" mt={50}>
        <FeedbackHookForm />
      </Container>
    </Container>
  );
}
