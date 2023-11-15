// src/components/opening/opening.component.tsx

import React, { useEffect, useContext, Dispatch, FC } from 'react';
import { OpeningComponent } from './opening.styles';
import { PageContext, PageAction } from '../../context/page.context';

const PRESSED_KEY_TYPE = 'Enter';
const SHOWED_STRING = 'pressEnterOrTap();';
const TYPING_SPEED = 150;
const WAITING_TIME_FOR_ENABLE_SCROLL = 1400;

const useAnimeEvent = ({
  isAnimeFinished,
  isPressedEnter,
  dispatch,
}: {
  isAnimeFinished: boolean;
  isPressedEnter: boolean;
  dispatch: Dispatch<PageAction>;
}) => {
  const triggerEvent = () => {
    if (!isAnimeFinished || isPressedEnter) return;

    dispatch({ type: 'SET_PRESSED_ENTER', payload: true });
    setTimeout(() => {
      dispatch({
        type: 'SET_SCROLL_TO_MAIN_FINISHED',
        payload: true,
      });
    }, WAITING_TIME_FOR_ENABLE_SCROLL);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === PRESSED_KEY_TYPE) {
        triggerEvent();
      }
    };

    const handleTouchEnd = () => {
      triggerEvent();
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('touchend', handleTouchEnd);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAnimeFinished, isPressedEnter]);
};

const Opening: FC = () => {
  const { state, dispatch } = useContext(PageContext);
  const { isAnimeFinished, isPressedEnter } = state;
  useAnimeEvent({ isAnimeFinished, isPressedEnter, dispatch });

  const typewriter = (typingSpeed: number, strings: string) => {
    const eachStrings = strings.split('');

    eachStrings.forEach((char, index) => {
      const letterWaitingTime = index * typingSpeed;
      setTimeout(() => {
        dispatch({
          type: 'SET_SHOWED_STRING',
          payload: char,
        });
      }, letterWaitingTime);
    });

    const lettersWatingTime = eachStrings.length * typingSpeed;
    setTimeout(
      () => dispatch({ type: 'SET_ANIME_FINISHED', payload: true }),
      lettersWatingTime
    );
  };

  useEffect(() => {
    typewriter(TYPING_SPEED, SHOWED_STRING);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useAnimeEvent({ isAnimeFinished, isPressedEnter, dispatch });

  return (
    <OpeningComponent className={isPressedEnter ? 'stop' : ''}>
      {state.showedString}
    </OpeningComponent>
  );
};

export default Opening;
