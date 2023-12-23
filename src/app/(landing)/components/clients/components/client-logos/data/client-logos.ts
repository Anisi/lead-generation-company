import CustomerLogo1 from '@/../public/images/client-logo-1.svg';
import CustomerLogo2 from '@/../public/images/client-logo-2.svg';
import CustomerLogo3 from '@/../public/images/client-logo-3.svg';
import { StaticImageData } from 'next/dist/shared/lib/get-img-props';

export const clientLogos: Readonly<StaticImageData[]> = Object.freeze([
  CustomerLogo1,
  CustomerLogo2,
  CustomerLogo3,
  CustomerLogo1,
  CustomerLogo3,
  CustomerLogo2,
]);
