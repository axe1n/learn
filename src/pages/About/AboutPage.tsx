import { FC } from 'react';

import styles from './AboutPage.module.scss';

type AboutPageProps = {
  className?: string;
};

const AboutPage: FC<AboutPageProps> = (props) => {
  const { className } = props;

  return <div className={(styles.container, className)}>AboutPage</div>;
};

export default AboutPage;
