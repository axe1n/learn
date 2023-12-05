import { FC } from 'react';

import { classNames } from '@/shared/lib';

import styles from './Loader.module.scss';

type LoaderProps = {
  className?: string;
};

export const Loader: FC<LoaderProps> = (props) => {
  const { className } = props;

  return <div className={classNames(styles.container, {}, [className])} />;
};
