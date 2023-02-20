/* eslint-disable storybook/await-interactions */
import type { Meta, StoryObj } from '@storybook/react';

import { Confirmation as Component } from './Confirmation';
import { screen, waitFor, userEvent } from '@storybook/testing-library';

export default {
  component: Component,
} as Meta<typeof Component>;

export const Default: StoryObj<typeof Component> = {
  args: {},
};

export const Finished: StoryObj<typeof Component> = {
  args: {},
  play: async () => {
    const checkbox1 = screen.getByLabelText(
      '登録にGoogleのアカウントが必要です。',
      { selector: 'input' }
    );
    userEvent.click(checkbox1);

    const checkbox2 = screen.getByLabelText(
      'ご利用にはクレジットカードの登録が必要です。',
      { selector: 'input' }
    );
    userEvent.click(checkbox2);

    const openTermsButton = screen.getByRole('button', {
      name: '利用規約を開く',
    });
    userEvent.click(openTermsButton);

    await waitFor(async () => {
      await screen.findByText('progLearning 利用規約');
      await screen.findByRole('button', {
        name: '閉じる',
      });
    });

    const closeButton = screen.getByRole('button', {
      name: '閉じる',
    });
    userEvent.click(closeButton);

    const checkbox3 = screen.getByLabelText('利用規約に同意します。', {
      selector: 'input',
    });
    userEvent.click(checkbox3);

    const googleLoginButton = screen.getByRole('button', {
      name: 'Googleアカウントで登録',
    });
    userEvent.click(googleLoginButton);
  },
};
