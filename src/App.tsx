import { Routes, Route, Navigate } from 'react-router-dom';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { FormPage } from './pages/FormPage';
import { NotFoundPage } from './pages/NotFoundPage';

import './App.scss';

function App() {
  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<HomePage title="Home" />} />
          <Route path="/about" element={<AboutPage title="About" />} />
          <Route path="/form" element={<FormPage title="Form" />} />
          <Route path="*" element={<Navigate to="/404" />} />
          <Route path="/404" element={<NotFoundPage title="NotFound" />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
