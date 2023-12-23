'use client';

import Main from '@/app/(landing)/components/Main';
import { Career } from '@/app/(landing)/components/sections/career/Career';
import { ClientsSection } from '@/app/(landing)/components/sections/clients';
import { Footer } from '@/app/(landing)/components/sections/footer';
import { HeaderSection } from '@/app/(landing)/components/sections/header';
import { IntroductionSection } from '@/app/(landing)/components/sections/introduction';
import { ServicesSection } from '@/app/(landing)/components/sections/services';

export default function Home() {
  return (
    <Main>
      <header>
        <HeaderSection />
      </header>
      <ServicesSection />
      <IntroductionSection />
      <ClientsSection />
      <footer>
        <Career />
        <Footer />
      </footer>
    </Main>
  );
}
