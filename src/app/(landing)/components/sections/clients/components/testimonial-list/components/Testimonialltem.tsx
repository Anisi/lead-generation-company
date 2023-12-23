import Card from '@/app/(landing)/components/Card';
import styled from 'styled-components';

const TestimonialItem = styled(Card)`
  padding: 56px;
  border-radius: 16px;
  align-items: flex-start;

  @media (max-width: 992px) {
    align-items: center;
    padding: 26px;
  }
`;

export default TestimonialItem;
