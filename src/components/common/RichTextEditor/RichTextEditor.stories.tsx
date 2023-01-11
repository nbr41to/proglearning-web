import type { Meta, StoryFn } from '@storybook/react';

import { RichTextEditor as Component } from './RichTextEditor';
import { useEditor } from '@tiptap/react';

export default {
  component: Component,
} as Meta<typeof Component>;

export const Default: StoryFn<typeof Component> = (args) => {
  const editor = useEditor();

  return <Component {...args} editor={editor} />;
};
