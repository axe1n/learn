import { Themes } from '../../entities/config/constants';

export type ThemeContextType = {
  theme: Themes;
  setTheme: (theme: Themes) => void;
};
