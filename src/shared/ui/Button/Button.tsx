import { ButtonHTMLAttributes, FC } from 'react';

import { classNames } from '@/shared/lib';

import styles from './Button.module.scss';

type ButtonThemeType = 'clear';

type ButtonType = {
  buttonTheme?: ButtonThemeType;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
};

type ButtonProps = ButtonType & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps> = (props) => {
  const {
    children,
    type = 'button',
    buttonTheme,
    className,
    ...otherProps
  } = props;

  return (
    <button
      className={classNames(styles.container, {}, [
        className,
        styles[buttonTheme],
      ])}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...otherProps}
      // eslint-disable-next-line react/button-has-type
      type={type}
    >
      {children}
    </button>
  );
};
