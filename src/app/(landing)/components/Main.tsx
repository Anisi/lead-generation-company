import styled from 'styled-components';

const Main = styled.main`
  font-size: 14px;

  @media (max-width: 576px) {
    font-size: calc(14px * 0.9);
  }

  width: 100%;
`;

export default Main;
