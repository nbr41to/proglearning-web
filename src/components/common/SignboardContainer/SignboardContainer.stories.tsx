import type { Meta, StoryObj } from '@storybook/react';

import { SignboardContainer as Component } from './SignboardContainer';

export default {
  component: Component,
  argTypes: {},
} as Meta<typeof Component>;

export const Default: StoryObj<typeof Component> = {
  args: {
    children: <div className="h-60 w-80">inner content</div>,
  },
};
