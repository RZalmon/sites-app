import './App.css';

import { createBrowserHistory } from 'history';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import EditSite from './pages/EditSite/EditSite';
import SiteApp from './pages/SiteApp/SiteApp';

const history = createBrowserHistory();


function App() {
  return (
    <div className="App">
      <Router history={history}>
        <main>
          <Routes>
            <Route path="/" element={<SiteApp />} />
            <Route path="/edit" element={<EditSite />} />
            <Route path="/edit/:siteId" element={<EditSite />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
