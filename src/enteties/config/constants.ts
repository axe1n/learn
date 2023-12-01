import { AppRoutes } from './types';

export enum Themes {
  DARK = 'dark',
  LIGHT = 'light',
}

export const PATHS: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
};

export const LOCAL_STORAGE_KEY = {
  theme: 'theme',
};
