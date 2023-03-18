import { Routes, Route } from 'react-router-dom';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { NotFoundPage } from './pages/NotFoundPage';

import './App.scss';

function App() {
  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<HomePage title="Home" />} />
          <Route path="/about" element={<AboutPage title="About" />} />
          <Route path="*" element={<NotFoundPage title="NotFound" />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
