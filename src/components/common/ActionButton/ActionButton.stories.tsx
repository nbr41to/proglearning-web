import type { Meta, StoryObj } from '@storybook/react';

import { ActionButton as Component } from './ActionButton';
import { BookIcon } from '@/components/common/icons';

export default {
  component: Component,
  argTypes: {},
} as Meta<typeof Component>;

export const Default: StoryObj<typeof Component> = {
  args: {
    icon: <BookIcon />,
    label: 'Todoアプリを作ってみる',
  },
};
