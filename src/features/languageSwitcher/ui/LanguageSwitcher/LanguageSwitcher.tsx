import { FC } from 'react';
import { classNames } from '@/shared/lib';

import styles from './LanguageSwitcher.module.scss';
import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui';

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
      {t('languageSwitcher.language')}
    </Button>
  );
};
