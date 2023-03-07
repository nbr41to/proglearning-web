import type { Meta, StoryObj } from '@storybook/react';

import { SeamlessUpdateTextarea as Component } from './SeamlessUpdateTextarea';

export default {
  component: Component,
  argTypes: {},
} as Meta<typeof Component>;

export const Default: StoryObj<typeof Component> = {
  args: {},
};
