import { StoryFn } from '@storybook/react';

export const DarkThemeDecorator = (Story: StoryFn) => (
  <div className="app dark">
    <Story />
  </div>
);
