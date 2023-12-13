import { StoryFn } from '@storybook/react';

export const ThemeDecorator = (Story: StoryFn) => (
  <div className="app dark">
    <Story />
  </div>
);
