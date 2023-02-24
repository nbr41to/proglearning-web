import type { Account, Profile } from '@prisma/client';
import type { Meta, StoryObj } from '@storybook/react';

import { MeEditingForm as Component } from './MeEditingForm';
import dummy_account from '@/__mocks__/account.json';
import dummy_profile from '@/__mocks__/profile.json';

export default {
  component: Component,
} as Meta<typeof Component>;

export const Default: StoryObj<typeof Component> = {
  args: {
    account: {
      ...(dummy_account as Account),
      profile: dummy_profile as Profile,
    },
  },
};
