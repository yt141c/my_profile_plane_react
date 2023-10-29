import { forwardRef, ForwardRefRenderFunction } from 'react';
import { MainContainer } from './main.styles';
import Profile from '../profile/profile.component';
import Portfolios from '../portfolios/portfolios';

const Main: ForwardRefRenderFunction<HTMLDivElement> = (_, ref) => {
  return (
    <MainContainer ref={ref}>
      <Profile />
      <Portfolios />
      {/* <ProfileSection />
      <PortfolioSection />
      <MenuSection />
      <ContactSection /> */}
    </MainContainer>
  );
};

export default forwardRef(Main);
