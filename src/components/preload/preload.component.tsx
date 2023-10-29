import React, { FC, useContext, useEffect } from 'react';
import PreloadContainer from './preload.styles';
import Spinner from '../spinner/spinner.component';
import Opening from '../opening/opening.component';
import { PageContext } from '../../context/page.context';

const LOADING_TIME = 2000;

const Preload: FC = () => {
  const { state, dispatch } = useContext(PageContext);

  useEffect(() => {
    const timeoutPromise = new Promise<void>((resolve) =>
      setTimeout(resolve, LOADING_TIME)
    );

    timeoutPromise.then(() => {
      dispatch({ type: 'SET_LOADING', payload: false });
    });
  }, [dispatch]);

  return (
    <PreloadContainer>
      {state.isLoading ? <Spinner /> : <Opening />}
    </PreloadContainer>
  );
};

export default Preload;
