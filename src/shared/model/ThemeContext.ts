import { createContext } from 'react';

import { ThemeContextType } from '../../app/types/types';
import { Themes } from '../config/constants';

export const ThemeContext = createContext<ThemeContextType>({
  theme: Themes.LIGHT,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setTheme: (theme: Themes) => {},
});
