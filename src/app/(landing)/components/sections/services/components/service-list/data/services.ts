import DesignServiceImage from '@/../public/images/design-service.jpg';
import FinancialServiceImage from '@/../public/images/financial-service.jpg';
import ItServiceImage from '@/../public/images/it-service.jpg';
import { ServiceInfo } from '../type';

export const services: Readonly<ServiceInfo[]> = Object.freeze([
  {
    title: 'طراحی جدید',
    description:
      'اینجا میتوانید کمی در مورد خودتون صحبت و توضیح دهید که چه خدماتی ارائه میدهید',
    image: DesignServiceImage,
    tags: [
      {
        label: 'Marketing',
        color: '#5274F9',
        link: '#',
      },
      {
        label: 'SEO',
        color: '#5274F9',
        link: '#',
      },
    ],
  },
  {
    title: 'خدمات مالی',
    description:
      'اینجا میتوانید کمی در مورد خودتون صحبت و توضیح دهید که چه خدماتی ارائه میدهید',
    image: FinancialServiceImage,
    tags: [
      {
        label: 'Safety Pay',
        color: '#28AE3D',
        link: '#',
      },
      {
        label: 'Best Invest',
        color: '#28AE3D',
        link: '#',
      },
    ],
  },
  {
    title: 'طراحی جدید',
    description:
      'اینجا میتوانید کمی در مورد خودتون صحبت و توضیح دهید که چه خدماتی ارائه میدهید',
    image: ItServiceImage,
    tags: [
      {
        label: 'IT Solution',
        color: '#FB874F',
        link: '#',
      },
      {
        label: 'Web Design',
        color: '#FB874F',
        link: '#',
      },
    ],
  },
]);
