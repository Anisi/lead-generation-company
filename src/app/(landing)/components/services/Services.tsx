import {
  Header,
  ServiceList,
} from '@/app/(landing)/components/services/components';
import Container from '@/app/components/Container';
import Section from '@/app/components/Section';
import Stack from '@/app/components/Stack';

export function Services() {
  return (
    <Section $bgColor="#FAFAFA">
      <Container>
        <Stack $direction="vertical" $gap="72px" style={{ padding: '60px 0' }}>
          <Header />
          <ServiceList />
        </Stack>
      </Container>
    </Section>
  );
}
