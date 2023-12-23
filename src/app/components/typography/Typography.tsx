import styled from 'styled-components';

const Typography = styled.p<{
  $color?: 'normal' | 'gray' | 'white';
  $textAlign?: string;
  $fontSize?: number;
}>`
  font-weight: normal;
  font-size: ${({ $fontSize }) => ($fontSize ? $fontSize : '1')}em;
  color: ${({ $color }) =>
    $color === 'gray' ? '#999999' : $color === 'white' ? '#FFFFFF' : '#000000'};
  line-height: 1.5;
  text-align: ${({ $textAlign }) => $textAlign ?? 'center'};
`;

export default Typography;
