import logoImage from '@/../public/images/logo.svg';
import Image from 'next/image';

function Logo() {
  return (
    <a href="/">
      <h1>
        <Image src={logoImage} alt="Lead Generation Company" />
      </h1>
    </a>
  );
}

export default Logo;
