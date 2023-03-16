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
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
