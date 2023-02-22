import { z } from 'zod';

export const entrySchema = z.object({
  name: z.string().min(1, { message: '名前を入力してください' }),
  email: z.string().email({ message: '正しいEmailを入力してください' }),
  os: z.union([z.literal('mac'), z.literal('windows'), z.literal('others')]),
  byFind: z.string(),
});
