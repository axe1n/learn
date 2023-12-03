import React from 'react';

const MainPageLazy = React.lazy(
  () =>
    new Promise((resolve) => {
      // @ts-expect-error temporaly solution
      setTimeout(() => resolve(import('./ui/MainPageRaw')), 1500);
    })
);

export { MainPageLazy as MainPage };
