import { styled } from 'styled-components';

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
    opacity: 0;
    transform: translateX(-20%);
  }
  .animate-fade {
    animation: fadeInLeft 0.8s ease-in-out forwards;
  }
  @keyframes fadeInLeft {
    from {
      opacity: 0;
      transform: translateX(-10%);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;
