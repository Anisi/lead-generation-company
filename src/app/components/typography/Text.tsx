import styled from 'styled-components';
import Typography from './Typography';

export const Text = styled(Typography)<{
  $fontWeight?: number;
}>`
  font-weight: ${({ $fontWeight }) => $fontWeight ?? 400};
`;
