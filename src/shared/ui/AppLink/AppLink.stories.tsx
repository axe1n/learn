import type { Meta, StoryObj } from '@storybook/react';

import { DarkThemeDecorator } from '@/shared/storybook';

import { AppLink } from './AppLink';

const meta = {
  title: 'shared/Link',
  component: AppLink,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    to: '',
    children: 'ololo',
  },
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Inverted: Story = {
  args: {
    linkType: 'inverted',
  },
};

export const DefaultDark: Story = {
  args: {},
  decorators: [DarkThemeDecorator],
};

export const InvertedDark: Story = {
  args: {
    linkType: 'inverted',
  },
  decorators: [DarkThemeDecorator],
};
