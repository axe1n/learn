import { useTheme } from '@/entities/hooks';
import { classNames } from '@/entities/lib';
import { AppRouter } from './providers/router/AppRouter';
import { Navbar } from '@/widgets/Navbar';

import './index.scss';

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />

      <AppRouter />
    </div>
  );
};
