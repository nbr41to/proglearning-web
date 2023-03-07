import type { Meta, StoryObj } from '@storybook/react';

import { Footer as Component } from './Footer';

export default {
  title: 'Layouts/Footer',
  component: Component,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<typeof Component>;

export const Default: StoryObj<typeof Component> = {
  args: {},
};
