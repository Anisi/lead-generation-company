import { ServiceTag } from '@/app/(landing)/components/services/components/service-list/type/service-tag';
import { StaticImageData } from 'next/dist/shared/lib/get-img-props';

export type ServiceInfo = {
  title: string;
  description: string;
  tags: ServiceTag[];
  image: StaticImageData;
};
