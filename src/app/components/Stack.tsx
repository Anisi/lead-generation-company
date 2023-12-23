import styled from 'styled-components';

const Stack = styled.div<{
  $direction: 'vertical' | 'horizontal';
  $mobileDirection?: 'vertical' | 'horizontal';
  $gap?: string;
  $mobileGap?: string;
}>`
  justify-content: normal;
  align-items: center;
  display: flex;
  flex-direction: ${({ $direction }) =>
    $direction === 'vertical' ? 'column' : 'row'};
  gap: ${(props) => props.$gap ?? 0};

  @media (max-width: 992px) {
    flex-direction: ${({ $direction, $mobileDirection }) => {
      if ($mobileDirection)
        return $mobileDirection === 'vertical' ? 'column' : 'row';

      return $direction === 'vertical' ? 'column' : 'row';
    }};

    gap: ${({ $gap, $mobileGap }) => ($mobileGap ? $mobileGap : $gap)};
  }
`;

export default Stack;
