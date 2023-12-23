import CareerBackgroundImage from '@/../public/images/career-bg.jpg';
import Buttons from '@/app/(landing)/components/career/components/Buttons';
import Jumbotron from '@/app/(landing)/components/career/components/Jumbotron';
import Container from '@/app/components/Container';
import Section from '@/app/components/Section';
import Stack from '@/app/components/Stack';

export function Career() {
  return (
    <Section $bgImage={CareerBackgroundImage} $bgColor="rgba(0, 0, 0, 0.6)">
      <Container>
        <Stack $direction="vertical" $gap="72px" style={{ padding: '90px 0' }}>
          <Jumbotron />
          <Buttons />
        </Stack>
      </Container>
    </Section>
  );
}
