import StyledComponentsRegistry from '@/lib/registery';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import React from 'react';
import './globals.css';

const iranSansFont = localFont({
  src: [
    {
      path: '../../public/fonts/IRANSansX-Regular.woff2',
      weight: 'normal',
    },
    {
      path: '../../public/fonts/IRANSansX-Regular.woff',
      weight: 'normal',
    },
    {
      path: '../../public/fonts/IRANSansX-Bold.woff',
      weight: 'bold',
    },
    {
      path: '../../public/fonts/IRANSansX-Bold.woff2',
      weight: 'bold',
    },
  ],
});

export const metadata: Metadata = {
  title: 'Lead Generation',
  description: 'به راحتی خدمات مورد نیاز خودتو پیدا کن',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className={iranSansFont.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
