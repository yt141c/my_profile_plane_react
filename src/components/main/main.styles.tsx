import React from 'react';
import { styled } from 'styled-components';

const UnstyledMainContainer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  return <div {...props} ref={ref} />;
});

export const MainContainer = styled(UnstyledMainContainer)`
  width: 100;
  min-height: 100vh;
  background-color: #eeeeee;
`;
