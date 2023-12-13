import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib';

import styles from './NotFoundPage.module.scss';

type NotFoundPageProps = {
  className?: string;
};

export const NotFoundPage: FC<NotFoundPageProps> = (props) => {
  const { className } = props;

  const { t } = useTranslation();

  return (
    <div className={classNames(styles.container, {}, [className])}>
      {t('notFoundPage.pageNotFound', 'Page not found')}
    </div>
  );
};
