import type { Preview, StoryFn } from '@storybook/react';

import '@/shared/styles/styles.scss';
import { Suspense } from 'react';

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
  decorators: [
    (Story: StoryFn) => (
      <Suspense fallback="">
        <div className="light">
          <Story />
        </div>
      </Suspense>
    ),
  ],
};

export default preview;
