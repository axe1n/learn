import { FC } from 'react';

import { classNames } from '@/shared/lib';
import { Loader } from '@/shared/ui';

import styles from './PageLoader.module.scss';

type PageLoaderProps = {
  className?: string;
};

export const PageLoader: FC<PageLoaderProps> = (props) => {
  const { className } = props;

  return (
    <div className={classNames(styles.container, {}, [className])}>
      <Loader />
    </div>
  );
};
