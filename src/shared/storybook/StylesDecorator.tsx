import { StoryFn } from '@storybook/react';

export const StylesDecorator = (Story: StoryFn) => (
  <div className="app light">
    <Story />
  </div>
);
