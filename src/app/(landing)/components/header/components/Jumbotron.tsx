import Stack from '@/app/components/Stack';
import { Heading } from '@/app/components/typography';

function Jumbotron() {
  return (
    <Stack $direction="vertical" $gap="8px" style={{ maxWidth: '700px' }}>
      <Heading as="h2" $color="white" $fontSize={2.28}>
        به راحتی خدمات مورد نیاز خودت رو پیدا کن
      </Heading>
      <Heading as="h3" $color="white" $fontSize={1.42}>
        اینجا میتوانید کمی در مورد خودتون صحبت و توضیح دهید که محصول شما چیست و
        چه کارهایی انجام میده
      </Heading>
    </Stack>
  );
}

export default Jumbotron;
