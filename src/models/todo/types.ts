import type { Prisma, Todo as PrismaTodo } from '@prisma/client';

export type Todo = PrismaTodo;

/* API parameters */
export type TodoCreateParams = Omit<Prisma.TodoCreateInput, 'account'>;
export type TodoUpdateParams = Prisma.TodoUpdateInput & { id: number };
