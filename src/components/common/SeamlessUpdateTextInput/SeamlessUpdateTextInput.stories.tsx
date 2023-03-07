import type { Meta, StoryObj } from '@storybook/react';

import { SeamlessUpdateTextInput as Component } from './SeamlessUpdateTextInput';

export default {
  component: Component,
  argTypes: {},
} as Meta<typeof Component>;

export const Default: StoryObj<typeof Component> = {
  args: {},
};
