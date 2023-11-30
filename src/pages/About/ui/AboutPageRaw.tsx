import { FC } from 'react';

import styles from './AboutPageRaw.module.scss';

type AboutPageProps = {
  className?: string;
};

const AboutPageRaw: FC<AboutPageProps> = (props) => {
  const { className } = props;

  return <div className={(styles.container, className)}>AboutPage</div>;
};

export default AboutPageRaw;
