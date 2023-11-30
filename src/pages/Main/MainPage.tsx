import { FC } from 'react';

import styles from './MainPage.module.scss';

type MainPageProps = {
  className?: string;
};

const MainPage: FC<MainPageProps> = (props) => {
  const { className } = props;

  return <div className={(styles.container, className)}>MainPage</div>;
};

export default MainPage;
