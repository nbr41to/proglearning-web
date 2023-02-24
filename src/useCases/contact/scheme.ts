import { z } from 'zod';

export const contactSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'Emailを入力してください' })
    .email({ message: '正しいEmailを入力してください' }),
  content: z.string().min(1, { message: '内容を入力してください' }),
});
