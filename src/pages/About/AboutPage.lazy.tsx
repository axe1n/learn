import React from 'react';

const AboutPageLazy = React.lazy(
  () =>
    new Promise((resolve) => {
      // @ts-expect-error temporaly solution
      setTimeout(() => resolve(import('./ui/AboutPageRaw')), 1500);
    })
);

export { AboutPageLazy as AboutPage };
