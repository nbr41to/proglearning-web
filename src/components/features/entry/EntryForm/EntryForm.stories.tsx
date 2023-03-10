import type { Meta, StoryObj } from '@storybook/react';

import { EntryForm as Component } from './EntryForm';

export default {
  component: Component,
} as Meta<typeof Component>;

export const Default: StoryObj<typeof Component> = {
  args: {
    email: 'sample@example.com',
  },
};
