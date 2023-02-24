import type { profileSchema } from '@/models/profile/scheme';
import type { Profile as PrismaProfile } from '@prisma/client';
import type { z } from 'zod';

export type Profile = PrismaProfile;

/* Validated parameters */
export type ProfileValidatedUpdateParams = z.infer<typeof profileSchema>;
