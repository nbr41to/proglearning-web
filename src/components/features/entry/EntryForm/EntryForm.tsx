import type { Account } from '@prisma/client';
import type { FC } from 'react';

import { SignboardContainer } from '@/common/SignboardContainer';
import { Button, Input, Radio } from '@mantine/core';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

type Props = {
  email: string;
  onSubmit: (data: Account) => Promise<void>;
};

export const EntryForm: FC<Props> = ({ email, onSubmit }) => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Account>();

  useEffect(() => {
    setValue('email', email);
  }, [email, setValue]);

  const onError = (errors: any) => {
    // eslint-disable-next-line no-console
    console.log(errors);
  };
  const handleOnSubmit = async (data: Account) => {
    setLoading(true);
    await onSubmit(data);
    setLoading(false);
  };

  return (
    <SignboardContainer>
      <form
        onSubmit={handleSubmit(handleOnSubmit, onError)}
        className="mx-auto w-fit space-y-4 p-8"
      >
        <div className="flex flex-wrap gap-4">
          <Input.Wrapper
            label="お名前"
            withAsterisk
            required
            error={errors.name && '入力してください。'}
          >
            <Input w={280} {...register('name', { required: true })} />
          </Input.Wrapper>
          <Input.Wrapper label="メールアドレス" withAsterisk required>
            <Input type="email" w={280} value={email} disabled />
          </Input.Wrapper>
        </div>

        <Radio.Group
          name="os"
          label="お使いのパソコンのOSを教えて下さい。"
          withAsterisk
          required
          error={errors.os && '選択してください。'}
        >
          <Radio
            value="mac"
            label="Mac"
            {...register('os', { required: true })}
          />
          <Radio
            value="windows"
            label="Windows"
            {...register('os', { required: true })}
          />
          <Radio
            value="other"
            label="その他"
            {...register('os', { required: true })}
          />
        </Radio.Group>

        <Radio.Group
          name="byFind"
          label="どこでこのコミュニティを知りましたか？"
          withAsterisk
          required
          error={errors.byFind && '選択してください。'}
        >
          <Radio
            value="twitter"
            label="Twitter"
            {...register('byFind', { required: true })}
          />
          <Radio
            value="youtube"
            label="YouTube"
            {...register('byFind', { required: true })}
          />
          <Radio
            value="note"
            label="note"
            {...register('byFind', { required: true })}
          />
          <Radio
            value="zenn"
            label="Zenn"
            {...register('byFind', { required: true })}
          />
          <Radio
            value="search"
            label="検索"
            {...register('byFind', { required: true })}
          />
          <Radio
            value="invite"
            label="紹介"
            {...register('byFind', { required: true })}
          />
          <Radio
            value="other"
            label="その他"
            {...register('byFind', { required: true })}
          />
        </Radio.Group>

        <Button type="submit" loading={loading} disabled={loading}>
          送信
        </Button>
      </form>
    </SignboardContainer>
  );
};
