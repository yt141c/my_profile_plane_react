import { styled } from 'styled-components';

export const AppOuterComponent = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #eeeeee;
  display: none;
  &.visible {
    display: block;
  }
`;
