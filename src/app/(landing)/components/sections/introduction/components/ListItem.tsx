import { Text } from '@/app/components/typography';
import styled from 'styled-components';

const ListItem = styled(Text).attrs({ as: 'li' })`
  padding-right: 32px;
  position: relative;
  color: inherit;
  text-align: inherit;

  &:not(:last-child) {
    margin-bottom: 32px;
  }

  &:before {
    content: '';
    position: absolute;
    right: 0;
    top: 4px;
    display: block;
    color: #ffffff;
    background-color: #ffffff;
    border-radius: 50%;
    width: 16px;
    height: 16px;
  }
`;

export default ListItem;
