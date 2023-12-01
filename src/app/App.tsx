import { useTheme } from '@/shared/hooks';
import { classNames } from '@/shared/lib';
import { AppRouter } from './providers/router/AppRouter';
import { Navbar } from '@/widgets/Navbar';

import './index.scss';
import { Sidebar } from '@/widgets/Sidebar';
import { Suspense } from 'react';

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
