import type { FC } from 'react';

import { ColorGoogleIcon } from '@/components/common/icons';
import { InputCheckbox } from '@/components/common/InputCheckbox';
import { SignboardContainer } from '@/components/common/SignboardContainer/SignboardContainer';
import { useSupabaseAuth } from '@/hooks/supabaseHook/useSupabaseAuth';
import Terms from '@/mdx/terms_of_service.mdx';
import { baseUrl } from '@/utils/url';
import { Button, Modal } from '@mantine/core';
import { useReducer, useMemo, useState } from 'react';

export const Confirmation: FC = () => {
  const [checkedList, setCheckedList] = useState<number[]>([]);
  const [openedTerms, setOpenedTerms] = useState(false);
  const [readTerms, setReadTerms] = useReducer((prev) => !prev, false);
  const disabledLogin = useMemo(() => checkedList.length !== 3, [checkedList]);

  const { signInWithGoogle } = useSupabaseAuth();

  const toggleChecked = (value: number) => {
    if (checkedList.includes(value)) {
      setCheckedList(checkedList.filter((v) => v !== value));
    } else {
      setCheckedList([...checkedList, value]);
    }
  };

  const openedTermsOfService = () => {
    setReadTerms();
    setOpenedTerms(true);
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
              onChange={() => readTerms && toggleChecked(3)}
            />
            <Button size="xs" onClick={openedTermsOfService}>
              利用規約を開く
            </Button>
          </div>
          <Button
            className="border-blue-700 bg-white text-blue-700 shadow"
            disabled={disabledLogin}
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
        opened={openedTerms}
        onClose={() => setOpenedTerms(false)}
        title="progLearning 利用規約"
        size="full"
        centered
      >
        <div className="max-w-2xl text-sm">
          <Terms />
          <div className="mx-auto mt-8 w-fit">
            <Button variant="outline" onClick={() => setOpenedTerms(false)}>
              閉じる
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};
