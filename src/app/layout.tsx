import StyledComponentsRegistry from '@/lib/registery'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import React from "react";
import './globals.css'

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Lead Generation', description: 'به راحتی خدمات مورد نیاز خودتو پیدا کن',
}

export default function RootLayout({children}: { children: React.ReactNode }) {
  return (<html>
  <body>
  <StyledComponentsRegistry>
    {children}
  </StyledComponentsRegistry>
  </body>
  </html>)
}
