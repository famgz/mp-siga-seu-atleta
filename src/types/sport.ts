import { Prisma } from '@prisma/client';

export type Category = 'all' | 'paralympic' | 'olympic';

export type SportWithCount = Prisma.SportGetPayload<{
  include: { _count: true };
}>;
