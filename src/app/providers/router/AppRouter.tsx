import { FC, Suspense } from 'react';

import { Route, Routes } from 'react-router-dom';
import { routerConfig } from './config/config';

export const AppRouter: FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {Object.values(routerConfig).map(({ element, path }) => (
          <Route
            key={path}
            path={path}
            element={<div className="pageWrapper">{element}</div>}
          />
        ))}
      </Routes>
    </Suspense>
  );
};
