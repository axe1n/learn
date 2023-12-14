import React from 'react';

const AboutPageLazy = React.lazy(
  () =>
    new Promise((resolve) => {
      // @ts-expect-error temporaly solution
      setTimeout(() => resolve(import('./ui/AboutPage')), 1500);
    })
);

export { AboutPageLazy as AboutPage };
