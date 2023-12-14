import type { Meta, StoryObj } from '@storybook/react';

import { DarkThemeDecorator } from '@/shared/storybook';

import { PageError } from './PageError';

const meta = {
  title: 'widget/PageError',
  component: PageError,
  parameters: {},
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof PageError>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [DarkThemeDecorator],
};
