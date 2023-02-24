import type { Prisma, Lesson as PrismaLesson } from '@prisma/client';

export type MyLesson = PrismaLesson;

/* API parameters */
export type MyLessonCreateParams = Omit<Prisma.LessonCreateInput, 'account'>;
export type MyLessonUpdateParams = Prisma.LessonUpdateInput;
