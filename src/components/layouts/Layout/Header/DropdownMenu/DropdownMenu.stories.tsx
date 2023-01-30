import type { Meta, StoryObj } from '@storybook/react';

import { DropdownMenu as Component } from './DropdownMenu';

export default {
  title: 'Layouts/DropdownMenu',
  component: Component,
} as Meta<typeof Component>;

export const Default: StoryObj<typeof Component> = {
  args: {
    email: 'sample@exsample.com',
    avatarUrl: 'https://avatars.githubusercontent.com/u/59198478?v=4',
    role: 'closer',
  },
};

export const NoAvatarURL: StoryObj<typeof Component> = {
  args: {
    email: 'sample@exsample.com',
    avatarUrl: '',
    role: 'closer',
  },
};

export const AdminUser: StoryObj<typeof Component> = {
  args: {
    email: 'sample@exsample.com',
    avatarUrl: 'https://avatars.githubusercontent.com/u/59198478?v=4',
    role: 'admin',
  },
};
