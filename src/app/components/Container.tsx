import styled from 'styled-components';

const Container = styled.div`
  @media (0 <= width <= 575.99px) {
    max-width: 576px;
  }

  @media (576px <= width <= 767.99px) {
    max-width: 768px;
  }

  @media (768px <= width <= 991.99px) {
    max-width: 992px;
  }

  @media (992px <= width <= 1199.99px) {
    max-width: 1200px;
  }

  @media (width >= 1200px) {
    max-width: 1400px;
  }
`;

export default Container;
