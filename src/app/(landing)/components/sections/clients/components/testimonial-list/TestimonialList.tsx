import ClientAvatar from '@/app/(landing)/components/sections/clients/components/testimonial-list/components/ClientAvatar';
import ClientInfo from '@/app/(landing)/components/sections/clients/components/testimonial-list/components/ClientInfo';
import TestimonialItem from '@/app/(landing)/components/sections/clients/components/testimonial-list/components/Testimonialltem';
import TestimonialQuote from '@/app/(landing)/components/sections/clients/components/testimonial-list/components/TestimonialQuote';
import Stack from '@/app/components/Stack';
import { Text } from '@/app/components/typography';
import Image from 'next/image';
import { testimonials } from './data';

export function TestimonialList() {
  return testimonials.length ? (
    <Stack $direction="horizontal" $mobileDirection="vertical" $gap="40px">
      {testimonials.map((testimonial) => (
        <TestimonialItem
          key={testimonial.author.company}
          $direction="horizontal"
          $mobileDirection="vertical"
          $gap="40px"
        >
          <ClientAvatar>
            <Image
              src={testimonial.author.avatar}
              alt={testimonial.author.fullName}
              fill
            />
          </ClientAvatar>
          <TestimonialQuote $direction="vertical" $gap="32px" as="figure">
            <blockquote>
              <Text $textAlign="right" $fontSize={1.14}>
                {testimonial.text}
              </Text>
            </blockquote>
            <figcaption>
              <ClientInfo $fontWeight={700} $fontSize={1.28}>
                {testimonial.author.fullName}
              </ClientInfo>
              <ClientInfo $color="gray">
                {testimonial.author.fullName}, {testimonial.author.fullName}
              </ClientInfo>
            </figcaption>
          </TestimonialQuote>
        </TestimonialItem>
      ))}
    </Stack>
  ) : null;
}
