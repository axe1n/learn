import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib';
import { BugButton, Button } from '@/shared/ui';

import { LanguageSwitcher } from '@/features/languageSwitcher';
import { ThemeSwitcher } from '@/features/themeSwitcher';

import styles from './Sidebar.module.scss';

type SidebarProps = {
  className?: string;
};

export const Sidebar: FC<SidebarProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();

  const [collapser, setCollapsed] = useState(false);

  const onToogle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      className={classNames(
        styles.container,
        { [styles.collapsed]: collapser },
        [className]
      )}
      data-testid="sidebar"
    >
      <Button onClick={onToogle} type="button" data-testid="sidebar-toggle">
        {t('sidebar.toogle', 'Toogle')}
      </Button>

      <div className={classNames(styles.switchers)}>
        <BugButton />

        <LanguageSwitcher />

        <ThemeSwitcher />
      </div>
    </div>
  );
};
