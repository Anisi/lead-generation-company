'use client';

import { Career } from '@/app/(landing)/components/career/Career';
import { ClientsSection } from '@/app/(landing)/components/clients';
import { Footer } from '@/app/(landing)/components/footer';
import { HeaderSection } from '@/app/(landing)/components/header';
import { IntroductionSection } from '@/app/(landing)/components/introduction';
import { ServicesSection } from '@/app/(landing)/components/services';
import Main from '@/app/components/Main';

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
