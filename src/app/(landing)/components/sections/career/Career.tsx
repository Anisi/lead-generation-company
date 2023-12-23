import CareerBackgroundImage from '@/../public/images/career-bg.jpg';
import Container from '@/app/(landing)/components/Container';
import Section from '@/app/(landing)/components/Section';
import Buttons from '@/app/(landing)/components/sections/career/components/Buttons';
import Jumbotron from '@/app/(landing)/components/sections/career/components/Jumbotron';
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
