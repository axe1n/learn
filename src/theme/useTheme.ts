import { useContext } from 'react';
import { LOCAL_STORAGE_KEY, Themes } from '../constants/constants';
import { ThemeContext } from './ThemeContext';

type useThemeType = {
  theme: Themes;
  toogleTheme: () => void;
};

export const useTheme = (): useThemeType => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toogleTheme = () => {
    const newTheme = theme === Themes.DARK ? Themes.LIGHT : Themes.DARK;

    setTheme(newTheme);

    localStorage.setItem(LOCAL_STORAGE_KEY.theme, newTheme);
  };
  return { theme, toogleTheme };
};