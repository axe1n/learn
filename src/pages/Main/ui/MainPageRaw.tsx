import { FC } from 'react';

import styles from './MainPageRaw.module.scss';
import { useTranslation } from 'react-i18next';
import { i18nNamespace } from '@/shared/config';

type MainPageProps = {
  className?: string;
};

const MainPageRaw: FC<MainPageProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation(i18nNamespace.MAIN_PAGE);

  return (
    <div className={(styles.container, className)}>
      {t('mainPage.mainPage')}
    </div>
  );
};

export default MainPageRaw;
