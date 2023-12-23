import bgImage from '@/../public/images/header-bg.jpg';
import Container from '@/app/components/Container';
import Section from '@/app/components/Section';
import Buttons from '@/app/(landing)/components/header/components/Buttons';
import Jumbotron from '@/app/(landing)/components/header/components/Jumbotron';
import Logo from '@/app/(landing)/components/header/components/Logo';
import Stack from '@/app/components/Stack';

export function Header() {
  return (
    <Section $bgImage={bgImage} $bgColor="rgba(32, 55, 137, 0.8)">
      <Container>
        <Stack $direction="vertical" $gap="72px" style={{ padding: '70px 0' }}>
          <Logo />
          <Jumbotron />
          <Buttons />
        </Stack>
      </Container>
    </Section>
  );
}
