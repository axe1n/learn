import { Themes } from '../constants/constants';

export type ThemeContextType = {
  theme: Themes;
  setTheme: (theme: Themes) => void;
};
