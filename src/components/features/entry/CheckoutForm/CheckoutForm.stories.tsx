import type { Meta, StoryObj } from '@storybook/react';

import { CheckoutForm as Component } from './CheckoutForm';

export default {
  component: Component,
} as Meta<typeof Component>;

export const Default: StoryObj<typeof Component> = {
  args: {},
};
