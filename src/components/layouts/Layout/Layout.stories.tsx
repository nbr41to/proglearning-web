import type { Account } from '@prisma/client';
import type { Meta, StoryObj } from '@storybook/react';

import { Layout as Component } from './Layout';

export default {
  title: 'Layouts/Layout',
  component: Component,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<typeof Component>;

export const Default: StoryObj<typeof Component> = {
  args: {
    children: <div className="py-20 px-8">Page Content</div>,
  },
};

export const LongPageContent: StoryObj<typeof Component> = {
  args: {
    children: (
      <div className="py-20 px-8">
        <h2>title</h2>
        <div className="space-y-3">
          <div className="h-40 w-40 rounded bg-slate-400">Page Content</div>
          <div className="h-40 w-40 rounded bg-slate-400">Page Content</div>
          <div className="h-40 w-40 rounded bg-slate-400">Page Content</div>
          <div className="h-40 w-40 rounded bg-slate-400">Page Content</div>
          <div className="h-40 w-40 rounded bg-slate-400">Page Content</div>
          <div className="h-40 w-40 rounded bg-slate-400">Page Content</div>
        </div>
      </div>
    ),
  },
};

export const LoggedIn: StoryObj<typeof Component> = {
  args: {
    children: <div className="py-20 px-8">Page Content</div>,
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
    account: {
      role: 'closer',
    } as Account,
  },
};
