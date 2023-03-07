import type { Meta, StoryObj } from '@storybook/react';

import { Maintenance as Component } from './Maintenance';

export default {
  title: 'Layouts/Maintenance',
  component: Component,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<typeof Component>;

export const Default: StoryObj<typeof Component> = {
  args: {},
};
