import { FC } from 'react';

import classes from './AboutPage.module.scss';

type AboutPageProps = {
  className?: string;
};

const AboutPage: FC<AboutPageProps> = (props) => {
  const { className } = props;

  return <div className={(classes.container, className)}>AboutPage</div>;
};

export default AboutPage;
