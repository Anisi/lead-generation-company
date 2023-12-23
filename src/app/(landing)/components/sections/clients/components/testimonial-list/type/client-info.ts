import { StaticImageData } from 'next/dist/shared/lib/get-img-props';

export type ClientInfo = {
  fullName: string;
  company: string;
  position: string;
  avatar: StaticImageData;
};
