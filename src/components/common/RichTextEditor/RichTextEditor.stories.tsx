import type { Meta, StoryFn } from '@storybook/react';

import { RichTextEditor as Component } from './RichTextEditor';
import Link from '@tiptap/extension-link';
import Placeholder from '@tiptap/extension-placeholder';
import Underline from '@tiptap/extension-underline';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

export default {
  component: Component,
} as Meta<typeof Component>;

export const Default: StoryFn<typeof Component> = (args) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link,
      Placeholder.configure({ placeholder: '入力してください。' }),
    ],
    content: '',
  });

  return <Component {...args} editor={editor} hotkey="mod+Enter" />;
};
