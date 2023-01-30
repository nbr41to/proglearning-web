import type { Meta, StoryObj } from '@storybook/react';

import { ContactTemplate as Component } from './ContactTemplate';

export default {
  title: 'Template/ContactTemplate',
  component: Component,
} as Meta<typeof Component>;

export const Default: StoryObj<typeof Component> = {
  args: {},
};
