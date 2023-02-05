import type { Account, Profile } from '@prisma/client';
import type { Meta, StoryObj } from '@storybook/react';

import { IndexTemplate as Component } from './IndexTemplate';
import dummy_account from '@/mocks/account.json';
import dummy_profile from '@/mocks/profile.json';

export default {
  title: 'Template/IndexTemplate',
  component: Component,
  argTypes: {},
} as Meta<typeof Component>;

export const Default: StoryObj<typeof Component> = {
  args: {
    account: {
      ...(dummy_account as Account),
      profile: dummy_profile as Profile,
    },
  },
};
