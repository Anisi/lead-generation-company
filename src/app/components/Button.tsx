import styled from 'styled-components';

const Button = styled.button<{
  $outline?: boolean;
  $color?: 'default' | 'primary';
}>`
  padding: 8px 20px;
  min-height: 50px;
  min-width: 220px;
  border-radius: 4px;
  font-size: 1.42em;
  font-weight: 500;
  background-color: ${(props) =>
    props.$color === 'primary'
      ? '#5274F9'
      : props.$outline
        ? 'transparent'
        : '#FFFFFF'};
  border: ${(props) => (props.$outline ? '1px solid #FFFFFF' : 'none')};
  color: #ffffff;

  @media (max-width: 992px) {
    min-height: 43px;
    min-width: 140px;
  }
`;

export default Button;
