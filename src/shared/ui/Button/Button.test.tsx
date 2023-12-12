import { render, screen } from '@testing-library/react';

import { Button } from './Button';

describe('Button', () => {
  test('test Button text', () => {
    render(<Button>ololo</Button>);

    expect(screen.getByText('ololo')).toBeInTheDocument();
  });

  test('test Button clear theme', () => {
    render(<Button buttonTheme="clear">ololo</Button>);

    expect(screen.getByText('ololo')).toHaveClass('clear');
  });
});
