import type { Meta, StoryObj } from '@storybook/react';

import { EntryTemplate as Component } from './EntryTemplate';

export default {
  title: 'Template/EntryTemplate',
  component: Component,
  argTypes: {
    step: {
      control: {
        type: 'range',
        min: 0,
        max: 3,
        step: 1,
      },
    },
  },
} as Meta<typeof Component>;

export const Step1: StoryObj<typeof Component> = {
  args: {
    step: 0,
    userEmail: 'sample@exsample.com',
  },
};
export const Step2: StoryObj<typeof Component> = {
  args: {
    step: 1,
    userEmail: 'sample@exsample.com',
  },
};
export const Step3: StoryObj<typeof Component> = {
  args: {
    step: 2,
    userEmail: 'sample@exsample.com',
  },
};
export const Finished: StoryObj<typeof Component> = {
  args: {
    step: 3,
    userEmail: 'sample@exsample.com',
  },
};
