import type { Meta, StoryObj } from '@storybook/react';

import { LoadingOverlay as Component } from './LoadingOverlay';

export default {
  title: 'Layouts/LoadingOverlay',
  component: Component,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<typeof Component>;

export const Default: StoryObj<typeof Component> = {
  render: ({ ...args }) => (
    <div className="h-screen">
      <Component {...args} />
    </div>
  ),
  args: {
    visible: true,
  },
};
