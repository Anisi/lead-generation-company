import Avatar1 from '@/../public/images/testimonial-avatar-1.jpg';
import Avatar2 from '@/../public/images/testimonial-avatar-2.jpg';
import { Testimonial } from '../type';

export const testimonials: Readonly<Testimonial[]> = Object.freeze([
  {
    text: 'این یک پاراگراف است. برای افزودن یا ویرایش متن خود اینجا را کلیک کنید. این متن باید برای گفتن یک داستان مورد استفاده قرار گیرد و کاربران اطلاعات بیشتری بدست آورند.',
    author: {
      fullName: 'سهراب یزدانی',
      company: 'اسم شرکت',
      position: 'عنوان شغل',
      avatar: Avatar1,
    },
  },
  {
    text: 'این یک پاراگراف است. برای افزودن یا ویرایش متن خود اینجا را کلیک کنید. این متن باید برای گفتن یک داستان مورد استفاده قرار گیرد و کاربران اطلاعات بیشتری بدست آورند.',
    author: {
      fullName: 'علی جوانمردی',
      company: 'اسم شرکت',
      position: 'عنوان شغل',
      avatar: Avatar2,
    },
  },
]);
