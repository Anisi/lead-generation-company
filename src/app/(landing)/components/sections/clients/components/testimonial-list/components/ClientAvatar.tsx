import Image from 'next/image';
import styled from 'styled-components';

const ClientAvatar = styled.div`
  position: relative;
  border-radius: 50%;
  width: 64px;
  height: 64px;

  @media (min-width: 992px) {
    width: 86px;
    height: 86px;
    min-width: 86px;
  }
`;

export default ClientAvatar;
