import { FC } from 'react';
import { classNames } from '@/entities/lib';

import styles from './ThemeSwitcher.module.scss';
import { useTheme } from '@/entities/hooks';
import { Themes } from '@/entities/config';
import LightIcon from '@/entities/assets/icons/theme-light.svg';
import DarkIcon from '@/entities/assets/icons/theme-dark.svg';
import { Button } from '../Button/Button';

type ThemeSwitcherProps = {
  className?: string;
};

export const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
  const { className } = props;
  const { theme, toogleTheme } = useTheme();

  return (
    <Button
      onClick={toogleTheme}
      buttonTheme="clear"
      className={classNames(styles.container, {}, [className])}
    >
      {theme === Themes.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
};
