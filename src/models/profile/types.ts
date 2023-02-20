import type { profileSchema } from '@/validations/scheme/profile';
import type { Profile as PrismaProfile } from '@prisma/client';
import type { z } from 'zod';

export type Profile = PrismaProfile;

/* Validated parameters */
export type ProfileValidatedUpdateParams = z.infer<typeof profileSchema>;
