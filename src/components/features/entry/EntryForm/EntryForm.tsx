import type { AccountValidatedCreateParams } from '@/models/account/types';
import type { FC } from 'react';

import { SignboardContainer } from '@/components/common/SignboardContainer/SignboardContainer';
import {
  SELECT_ITEMS_BY_FIND,
  SELECT_ITEMS_OS,
} from '@/models/account/constants';
import { accountCreateSchema } from '@/models/account/scheme';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Input, Radio } from '@mantine/core';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

type Props = {
  email: string;
  onSubmit: (data: AccountValidatedCreateParams) => Promise<void>;
};

export const EntryForm: FC<Props> = ({ email, onSubmit }) => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<AccountValidatedCreateParams>({
    resolver: zodResolver(accountCreateSchema),
  });

  useEffect(() => {
    setValue('email', email);
  }, [email, setValue]);

  const handleOnSubmit = async (data: AccountValidatedCreateParams) => {
    setLoading(true);
    await onSubmit(data);
    setLoading(false);
  };

  const onError = (errors: any) => {
    // eslint-disable-next-line no-console
    console.log(errors);
  };

  return (
    <SignboardContainer fill>
      <form
        onSubmit={handleSubmit(handleOnSubmit, onError)}
        className="mx-auto w-fit space-y-4 p-8"
      >
        <Input.Wrapper label="メールアドレス" withAsterisk required>
          <Input type="email" w={280} value={email} disabled />
        </Input.Wrapper>
        <Input.Wrapper
          label="氏名（本名）"
          withAsterisk
          required
          error={errors.name && '入力してください。'}
        >
          <Input w={280} {...register('name', { required: true })} />
        </Input.Wrapper>
        <Input.Wrapper
          label="ユーザー名（呼ばれたい名前）"
          withAsterisk
          required
          error={errors.profileName && '入力してください。'}
        >
          <Input w={280} {...register('profileName', { required: true })} />
        </Input.Wrapper>

        <Radio.Group
          name="os"
          label="お使いのパソコンのOSを教えて下さい。"
          withAsterisk
          required
          error={errors.os && '選択してください。'}
        >
          <div className="mt-2 flex gap-4">
            {SELECT_ITEMS_OS.map((item) => (
              <Radio
                key={item.value}
                value={item.value}
                label={item.label}
                {...register('os', { required: true })}
              />
            ))}
          </div>
        </Radio.Group>

        <Radio.Group
          name="byFind"
          label="どこでこのコミュニティを知りましたか？"
          withAsterisk
          required
          error={errors.byFind && '選択してください。'}
        >
          <div className="mt-2 flex gap-4">
            {SELECT_ITEMS_BY_FIND.map((item) => (
              <Radio
                key={item.value}
                value={item.value}
                label={item.label}
                {...register('byFind', { required: true })}
              />
            ))}
          </div>
        </Radio.Group>

        <Button type="submit" loading={loading} disabled={loading}>
          送信
        </Button>
      </form>
    </SignboardContainer>
  );
};
