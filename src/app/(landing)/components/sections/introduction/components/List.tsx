import Typography from '@/app/components/typography/Typography';
import styled from 'styled-components';

const List = styled(Typography).attrs({ as: 'ul' })`
  list-style: none;
`;

export default List;
