import type { Meta, StoryObj } from '@storybook/react';

import { MySubscription as Component } from './MySubscription';

export default {
  component: Component,
} as Meta<typeof Component>;

export const Default: StoryObj<typeof Component> = {
  args: {
    plan: 'free',
  },
};
