import { FC, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { PageLoader } from '@/widgets/PageLoader';

import { routerConfig } from './config/config';

export const AppRouter: FC = () => {
  return (
    <Routes>
      {Object.values(routerConfig).map(({ element, path }) => (
        <Route
          key={path}
          path={path}
          element={
            <Suspense fallback={<PageLoader />}>
              <div className="pageWrapper">{element}</div>
            </Suspense>
          }
        />
      ))}
    </Routes>
  );
};
