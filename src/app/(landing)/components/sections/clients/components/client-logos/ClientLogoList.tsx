import Stack from '@/app/components/Stack';
import { clientLogos } from './data';
import Logo from './Logo';

export function ClientLogoList() {
  return clientLogos.length ? (
    <Stack $direction="horizontal" $gap="60px" $mobileGap="16px">
      {clientLogos.map((clientLogo) => (
        <Logo src={clientLogo} alt="client logo" key={clientLogo.src} />
      ))}
    </Stack>
  ) : null;
}
