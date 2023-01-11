import type { Meta, StoryObj } from '@storybook/react';

import { Completed as Component } from './Completed';

export default {
  component: Component,
} as Meta<typeof Component>;

export const Default: StoryObj<typeof Component> = {
  args: {},
};
