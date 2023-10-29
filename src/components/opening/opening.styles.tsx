import { styled } from 'styled-components';

export const OpeningComponent = styled.p`
  font-size: 2rem;
  font-weight: bold;
  color: white;
  opacity: 0.7;

  &.stop {
    opacity: 1;
  }

  &::after {
    content: '|';
    animation-name: blink;
    animation-duration: 1s;
    animation-iteration-count: infinite;
  }

  &.stop::after {
    content: '|';
    animation: none;
    color: transparent;
  }

  @keyframes blink {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
