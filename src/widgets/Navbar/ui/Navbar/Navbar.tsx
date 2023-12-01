import { FC } from 'react';
import { classNames } from '@/entities/lib';

import { PATHS } from '@/entities/config';

import styles from './Navbar.module.scss';
import { Link, ThemeSwitcher } from '@/entities/ui';

type NavbarProps = {
  className?: string;
};

export const Navbar: FC<NavbarProps> = (props) => {
  const { className } = props;

  return (
    <div className={classNames(styles.container, {}, [className])}>
      <div className={classNames(styles.navigate)}>
        <ThemeSwitcher />

        <Link to={PATHS.main}>Main</Link>

        <Link to={PATHS.about} linkType="inverted">
          About
        </Link>
      </div>
    </div>
  );
};
