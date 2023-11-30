import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Suspense } from 'react';

import './styles/index.scss';
import { useTheme } from '@/enteties/hooks';
import { classNames } from '@/enteties/lib';
import { PATHS } from '@/enteties/config';
import { MainPage } from '@/pages/Main/MainPage.lazy';
import { AboutPage } from '@/pages/About/AboutPage.lazy';

export const App = () => {
  const { theme, toogleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toogleTheme}>Change theme</button>

      <Link to={PATHS.main}>Main</Link>
      <Link to={PATHS.about}>About</Link>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={PATHS.main} element={<MainPage />} />
          <Route path={PATHS.about} element={<AboutPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};
