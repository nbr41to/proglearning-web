import type { Meta, StoryObj } from '@storybook/react';

import { TableOfContents as Component } from './TableOfContents';

export default {
  component: Component,
} as Meta<typeof Component>;

export const Default: StoryObj<typeof Component> = {
  args: {
    headingList: [],
  },
};
