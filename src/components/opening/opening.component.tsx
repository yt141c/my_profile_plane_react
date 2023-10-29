// src/components/opening/opening.component.tsx

import React, { useEffect, useContext, Fragment } from 'react';
import { OpeningComponent } from './opening.styles';
import { PageContext } from '../../context/page.context';

const PRESSED_KEY_TYPE = 'Enter';
const SHOWED_STRING = "show141'sProfile();";
const TYPING_SPEED = 150;

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
          payload: char, // pass the new char as a payload
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
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isAnimeFinished) return;

      const { key } = event;
      if (key === PRESSED_KEY_TYPE) {
        dispatch({ type: 'SET_PRESSED_ENTER', payload: true });
        console.log('次のページへ');
      }
      setTimeout(
        () => {
          dispatch({
            type: 'SET_SCROLL_TO_MAIN_FINISHED',
            payload: true,
          });
        },

        2000
      );
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [dispatch, isAnimeFinished]);

  return (
    <Fragment>
      <OpeningComponent className={isPressedEnter ? 'stop' : ''}>
        {state.showedString}
      </OpeningComponent>
    </Fragment>
  );
};

export default Opening;
