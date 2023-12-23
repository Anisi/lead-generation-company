import Card from '@/app/components/Card';
import styled from 'styled-components';

const ServiceInfo = styled(Card)`
  padding: 24px;
  margin: 0 25px;
  position: relative;
  top: -30px;

  @media (max-width: 992px) {
    margin: 0 14px;
  }
`;

export default ServiceInfo;
