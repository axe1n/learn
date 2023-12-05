import { RouteProps } from 'react-router-dom';

import { AppRoutes, PATHS } from '@/shared/config';

import { AboutPage } from '@/pages/About/AboutPage.lazy';
import { MainPage } from '@/pages/Main/MainPage.lazy';
import { NotFoundPage } from '@/pages/NotFoundPage/NotFoundPage';

export const routerConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: { path: PATHS.main, element: <MainPage /> },
  [AppRoutes.ABOUT]: { path: PATHS.about, element: <AboutPage /> },
  [AppRoutes.NOT_FOUND]: {
    path: PATHS.notFound,
    element: <NotFoundPage />,
  },
};
