import { FC } from 'react';
import { classNames } from '@/enteties/lib';
import { Link } from 'react-router-dom';

import { PATHS } from '@/enteties/config';

import styles from './Navbar.module.scss';

type NavbarProps = {
  className?: string;
};

export const Navbar: FC<NavbarProps> = (props) => {
  const { className } = props;

  return (
    <div className={classNames(styles.container, {}, [className])}>
      <Link to={PATHS.main}>Main</Link>
      <Link to={PATHS.about}>About</Link>
    </div>
  );
};
