// src/components/opening/opening.component.tsx

import React, { useEffect, useContext, Fragment } from 'react';
import { OpeningComponent } from './opening.styles';
import { PageContext } from '../../context/page.context';

const PRESSED_KEY_TYPE = 'Enter';
const SHOWED_STRING = 'startScrollToProfile();';
const TYPING_SPEED = 150;
const WAITING_TIME_FOR_ENABLE_SCROLL = 1200;

const Opening: React.FC = () => {
  const { state, dispatch } = useContext(PageContext);
  const { isAnimeFinished, isPressedEnter } = state;

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

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isAnimeFinished || isPressedEnter) return;

      const { key } = event;

      switch (key) {
        case PRESSED_KEY_TYPE:
          dispatch({ type: 'SET_PRESSED_ENTER', payload: true });
          setTimeout(
            () => {
              dispatch({
                type: 'SET_SCROLL_TO_MAIN_FINISHED',
                payload: true,
              });
            },

            WAITING_TIME_FOR_ENABLE_SCROLL
          );
          break;
        default:
          return;
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isAnimeFinished]);

  return (
    <Fragment>
      <OpeningComponent className={isPressedEnter ? 'stop' : ''}>
        {state.showedString}
      </OpeningComponent>
    </Fragment>
  );
};

export default Opening;
