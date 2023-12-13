import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/storybook';

import { Button } from './Button';

const meta = {
  title: 'shared/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Button',
  },
};

export const Clear: Story = {
  args: {
    buttonTheme: 'clear',
    children: 'Button',
  },
};

export const Outline: Story = {
  args: {
    buttonTheme: 'outline',
    children: 'Button',
  },
};

export const DefaultDark: Story = {
  args: {
    children: 'Button',
  },
  decorators: [ThemeDecorator],
};

export const ClearDark: Story = {
  args: {
    buttonTheme: 'clear',
    children: 'Button',
  },
  decorators: [ThemeDecorator],
};

export const OutlineDark: Story = {
  args: {
    buttonTheme: 'outline',
    children: 'Button',
  },
  decorators: [ThemeDecorator],
};
