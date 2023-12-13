import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib';
import { Button } from '@/shared/ui';

import styles from './LanguageSwitcher.module.scss';

type LanguageSwitcherProps = {
  className?: string;
};

export const LanguageSwitcher: FC<LanguageSwitcherProps> = (props) => {
  const { className } = props;

  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button
      onClick={toggleLanguage}
      buttonTheme="clear"
      className={classNames(styles.container, {}, [className])}
    >
      {t('languageSwitcher.language', 'En')}
    </Button>
  );
};
