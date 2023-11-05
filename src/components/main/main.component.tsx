import { forwardRef, ForwardRefRenderFunction } from 'react';

import { MainContainer } from './main.styles';
import Profile from '../profile/profile.component';
import Portfolios from '../portfolios/portfolios.component';
import Footer from '../footer/footer.component';

const Main: ForwardRefRenderFunction<HTMLDivElement> = (_, refToMain) => {
  return (
    <MainContainer ref={refToMain}>
      <Profile />
      <Portfolios />
      {/* <ProfileSection />
      <PortfolioSection />
      <MenuSection />
      <ContactSection /> */}
      <Footer />
    </MainContainer>
  );
};

export default forwardRef(Main);
