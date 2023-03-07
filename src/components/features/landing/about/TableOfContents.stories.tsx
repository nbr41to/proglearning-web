import type { Meta, StoryObj } from '@storybook/react';
import type { NotionBlockObjectResponse } from '~/types/notion';

import { TableOfContents as Component } from './TableOfContents';
import exampleBlocks from '~/mocks/notion_blocks.json';

export default {
  component: Component,
} as Meta<typeof Component>;

export const Default: StoryObj<typeof Component> = {
  args: {
    blocks: exampleBlocks as NotionBlockObjectResponse[],
  },
};
