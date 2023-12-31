import { LOCAL_STORAGE_KEY, Themes } from './constants';

export const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_KEY.theme) as Themes) || Themes.LIGHT;
