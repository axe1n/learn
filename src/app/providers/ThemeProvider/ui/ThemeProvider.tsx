import { FC, useMemo, useState } from 'react';

import { Themes, defaultTheme } from '@/shared/config';
import { ThemeContext } from '@/shared/model';

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
