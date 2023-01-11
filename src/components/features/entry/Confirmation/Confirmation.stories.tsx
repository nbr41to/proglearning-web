import type { Meta, StoryObj } from '@storybook/react';

import { Confirmation as Component } from './Confirmation';

export default {
  component: Component,
} as Meta<typeof Component>;

export const Default: StoryObj<typeof Component> = {
  args: {},
};
