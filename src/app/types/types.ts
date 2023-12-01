import { Themes } from '../../shared/config/constants';

export type ThemeContextType = {
  theme: Themes;
  setTheme: (theme: Themes) => void;
};
