import IntroductionVideoPlaceholder from '@/../public/images/introduction-video-placeholder.jpg';
import Inner from '@/app/(landing)/components/introduction/components/Inner';
import List from '@/app/(landing)/components/introduction/components/List';
import ListItem from '@/app/(landing)/components/introduction/components/ListItem';
import Container from '@/app/components/Container';
import Section from '@/app/components/Section';
import Stack from '@/app/components/Stack';
import { Heading } from '@/app/components/typography';
import Image from 'next/image';

export function Introduction() {
  return (
    <Section $bgColor="#666666">
      <Container>
        <Inner
          $direction="horizontal"
          $mobileDirection="vertical"
          $gap="56px"
          $mobileGap="32px"
        >
          <Image
            src={IntroductionVideoPlaceholder}
            alt="معرفی ما"
            style={{ width: '100%', height: '100%', maxWidth: '490px' }}
          />
          <Stack
            $direction="vertical"
            $gap="32px"
            style={{ alignItems: 'flex-start' }}
          >
            <Heading as="h2" $color="white" $fontSize={2} $textAlign="right">
              ویدئو معرفی ما را تماشا کنید
            </Heading>
            <List $color="white" $textAlign="right">
              <ListItem $fontSize={1.14}>
                از این زیرعنوان برای اطلاع رسانی به کاربر و آشنایی بیشتر با
                محصول و خدمات خود استفاده میکنیم. با کلیک بر روی این قسمت
                میتوانید متن خود را ویرایش کنید
              </ListItem>
              <ListItem $fontSize={1.14}>
                از این زیرعنوان برای اطلاع رسانی به کاربر و آشنایی بیشتر با
                محصول و خدمات خود استفاده میکنیم. با کلیک بر روی این قسمت
                میتوانید متن خود را ویرایش کنید
              </ListItem>
            </List>
          </Stack>
        </Inner>
      </Container>
    </Section>
  );
}
