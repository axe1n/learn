import { fireEvent, render, screen } from '@testing-library/react';
import { Suspense } from 'react';

import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
  test('getByTestId Sidebar', () => {
    render(
      <Suspense fallback="">
        <Sidebar />
      </Suspense>
    );

    expect(screen.getByTestId('sidebar'));
  });

  test('check sidebar-toggle add collapsed', () => {
    render(
      <Suspense fallback="">
        <Sidebar />
      </Suspense>
    );

    const toogleButton = screen.getByTestId('sidebar-toggle');

    fireEvent.click(toogleButton);

    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
