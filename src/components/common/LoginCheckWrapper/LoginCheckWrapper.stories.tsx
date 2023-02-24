import type { Meta, StoryObj } from '@storybook/react';

import { LoginCheckWrapper as Component } from './LoginCheckWrapper';

export default {
  component: Component,
  argTypes: {},
} as Meta<typeof Component>;

export const Default: StoryObj<typeof Component> = {
  args: {
    children: (
      <button onClick={() => alert('Clickされてはいけませんよ')}>
        ログインしないと押せないはずのボタン
      </button>
    ),
    isOverlay: false,
  },
};

export const WithOverlay: StoryObj<typeof Component> = {
  args: {
    children: (
      <button onClick={() => alert('Clickされてはいけませんよ')}>
        ログインしないと押せないはずのボタン
      </button>
    ),
    isOverlay: true,
  },
};
