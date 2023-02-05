import type { Meta, StoryObj } from '@storybook/react';

import { CurrentGoal as Component } from './CurrentGoal';

export default {
  component: Component,
} as Meta<typeof Component>;

export const Default: StoryObj<typeof Component> = {
  args: {
    goal: 'GitHubのスター数を1000個にする',
  },
};
export const NonGoal: StoryObj<typeof Component> = {
  args: {
    goal: null,
  },
};
