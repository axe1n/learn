import { FC } from 'react';

import classes from './MainPage.module.scss';

type MainPageProps = {
  className?: string;
};

const MainPage: FC<MainPageProps> = (props) => {
  const { className } = props;

  return <div className={(classes.container, className)}>MainPage</div>;
};

export default MainPage;
