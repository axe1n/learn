import type { Meta, StoryObj } from '@storybook/react';

import { DarkThemeDecorator } from '@/shared/storybook';

import { LanguageSwitcher } from './LanguageSwitcher';

const meta = {
  title: 'feature/LanguageSwitcher',
  component: LanguageSwitcher,
  parameters: {},
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof LanguageSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [DarkThemeDecorator],
};
