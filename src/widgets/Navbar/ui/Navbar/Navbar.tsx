import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { PATHS } from '@/shared/config';
import { classNames } from '@/shared/lib';
import { Link } from '@/shared/ui';

import styles from './Navbar.module.scss';

type NavbarProps = {
  className?: string;
};

export const Navbar: FC<NavbarProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <div className={classNames(styles.container, {}, [className])}>
      <div className={classNames(styles.navigate)}>
        <Link to={PATHS.main}>{t('main.main', 'Main')}</Link>

        <Link to={PATHS.about} linkType="inverted">
          {t('main.linkAbout', 'About')}
        </Link>
      </div>
    </div>
  );
};
