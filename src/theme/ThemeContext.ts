import { createContext } from 'react';
import { ThemeContextType } from '../types/types';
import { Themes } from '../constants/constants';

export const ThemeContext = createContext<ThemeContextType>({
  theme: Themes.LIGHT,
  setTheme: (theme: Themes) => {},
});
