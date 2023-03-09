import type { TextareaProps } from '@mantine/core';
import type { FC, FocusEvent } from 'react';
import type { z } from 'zod';

import { CheckIcon } from '@/components/common/icons';
import { Textarea, Loader } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import { useState } from 'react';

type Props = TextareaProps & {
  schema: z.ZodSchema;
  update: (value: string) => Promise<void>;
};

export const SeamlessUpdateTextarea: FC<Props> = ({
  schema,
  update,
  value: originalValue,
  ...rest
}) => {
  const [value, setValue] = useState(originalValue ?? '');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>();

  const onBlur = async (e: FocusEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setError(undefined);
    if (value === originalValue) return;

    setLoading(true);
    const validated = await schema.safeParseAsync(value);
    if (validated.success) {
      await update(validated.data);

      showNotification({
        title: 'Success!!',
        message: (rest.label && `${rest.label}の`) + '更新に成功しました',
        icon: <CheckIcon />,
        color: 'teal',
      });
    } else {
      const errorMessage = validated.error.issues[0].message;
      setError(errorMessage);
    }
    setLoading(false);
  };

  return (
    <Textarea
      disabled={loading}
      rightSection={loading && <Loader size="xs" />}
      error={error}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onBlur={onBlur}
      {...rest}
    />
  );
};
