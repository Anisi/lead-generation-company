import Stack from '@/app/components/Stack';
import { Heading } from '@/app/components/typography';

export function Header() {
  return (
    <Stack $direction="vertical" $gap="8px">
      <Heading as="h2" $fontSize={2}>
        ما خدمات زیادی به مشتریان بزرگمان ارائه میدهیم
      </Heading>
      <Heading as="h3" $color="gray" $fontSize={1.28}>
        از این زیرعنوان برای اطلاع رسانی به کاربر و آشنایی بیشتر با محصول و
        خدمات خود استفاده میکنیم.
        <br />
        با کلیک بر روی این قسمت میتوانید متن خود را ویرایش کنید
      </Heading>
    </Stack>
  );
}
