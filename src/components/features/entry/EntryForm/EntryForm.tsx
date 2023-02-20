import type { EntryValidatedCreateParams } from '@/models/account/types';
import type { FC } from 'react';

import { SignboardContainer } from '@/components/common/SignboardContainer/SignboardContainer';
import {
  SELECT_ITEMS_BY_FIND,
  SELECT_ITEMS_OS,
} from '@/models/account/constants';
import { entrySchema } from '@/models/account/scheme';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Input, Radio } from '@mantine/core';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

type Props = {
  email: string;
  onSubmit: (data: EntryValidatedCreateParams) => Promise<void>;
};

export const EntryForm: FC<Props> = ({ email, onSubmit }) => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<EntryValidatedCreateParams>({
    resolver: zodResolver(entrySchema),
  });

  useEffect(() => {
    setValue('email', email);
  }, [email, setValue]);

  const handleOnSubmit = async (data: EntryValidatedCreateParams) => {
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
          {SELECT_ITEMS_OS.map((item) => (
            <Radio
              key={item.value}
              value={item.value}
              label={item.label}
              {...register('os', { required: true })}
            />
          ))}
        </Radio.Group>

        <Radio.Group
          name="byFind"
          label="どこでこのコミュニティを知りましたか？"
          withAsterisk
          required
          error={errors.byFind && '選択してください。'}
        >
          {SELECT_ITEMS_BY_FIND.map((item) => (
            <Radio
              key={item.value}
              value={item.value}
              label={item.label}
              {...register('byFind', { required: true })}
            />
          ))}
        </Radio.Group>

        <Button type="submit" loading={loading} disabled={loading}>
          送信
        </Button>
      </form>
    </SignboardContainer>
  );
};
