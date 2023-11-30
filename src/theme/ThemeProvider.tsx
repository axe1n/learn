import { FC, useMemo, useState } from 'react';
import { ThemeContext } from './ThemeContext';
import { Themes } from '../constants/constants';
import { defaultTheme } from '../config/config';

export const ThemeProvider: FC = (props) => {
  const { children } = props;

  const [theme, setTheme] = useState<Themes>(defaultTheme);

  const defaultProps = useMemo(
    () => ({ theme: theme, setTheme: setTheme }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};
