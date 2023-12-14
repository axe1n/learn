import type { Preview } from '@storybook/react';

import '@/shared/styles/styles.scss';
import {
  RouterDecorator,
  StylesDecorator,
  SuspenseDecorator,
} from '@/shared/storybook';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#79799d',
        },
        {
          name: 'dark',
          value: '#4d1461',
        },
      ],
    },
  },
  decorators: [SuspenseDecorator, RouterDecorator, StylesDecorator],
};

export default preview;
