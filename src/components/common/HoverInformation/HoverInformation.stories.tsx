import type { Meta, StoryObj } from '@storybook/react';

import { HoverInformation as Component } from './HoverInformation';

export default {
  component: Component,
  argTypes: {},
} as Meta<typeof Component>;

export const Default: StoryObj<typeof Component> = {
  args: {
    text: 'ここにHoverすると表示されるテキストが入ります。',
  },
};
