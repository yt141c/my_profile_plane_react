import { FC, Fragment, useContext, useLayoutEffect, useRef } from 'react';
import { PageContext } from '../../context/page.context';
import { disableScroll, enableScroll } from '../../utils/scroll/scroll.utils';

import Preload from '../preload/preload.component';
import Main from '../main/main.component';
import { AppWrapperComponent } from './appWrapper.styles';

const AppWrapper: FC = () => {
  const { state } = useContext(PageContext);
  const { isScrollToMainFinished, isPressedEnter } = state;

  const mainElement = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (isPressedEnter && isScrollToMainFinished) {
      enableScroll();
      return;
    }
    if (!isPressedEnter || !mainElement.current) return;

    disableScroll();

    setTimeout(async () => {
      await mainElement.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }, 700);
  }, [isPressedEnter, isScrollToMainFinished]);

  return (
    <div className="App-container">
      {!isScrollToMainFinished && (
        <Fragment>
          <Preload />
          <AppWrapperComponent className={isPressedEnter ? 'visible' : ''} />
        </Fragment>
      )}
      {isPressedEnter && <Main ref={mainElement} />}
    </div>
  );
};

export default AppWrapper;
