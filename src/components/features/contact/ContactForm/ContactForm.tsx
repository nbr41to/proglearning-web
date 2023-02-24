import type { FC } from 'react';

import { AtIcon, SendIcon, TouchIcon } from '@/components/common/icons';
import { RichTextEditor } from '@/components/common/RichTextEditor';
import { contactSchema } from '@/useCases/contact/scheme';
import { validate } from '@/utils/validate';
import { Button, clsx, Input } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import { Link } from '@mantine/tiptap';
import Placeholder from '@tiptap/extension-placeholder';
import Underline from '@tiptap/extension-underline';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { useReducer, useState } from 'react';

type Props = {
  onSubmit: (text: string, onSuccess: () => void) => Promise<void>;
};

export const ContactForm: FC<Props> = ({ onSubmit }) => {
  const [openForm, startAnimation] = useReducer(() => true, false);
  const [visibleCover, hiddenCover] = useReducer(() => false, true);
  const [email, setEmail] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link,
      Placeholder.configure({
        placeholder: 'お問い合わせ内容を入力してください。',
      }),
    ],
    content: '',
  });
  const disabled = isLoading || !email || !editor || !editor.getText();

  const handleSubmit = async () => {
    if (disabled) return;
    const content = editor.getText();
    const validated = validate<{ email: string; content: string }>(
      contactSchema,
      { email, content }
    );
    if (!validated) return;

    setIsLoading(true);
    await onSubmit(
      `【お問い合わせ】\n内容:\n\n${validated.content}\n\nEmail: ${validated.email}`,
      () => {
        showNotification({
          title: '送信完了しました！',
          message: 'メールにてご連絡いたします。',
        });
        editor.commands.setContent('');
        setEmail('');
      }
    );
    setIsLoading(false);
  };

  return (
    <div className="relative">
      <div className="space-y-2 p-2">
        <Input
          type="email"
          icon={<AtIcon />}
          placeholder="メールアドレス"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
        <RichTextEditor
          editor={editor}
          hotkey="mod+Enter"
          onSubmit={handleSubmit}
        />
        <div className="mt-2 flex items-center justify-end gap-3">
          <Button
            onClick={handleSubmit}
            loading={isLoading}
            disabled={disabled}
            rightIcon={<SendIcon />}
          >
            送 信
          </Button>
        </div>
      </div>
      {visibleCover && (
        <div
          className={clsx(
            'absolute top-0 z-10 h-[384px] w-full cursor-pointer rounded-md bg-slate-800 text-white',
            'flex items-center justify-center',
            'origin-[5%_6px] transition duration-500',
            openForm
              ? 'rotate-[100deg] opacity-0'
              : 'opacity-40 hover:rotate-[2deg]'
          )}
          onClick={() => {
            startAnimation();
            setTimeout(() => hiddenCover(), 500);
          }}
        >
          <div className="flex">
            <div className="font-bold">
              フォームから問い合わせる
              <br />
              （メールアドレス必須）
            </div>
            <TouchIcon size={44} />
          </div>
        </div>
      )}
    </div>
  );
};
