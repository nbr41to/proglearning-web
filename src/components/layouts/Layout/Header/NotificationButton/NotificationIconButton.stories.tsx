import type { Meta, StoryObj } from '@storybook/react';

import { NotificationIconButton } from './NotificationIconButton';

export default {
  title: 'Layouts/NotificationIconButton',
  component: NotificationIconButton,
} as Meta<typeof NotificationIconButton>;

export const Default: StoryObj<typeof NotificationIconButton> = {
  args: {
    isNotification: false,
  },
};
export const WithNotification: StoryObj<typeof NotificationIconButton> = {
  args: {
    isNotification: true,
  },
};
