import { FC } from 'react';
import { classNames } from '@/shared/lib';

import styles from './ThemeSwitcher.module.scss';
import { useTheme } from '@/shared/hooks';
import { Themes } from '@/shared/config';
import LightIcon from '@/shared/assets/icons/theme-light.svg';
import DarkIcon from '@/shared/assets/icons/theme-light.svg';
import { Button } from '../../../../shared/ui/Button/Button';

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
