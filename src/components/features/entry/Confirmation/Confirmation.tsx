import type { FC } from 'react';

import { ColorGoogleIcon } from '@/components/common/icons';
import { InputCheckbox } from '@/components/common/InputCheckbox';
import { SignboardContainer } from '@/components/common/SignboardContainer/SignboardContainer';
import { useAuth } from '@/hooks/supabaseHook/useAuth';
import Terms from '@/mdx/terms_of_service.mdx';
import { baseUrl } from '@/utils/url';
import { Button, Modal } from '@mantine/core';
import { useReducer, useMemo, useState } from 'react';

export const Confirmation: FC = () => {
  const { signInWithGoogle } = useAuth();
  const [checkedList, setCheckedList] = useState<number[]>([]);
  const [open, setOpen] = useState(false);
  const [read, setRead] = useReducer((prev) => !prev, false);
  const disabled = useMemo(() => checkedList.length !== 3, [checkedList]);

  const toggleChecked = (value: number) => {
    if (checkedList.includes(value)) {
      setCheckedList(checkedList.filter((v) => v !== value));
    } else {
      setCheckedList([...checkedList, value]);
    }
  };

  const openTermsOfService = () => {
    setRead();
    setOpen(true);
  };

  return (
    <>
      <SignboardContainer fill>
        <div className="mx-auto w-fit space-y-6">
          <h3 className="text-center text-lg">登録にあたっての確認事項</h3>
          <InputCheckbox
            label="登録にGoogleのアカウントが必要です。"
            checked={checkedList.includes(1)}
            onChange={() => toggleChecked(1)}
          />
          <InputCheckbox
            label="ご利用にはクレジットカードの登録が必要です。"
            checked={checkedList.includes(2)}
            onChange={() => toggleChecked(2)}
          />
          <div className="flex items-start justify-between">
            <InputCheckbox
              label="利用規約に同意します。"
              checked={checkedList.includes(3)}
              onChange={() => read && toggleChecked(3)}
            />
            <Button size="xs" onClick={openTermsOfService}>
              利用規約を開く
            </Button>
          </div>
          <Button
            className="border-blue-700 bg-white text-blue-700 shadow"
            disabled={disabled}
            variant="outline"
            fullWidth
            leftIcon={<ColorGoogleIcon size={20} />}
            onClick={() => signInWithGoogle(baseUrl + '/entry')}
          >
            Googleアカウントで登録
          </Button>
        </div>
      </SignboardContainer>

      <Modal
        opened={open}
        onClose={() => setOpen(false)}
        title="progLearning 利用規約"
        size="full"
        centered
      >
        <div className="max-w-2xl text-sm">
          <Terms />
          <div className="mx-auto mt-8 w-fit">
            <Button variant="outline" onClick={() => setOpen(false)}>
              閉じる
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};
