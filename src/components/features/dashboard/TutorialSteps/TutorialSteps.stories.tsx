import type { Meta, StoryObj } from '@storybook/react';

import { TutorialSteps as Component } from './TutorialSteps';

export default {
  component: Component,
  argTypes: {},
} as Meta<typeof Component>;

export const Step1: StoryObj<typeof Component> = {
  args: {
    currentStep: 1,
    step2Disabled: false,
    step4Disabled: false,
    step5Disabled: false,
  },
};
export const Step2: StoryObj<typeof Component> = {
  args: {
    currentStep: 2,
    step2Disabled: false,
    step4Disabled: false,
    step5Disabled: false,
  },
};
export const Step3: StoryObj<typeof Component> = {
  args: {
    currentStep: 3,
    step2Disabled: false,
    step4Disabled: false,
    step5Disabled: false,
  },
};
export const Step4: StoryObj<typeof Component> = {
  args: {
    currentStep: 4,
    step2Disabled: false,
    step4Disabled: false,
    step5Disabled: false,
  },
};
export const Step5: StoryObj<typeof Component> = {
  args: {
    currentStep: 5,
    step2Disabled: false,
    step4Disabled: false,
    step5Disabled: false,
  },
};
