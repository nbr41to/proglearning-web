import type { Meta, StoryObj } from '@storybook/react';

import { NotificationButton as Component } from './NotificationButton';

export default {
  title: 'Layouts/NotificationButton',
  component: Component,
} as Meta<typeof Component>;

export const Default: StoryObj<typeof Component> = {
  args: {
    isNotification: false,
  },
};
export const WithNotification: StoryObj<typeof Component> = {
  args: {
    isNotification: true,
  },
};
