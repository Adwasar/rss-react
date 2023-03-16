import { Routes, Route, NavLink } from 'react-router-dom';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { NotFoundPage } from './pages/NotFoundPage';

import './App.scss';

function App() {
  return (
    <>
      <header>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About Us</NavLink>
      </header>
      <main>
        <div className={'filter-board'}>
          <div className="wrapper">
            <div className={'search-wrapper'}>
              <input type="text" />
              <button>Search</button>
            </div>
          </div>
        </div>
        <div className="wrapper">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </main>
    </>
  );
}

export default App;
