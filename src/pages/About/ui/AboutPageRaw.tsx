import { FC } from 'react';

import styles from './AboutPageRaw.module.scss';
import { useTranslation } from 'react-i18next';
import { i18nNamespace } from '@/shared/config';

type AboutPageProps = {
  className?: string;
};

const AboutPageRaw: FC<AboutPageProps> = (props) => {
  const { className } = props;

  const { t } = useTranslation(i18nNamespace.ABOUT_PAGE);

  return (
    <div className={(styles.container, className)}>
      {t('aboutPage.aboutPage')}
    </div>
  );
};

export default AboutPageRaw;
