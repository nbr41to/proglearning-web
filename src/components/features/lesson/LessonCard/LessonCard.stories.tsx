import type { Meta, StoryObj } from '@storybook/react';

import { LessonCard as Component } from './LessonCard';

export default {
  component: Component,
} as Meta<typeof Component>;

export const Default: StoryObj<typeof Component> = {
  args: {},
};
