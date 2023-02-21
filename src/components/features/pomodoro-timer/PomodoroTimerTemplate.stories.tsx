import type { Meta, StoryObj } from '@storybook/react';

import { PomodoroTimerTemplate as Component } from './PomodoroTimerTemplate';

export default {
  title: 'Template/PomodoroTimerTemplate',
  component: Component,
  argTypes: {},
} as Meta<typeof Component>;

export const Default: StoryObj<typeof Component> = {
  args: {},
};
