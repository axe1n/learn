import { Themes } from '../../enteties/config/constants';

export type ThemeContextType = {
  theme: Themes;
  setTheme: (theme: Themes) => void;
};
