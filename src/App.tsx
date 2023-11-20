import './App.css';

import { PageProvider } from './context/page.context';
import AppOuter from './components/app-outer/app-outer.component';

function App() {
  return (
    <div className="App">
      <PageProvider>
        <AppOuter />
      </PageProvider>
    </div>
  );
}

export default App;
