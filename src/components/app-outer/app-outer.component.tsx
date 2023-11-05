import { FC, Fragment, useContext, useLayoutEffect, useRef } from 'react';
import { PageContext } from '../../context/page.context';
import { disableScroll, enableScroll } from '../../utils/scroll/scroll.utils';

import Preload from '../preload/preload.component';
import Main from '../main/main.component';
import { AppOuterPadding } from './app-outer.styles';

const DELAY_TIME_FOR_START_SCROLL = 600;

const AppOuter: FC = () => {
  const { state } = useContext(PageContext);
  const { isScrollToMainFinished, isPressedEnter } = state;
  const mainElement = useRef<HTMLDivElement>(null);

  const scrollToMain = (refElement: React.RefObject<HTMLDivElement>): void => {
    disableScroll();
    setTimeout(() => {
      refElement.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }, DELAY_TIME_FOR_START_SCROLL);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'auto',
    });
  };

  useLayoutEffect(() => {
    if (isPressedEnter && isScrollToMainFinished) {
      enableScroll();
      scrollToTop();
      return;
    }
    if (!isPressedEnter || !mainElement.current) return;

    scrollToMain(mainElement);
  }, [isPressedEnter, isScrollToMainFinished]);

  return (
    <div className="App-container">
      {!isScrollToMainFinished && (
        <Fragment>
          <Preload />
          <AppOuterPadding className={isPressedEnter ? 'visible' : ''} />
        </Fragment>
      )}
      {isPressedEnter && <Main ref={mainElement} />}
      {/* <Main ref={mainElement} /> */}
    </div>
  );
};

export default AppOuter;
