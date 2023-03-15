import { Routes, Route, Link, NavLink } from 'react-router-dom';

import { HomePage } from './pages/HomePage';
import { BlogPage } from './pages/BlogPage';
import { AboutPage } from './pages/AboutPage';
import { NotFoundPage } from './pages/NotFoundPage';

import './App.css';

function App() {
  return (
    <>
      <header>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/posts">Blog</NavLink>
        <NavLink to="/about">About</NavLink>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts" element={<BlogPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
