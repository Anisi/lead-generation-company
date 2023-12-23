import Container from '@/app/(landing)/components/Container';
import Section from '@/app/(landing)/components/Section';
import {
  Header,
  ServiceList,
} from '@/app/(landing)/components/sections/services/components';
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
