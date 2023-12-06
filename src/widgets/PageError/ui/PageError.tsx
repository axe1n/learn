import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib';
import { Button } from '@/shared/ui';

import styles from './PageError.module.scss';

type PageErrorProps = {
  className?: string;
};

export const PageError: FC<PageErrorProps> = (props) => {
  const { className } = props;

  const { t } = useTranslation();

  const reloadPage = () => {
    location.reload();
  };

  return (
    <div className={classNames(styles.container, {}, [className])}>
      <p>{t('pageError.somethingWentWrong')}</p>
      <Button onClick={reloadPage}>{t('pageError.reloadPage')}</Button>
    </div>
  );
};
