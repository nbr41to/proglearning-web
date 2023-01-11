import type { FC } from 'react';

import { ColorGoogleIcon } from '@/common/icons';
import { SignboardContainer } from '@/common/SignboardContainer';
import { signInWithGoogle } from '@/utils/supabase/auth';
import { Button, Checkbox } from '@mantine/core';
import { useMemo, useState } from 'react';

export const Confirmation: FC = () => {
  const [checkedList, setCheckedList] = useState<string[]>([]);
  const disabled = useMemo(() => checkedList.length !== 3, [checkedList]);

  return (
    <SignboardContainer>
      <div className="mx-auto w-fit space-y-4 py-8">
        <Checkbox.Group
          defaultValue={[]}
          label="確認事項"
          description="以下の項目をすべてご確認ください🙇‍♂️"
          onChange={setCheckedList}
          orientation="vertical"
          spacing="xs"
        >
          <Checkbox label="登録にはGoogleのアカウントが必要です。" value="1" />
          <Checkbox
            label="ご利用にはクレジットカードの登録が必要です。"
            value="3"
          />
          <Checkbox label="利用規約を読みました。" value="2" />
        </Checkbox.Group>
        <Button
          className="border-blue-700 bg-white text-blue-700 shadow"
          disabled={disabled}
          variant="outline"
          fullWidth
          leftIcon={<ColorGoogleIcon size={20} />}
          onClick={
            () => signInWithGoogle()
            // signIn('google', {
            //   callbackUrl: baseUrl + '/entry',
            // })
          }
        >
          Googleアカウントで登録
        </Button>
      </div>
    </SignboardContainer>
  );
};
