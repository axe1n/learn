import type { Meta, StoryObj } from '@storybook/react';

import { DarkThemeDecorator } from '@/shared/storybook';

import AboutPageRaw from './AboutPage';

const meta = {
  title: 'page/AboutPageRaw',
  component: AboutPageRaw,
  parameters: {},
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof AboutPageRaw>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [DarkThemeDecorator],
};
