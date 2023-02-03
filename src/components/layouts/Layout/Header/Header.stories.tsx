import type { Status } from '@prisma/client';
import type { Meta, StoryObj } from '@storybook/react';

import { Header as Component } from './Header';

export default {
  title: 'Layouts/Header',
  component: Component,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<typeof Component>;

export const Default: StoryObj<typeof Component> = {
  args: {
    user: null,
    status: null,
  },
};

export const LoggedIn: StoryObj<typeof Component> = {
  args: {
    user: {
      id: 'user_id_123',
      aud: 'aud',
      email: 'nbr.41to@gmail.com',
      app_metadata: {},
      user_metadata: {
        avatar_url: 'https://avatars.githubusercontent.com/u/59198478?v=4',
        email: 'nbr.41to@gmail.com',
      },
      created_at: '2021-01-22T13:14:16.469',
    },
    status: {
      role: 'closer',
    } as Status,
  },
};
