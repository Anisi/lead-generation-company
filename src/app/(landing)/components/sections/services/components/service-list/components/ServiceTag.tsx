import Link from 'next/link';
import styled from 'styled-components';

const ServiceTag = styled(Link)<{ $color: string }>`
  display: block;
  padding: 4px 8px;
  min-width: 100px;
  text-align: center;
  border-radius: 4px;
  color: ${({ $color }) => $color};
  background-color: ${({ $color }) => `${$color}1A`};
`;

export default ServiceTag;
