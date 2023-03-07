import type { Meta, StoryObj } from '@storybook/react';

import { NotificationAnimatedButton } from './NotificationAnimatedButton';

export default {
  title: 'Layouts/NotificationAnimatedButton',
  component: NotificationAnimatedButton,
} as Meta<typeof NotificationAnimatedButton>;

export const Default: StoryObj<typeof NotificationAnimatedButton> = {
  args: {
    isNotification: false,
  },
};
export const WithNotification: StoryObj<typeof NotificationAnimatedButton> = {
  args: {
    isNotification: true,
  },
};
