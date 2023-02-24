import { z } from 'zod';

export const statusSchema = z
  .object({
    tutorial_step: z.number(),
    done_daily_at: z.date(),
  })
  .partial();
