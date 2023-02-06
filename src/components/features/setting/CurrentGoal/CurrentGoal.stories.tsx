import type { Meta, StoryObj } from '@storybook/react';

import { CurrentGoal as Component } from './CurrentGoal';
import { userEvent, within } from '@storybook/testing-library';

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

export const Play: StoryObj<typeof Component> = {
  args: {
    goal: 'GitHubのスター数を1000個にする',
  },
  play: async ({ canvasElement }) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const canvas = within(canvasElement);
    const editButton = canvas.getByRole('button');
    await userEvent.click(editButton);
    const goalInput = canvas.getByPlaceholderText('ここに目標を入力');
    await userEvent.clear(goalInput);
    await userEvent.type(goalInput, 'GitHubのスター数を1000個にする', {
      delay: 100,
    });
    const submitButton = canvas.getByRole('button', {
      name: '保存',
    });
    await userEvent.click(submitButton);
  },
};
