import type { z, ZodError } from 'zod';

import { showNotification } from '@mantine/notifications';

export const validate = <T>(schema: z.ZodSchema<T>, data: unknown) => {
  try {
    const result = schema.parse(data);

    return result;
  } catch (err) {
    const messages = (err as ZodError).issues.map((issue) => issue.message);
    showNotification({
      title: 'Validation Error',
      message: messages.join(''),
      color: 'red',
    });

    return undefined;
  }
};
