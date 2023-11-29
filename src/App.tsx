import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { PATHS } from './config/constants';
import { AboutPageLazy } from './pages/About/AboutPage.lazy';
import { MainPageLazy } from './pages/Main/MainPage.lazy';
import { Suspense } from 'react';

export const App = () => (
  <div className="app">
    <Link to={PATHS.main}>Main</Link>
    <Link to={PATHS.about}>About</Link>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path={PATHS.about} element={<AboutPageLazy />} />
        <Route path={PATHS.main} element={<MainPageLazy />} />
      </Routes>
    </Suspense>
  </div>
);
