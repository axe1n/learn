import { useTheme } from '@/enteties/hooks';
import { classNames } from '@/enteties/lib';
import { AppRouter } from './providers/router/AppRouter';
import { Navbar } from '@/widgets/Navbar';

import '../enteties/styles/styles.scss';

export const App = () => {
  const { theme, toogleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toogleTheme}>Change theme</button>

      <Navbar />

      <AppRouter />
    </div>
  );
};
