import { FC } from 'react';

import styles from './MainPageRaw.module.scss';

type MainPageProps = {
  className?: string;
};

const MainPageRaw: FC<MainPageProps> = (props) => {
  const { className } = props;

  return <div className={(styles.container, className)}>MainPage</div>;
};

export default MainPageRaw;
