import type { Meta, StoryObj } from '@storybook/react';

import { InputCheckbox as Component } from './InputCheckbox';

export default {
  component: Component,
} as Meta<typeof Component>;

export const Unchecked: StoryObj<typeof Component> = {
  args: {
    label: 'input label',
    checked: false,
  },
};
export const Checked: StoryObj<typeof Component> = {
  args: {
    label: 'input label',
    checked: true,
  },
};
