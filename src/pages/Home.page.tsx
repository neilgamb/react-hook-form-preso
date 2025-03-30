import { Container } from '@mantine/core';
import { FeedbackForm } from '@/components/FeedbackForm/FeedbackForm';
import { Header } from '@/components/Header/Header';

export function HomePage() {
  return (
    <Container>
      <Header />
      <Container size="sm" px="md" mt={50}>
        <FeedbackForm />
      </Container>
    </Container>
  );
}
