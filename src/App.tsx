import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { PATHS, Themes } from './constants/constants';
import { AboutPageLazy } from './pages/About/AboutPage.lazy';
import { MainPageLazy } from './pages/Main/MainPage.lazy';
import { Suspense, useContext } from 'react';

import './styles/index.scss';
import { useTheme } from './theme/useTheme';

export const App = () => {
  const { theme, toogleTheme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <button onClick={toogleTheme}>Change theme</button>

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
};
