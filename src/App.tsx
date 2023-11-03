import { useContext } from 'react';

import './App.css';

import { PageProvider, PageContext } from './context/page.context';
import AppOuter from './components/app-outer/app-outer.component';

function App() {
  const { state } = useContext(PageContext);
  console.log('app', state);
  return (
    <div className="App">
      <PageProvider>
        <AppOuter />
      </PageProvider>
    </div>
  );
}

export default App;
