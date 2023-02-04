import type { Account, Profile } from '@prisma/client';
import type { Meta, StoryObj } from '@storybook/react';

import { EditAccountForm as Component } from './EditAccountForm';
import dummy_account from '@/mocks/account_with_profile.json';

export default {
  component: Component,
} as Meta<typeof Component>;

export const Default: StoryObj<typeof Component> = {
  args: {
    account: dummy_account as Account & { profile: Profile },
  },
};
