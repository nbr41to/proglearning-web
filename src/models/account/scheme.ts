import { z } from 'zod';

export const accountQuerySchema = z
  .object({
    profile: z.boolean(),
    status: z.boolean(),
    lessons: z.boolean(),
    todos: z.boolean(),
  })
  .strict()
  .partial();

export const accountCreateSchema = z.object({
  name: z.string().min(1, { message: '名前を入力してください' }),
  email: z.string().email({ message: '正しいEmailを入力してください' }),
  os: z.union([z.literal('mac'), z.literal('windows'), z.literal('others')]),
  byFind: z.string(),
});

export const accountUpdateSchema = z
  .object({
    ...accountCreateSchema.omit({ byFind: true }).shape,
    github_id: z.string(),
    zenn_id: z.string(),
  })
  .partial();
