import React, {
  FC,
  useReducer,
  createContext,
  Dispatch,
  ReactNode,
} from 'react';

type PageState = {
  isLoading: boolean;
  isAnimeFinished: boolean;
  isPressedEnter: boolean;
  isScrollToMainFinished: boolean;
  showedString: string;
};

type ProviderProps = {
  children: ReactNode;
};

type PageAction =
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ANIME_FINISHED'; payload: boolean }
  | { type: 'SET_PRESSED_ENTER'; payload: boolean }
  | { type: 'SET_SHOWED_STRING'; payload: string }
  | { type: 'SET_SCROLL_TO_MAIN_FINISHED'; payload: boolean };

const initialState: PageState = {
  isLoading: true,
  isAnimeFinished: false,
  isPressedEnter: false,
  showedString: '',
  isScrollToMainFinished: false,
};

const PageContext = createContext<{
  state: PageState;
  dispatch: Dispatch<PageAction>;
}>({
  state: initialState,
  dispatch: () => undefined,
});

const pageReducer = (state: PageState, action: PageAction): PageState => {
  const { type, payload } = action;
  switch (type) {
    case 'SET_LOADING':
      return { ...state, isLoading: payload };
    case 'SET_ANIME_FINISHED':
      return { ...state, isAnimeFinished: payload };
    case 'SET_PRESSED_ENTER':
      return { ...state, isPressedEnter: payload };
    case 'SET_SCROLL_TO_MAIN_FINISHED':
      return { ...state, isScrollToMainFinished: payload };
    case 'SET_SHOWED_STRING':
      return {
        ...state,
        showedString: state.showedString + payload,
      };
    default:
      return state;
  }
};

const PageProvider: FC<ProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(pageReducer, initialState);

  return (
    <PageContext.Provider value={{ state, dispatch }}>
      {children}
    </PageContext.Provider>
  );
};

export { PageContext, PageProvider };
