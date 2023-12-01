import { AppRoutes } from './types';

export enum Themes {
  DARK = 'dark',
  LIGHT = 'light',
}

export enum i18nNamespace {
  MAIN_PAGE = 'mainPage',
  ABOUT_PAGE = 'aboutPage',
}

export const PATHS: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
};

export const LOCAL_STORAGE_KEY = {
  theme: 'theme',
};
