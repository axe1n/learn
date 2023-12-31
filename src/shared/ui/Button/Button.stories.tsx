import type { Meta, StoryObj } from '@storybook/react';

import { DarkThemeDecorator } from '@/shared/storybook';

import { Button } from './Button';

const meta = {
  title: 'shared/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: { children: 'Button' },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Clear: Story = {
  args: {
    buttonTheme: 'clear',
  },
};

export const Outline: Story = {
  args: {
    buttonTheme: 'outline',
  },
};

export const DefaultDark: Story = {
  args: {},
  decorators: [DarkThemeDecorator],
};

export const ClearDark: Story = {
  args: {
    buttonTheme: 'clear',
  },
  decorators: [DarkThemeDecorator],
};

export const OutlineDark: Story = {
  args: {
    buttonTheme: 'outline',
  },
  decorators: [DarkThemeDecorator],
};
