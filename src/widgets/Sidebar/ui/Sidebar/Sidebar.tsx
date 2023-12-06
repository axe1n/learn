import { FC, useState } from 'react';

import { classNames } from '@/shared/lib';
import { BugButton } from '@/shared/ui';

import { LanguageSwitcher } from '@/features/languageSwitcher';
import { ThemeSwitcher } from '@/features/themeSwitcher';

import styles from './Sidebar.module.scss';

type SidebarProps = {
  className?: string;
};

export const Sidebar: FC<SidebarProps> = (props) => {
  const { className } = props;

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
    >
      <button onClick={onToogle} type="button">
        TOOGLE
      </button>

      <div className={classNames(styles.switchers)}>
        <BugButton />

        <LanguageSwitcher />

        <ThemeSwitcher />
      </div>
    </div>
  );
};
