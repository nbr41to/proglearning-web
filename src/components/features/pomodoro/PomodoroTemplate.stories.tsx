import type { Meta, StoryObj } from '@storybook/react';

import { PomodoroTemplate as Component } from './PomodoroTemplate';

export default {
  title: 'Template/PomodoroTemplate',
  component: Component,
  argTypes: {},
} as Meta<typeof Component>;

export const Default: StoryObj<typeof Component> = {
  args: {},
};
