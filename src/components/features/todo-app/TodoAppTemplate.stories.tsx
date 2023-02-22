import type { Meta, StoryObj } from '@storybook/react';

import { TodoAppTemplate as Component } from './TodoAppTemplate';

export default {
  title: 'Template/TodoAppTemplate',
  component: Component,
  argTypes: {},
} as Meta<typeof Component>;

export const Default: StoryObj<typeof Component> = {
  args: {},
};
