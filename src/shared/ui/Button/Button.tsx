import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from '@/shared/lib';

import styles from './Button.module.scss';

type ButtonThemeType = 'clear';

type ButtonType = {
  buttonTheme?: ButtonThemeType;
  className?: string;
};

type ButtonProps = ButtonType & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps> = (props) => {
  const { children, buttonTheme, className, ...otherProps } = props;

  return (
    <button
      className={classNames(styles.container, {}, [
        className,
        styles[buttonTheme],
      ])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
