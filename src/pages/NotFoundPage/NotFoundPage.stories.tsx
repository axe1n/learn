import type { Meta, StoryObj } from '@storybook/react';

import { DarkThemeDecorator } from '@/shared/storybook';

import { NotFoundPage } from './NotFoundPage';

const meta = {
  title: 'page/NotFoundPage',
  component: NotFoundPage,
  parameters: {},
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof NotFoundPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [DarkThemeDecorator],
};
