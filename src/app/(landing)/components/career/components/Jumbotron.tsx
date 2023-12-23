import Stack from '@/app/components/Stack';
import { Heading } from '@/app/components/typography';

function Jumbotron() {
  return (
    <Stack $direction="vertical" $gap="8px">
      <Heading as="h2" $color="white" $fontSize={2}>
        اگر علاقه‌مند به همکاری با ما هستی
      </Heading>
      <Heading as="h3" $color="white" $fontSize={1.28}>
        از این زیرعنوان برای اطلاع رسانی به کاربر و آشنایی بیشتر با محصول و
        خدمات خود استفاده میکنیم.
        <br />
        با کلیک بر روی این قسمت میتوانید متن خود را ویرایش کنید
      </Heading>
    </Stack>
  );
}

export default Jumbotron;
