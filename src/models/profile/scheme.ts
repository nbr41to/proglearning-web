import { z } from 'zod';

export const profileSchema = z.object({
  name: z.string().min(1, { message: '名前を入力してください' }),
  os: z.string(),
  // os: z.union([z.literal('mac'), z.literal('windows'), z.literal('others')]),
  github_id: z.string().nullable(),
  zenn_id: z.string().nullable(),
  introduction: z
    .string()
    .min(1, { message: '自己紹介を入力してください' })
    .nullable(),
});
