import { render, screen } from '@testing-library/react';

import { Button } from './Button';

describe('Button', () => {
  test('test Button text', () => {
    // eslint-disable-next-line i18next/no-literal-string
    render(<Button>ololo</Button>);

    expect(screen.getByText('ololo')).toBeInTheDocument();
  });

  test('test Button clear theme', () => {
    // eslint-disable-next-line i18next/no-literal-string
    render(<Button buttonTheme="clear">ololo</Button>);

    expect(screen.getByText('ololo')).toHaveClass('clear');
  });
});
