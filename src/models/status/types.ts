import type { statusSchema } from '@/models/status/scheme';
import type {
  Role as PrismaRole,
  Status as PrismaStatus,
} from '@prisma/client';
import type { z } from 'zod';

export type Status = PrismaStatus;

export type Role = PrismaRole;

/* Validated parameters */
export type StatusValidatedUpdateParams = z.infer<typeof statusSchema>;
