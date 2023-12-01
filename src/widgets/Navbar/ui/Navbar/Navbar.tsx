import { FC } from 'react';
import { classNames } from '@/enteties/lib';

import { PATHS } from '@/enteties/config';

import styles from './Navbar.module.scss';
import { Link } from '@/enteties/ui';

type NavbarProps = {
  className?: string;
};

export const Navbar: FC<NavbarProps> = (props) => {
  const { className } = props;

  return (
    <div className={classNames(styles.container, {}, [className])}>
      <div className={classNames(styles.links)}>
        <Link to={PATHS.main}>Main</Link>
        <Link to={PATHS.about} linkType="inverted">
          About
        </Link>
      </div>
    </div>
  );
};
