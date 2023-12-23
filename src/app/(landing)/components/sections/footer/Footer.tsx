import Container from '@/app/(landing)/components/Container';
import Section from '@/app/(landing)/components/Section';
import { Text } from '@/app/components/typography';

export function Footer() {
  return (
    <Section $bgColor="#222222" style={{ padding: '20px 10px' }}>
      <Container>
        <Text $color="white" $fontSize={1.14} style={{ direction: 'ltr' }}>
          ©2023 . Company . All rights reserved
        </Text>
      </Container>
    </Section>
  );
}
