import { FC } from 'react';

import DarkIcon from '@/shared/assets/icons/theme-dark.svg';
import LightIcon from '@/shared/assets/icons/theme-light.svg';
import { Themes } from '@/shared/config';
import { useTheme } from '@/shared/hooks';
import { classNames } from '@/shared/lib';
import { Button } from '@/shared/ui';

import styles from './ThemeSwitcher.module.scss';

type ThemeSwitcherProps = {
  className?: string;
};

export const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
  const { className } = props;
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      onClick={toggleTheme}
      buttonTheme="clear"
      className={classNames(styles.container, {}, [className])}
    >
      {theme === Themes.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
};
