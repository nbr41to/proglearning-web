import { z } from 'zod';

export const profileSchema = z
  .object({
    name: z.string().min(1, { message: '名前を入力してください' }),
    introduction: z
      .string()
      .min(1, { message: '自己紹介を入力してください' })
      .nullable(),
    current_goal: z.string().nullable(),
  })
  .partial();
