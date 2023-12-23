import { StaticImageData } from 'next/dist/shared/lib/get-img-props';
import styled from 'styled-components';

const Section = styled.section<{
  $bgImage?: StaticImageData;
  $bgColor?: string;
}>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 25px;
  background: url(${(props) => (props.$bgImage ? props.$bgImage.src : '')})
    no-repeat center / cover;
  background-color: ${(props) => props.$bgColor};
  box-shadow: ${(props) =>
    props.$bgColor ? props.$bgColor + ' inset 0 0 0 100vw' : 'none'};

  @media (max-width: 992px) {
    padding: 0 25px;
  }
`;

export default Section;
