import { useContext } from 'react';

import './App.css';

import { PageProvider, PageContext } from './context/page.context';
import AppWrapper from './components/appWrapper/appWrapper.component';

function App() {
  const { state } = useContext(PageContext);
  console.log('app', state);
  return (
    <div className="App">
      <PageProvider>
        <AppWrapper />
      </PageProvider>
    </div>
  );
}

export default App;
