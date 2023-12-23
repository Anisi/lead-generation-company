import ServiceImage from '@/app/(landing)/components/services/components/service-list/components/ServiceImage';
import ServiceInfo from '@/app/(landing)/components/services/components/service-list/components/ServiceInfo';
import ServiceItem from '@/app/(landing)/components/services/components/service-list/components/ServiceItem';
import ServiceTag from '@/app/(landing)/components/services/components/service-list/components/ServiceTag';
import Stack from '@/app/components/Stack';
import { Heading, Text } from '@/app/components/typography';
import { services } from './data';

export function ServiceList() {
  return services.length ? (
    <Stack $direction="horizontal" $mobileDirection="vertical" $gap="21px">
      {services.map((serviceInfo) => (
        <ServiceItem key={serviceInfo.title}>
          <ServiceImage src={serviceInfo.image} alt={serviceInfo.title} />
          <ServiceInfo $direction="vertical" $gap="24px">
            <Stack $direction="vertical" $gap="8px">
              <Heading as="h3" $fontSize={1.42} style={{ fontWeight: 700 }}>
                {serviceInfo.title}
              </Heading>
              <Text $color="gray">{serviceInfo.description}</Text>
            </Stack>
            <Stack $direction="horizontal" $gap="10px">
              {serviceInfo.tags.map((tagInfo) => (
                <ServiceTag
                  href={tagInfo.link}
                  $color={tagInfo.color}
                  key={tagInfo.label}
                >
                  {tagInfo.label}
                </ServiceTag>
              ))}
            </Stack>
          </ServiceInfo>
        </ServiceItem>
      ))}
    </Stack>
  ) : null;
}
