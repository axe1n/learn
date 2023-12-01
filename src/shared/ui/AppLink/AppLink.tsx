import { FC, memo } from 'react';
import { classNames } from '@/shared/lib';

import styles from './AppLink.module.scss';
import { Link } from 'react-router-dom';

type LinkType = 'primary' | 'inverted';

type AppLinkProps = {
  to: string;
  linkType?: LinkType;
  className?: string;
};

export const AppLink: FC<AppLinkProps> = (props) => {
  const { children, to, linkType = 'primary', className } = props;

  return (
    <Link
      to={to}
      className={classNames(styles.container, {}, [
        className,
        styles[linkType],
      ])}
    >
      {children}
    </Link>
  );
};
