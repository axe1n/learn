import { Suspense } from 'react';

import { useTheme } from '@/shared/hooks';
import { classNames } from '@/shared/lib';

import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';

import { AppRouter } from './providers/router/AppRouter';

import '@/shared/styles/styles.scss';

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar />

        <div className={'contentPage'}>
          <Sidebar />

          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};
