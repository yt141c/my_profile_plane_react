import styled from 'styled-components';
import media from '../../theme/mediaquery/mediaquery.styles';

export const PortfoliosComponent = styled.div`
  background-color: #fff;
  padding: 64px;
  .portfolios {
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 32px;
  }
  .works {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  ${media.phone`
    background-color: #fff;
    padding: 48px 16px;
    .portfolios {
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 32px;
    }
    .works {
      display: block;
    }
  `}
`;
