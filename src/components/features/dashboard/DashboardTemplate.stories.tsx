import type { Account, Profile, Status } from '@prisma/client';
import type { Meta, StoryObj } from '@storybook/react';

import { DashboardTemplate as Component } from './DashboardTemplate';
import dummy_account from '@/mocks/account.json';
import dummy_profile from '@/mocks/profile.json';
import dummy_status from '@/mocks/status.json';

export default {
  title: 'Template/DashboardTemplate',
  component: Component,
  argTypes: {},
} as Meta<typeof Component>;

export const Default: StoryObj<typeof Component> = {
  args: {
    account: dummy_account as Account,
    profile: dummy_profile as Profile,
    status: dummy_status as Status,
  },
};
