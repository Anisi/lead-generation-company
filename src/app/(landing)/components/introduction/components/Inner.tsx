import Stack from '@/app/components/Stack';
import styled from 'styled-components';

const Inner = styled(Stack)`
  padding: 60px 0;

  & > :first-child {
    order: 1;
  }

  @media (min-width: 992px) {
    & > :first-child {
      order: 0;
    }
  }

  @media (min-width: 768px) {
    padding: 50px 70px;
  }
`;

export default Inner;
