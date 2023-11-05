import styled from 'styled-components';
import media from '../../theme/mediaquery/mediaquery.styles';

export const TimelineComponent = styled.ul`
  list-style: none;

  ${media.phone`
    margin-top: 36px;
  `}
`;
