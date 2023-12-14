import type { Meta, StoryObj } from '@storybook/react';

import { DarkThemeDecorator } from '@/shared/storybook';

import MainPage from './MainPageRaw';

const meta = {
  title: 'page/MainPage',
  component: MainPage,
  parameters: {},
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof MainPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [DarkThemeDecorator],
};
