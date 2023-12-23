import Image from 'next/image';
import styled from 'styled-components';

const Logo = styled(Image)`
  width: 30px;
  height: 100%;

  @media (min-width: 1200px) {
    width: 90px;
    height: 100%;
  }

  @media (min-width: 768px) {
    width: 60px;
    height: 100%;
  }
`;

export default Logo;
