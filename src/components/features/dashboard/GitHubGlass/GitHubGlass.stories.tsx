import type { Meta, StoryObj } from '@storybook/react';

import { GitHubGlass as Component } from './GitHubGlass';

export default {
  component: Component,
  argTypes: {},
} as Meta<typeof Component>;

export const Default: StoryObj<typeof Component> = {
  args: {
    githubId: 'adamwathan',
  },
};
export const NoSettingID: StoryObj<typeof Component> = {
  args: {
    githubId: null,
  },
};
