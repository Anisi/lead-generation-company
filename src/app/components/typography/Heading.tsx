import Typography from '@/app/components/typography/Typography';
import styled from 'styled-components';

export const Heading = styled(Typography)<{
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  $fontSize?: number;
}>`
  font-weight: ${({ as }) => (['h1', 'h2'].includes(as) ? 700 : 400)};
`;
