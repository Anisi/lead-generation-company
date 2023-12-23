import Container from '@/app/components/Container';
import Section from '@/app/components/Section';
import {
  Header,
  TestimonialList,
} from '@/app/(landing)/components/clients/components';
import { ClientLogoList } from '@/app/(landing)/components/clients/components/client-logos/ClientLogoList';
import Stack from '@/app/components/Stack';

export function Clients() {
  return (
    <Section $bgColor="#F3F3F3">
      <Container>
        <Stack
          $direction="vertical"
          $gap="72px"
          $mobileGap="24px"
          style={{ padding: '50px 0' }}
        >
          <Header />
          <TestimonialList />
          <ClientLogoList />
        </Stack>
      </Container>
    </Section>
  );
}
