import { Prisma } from '@prisma/client';

export type AthleteWithSport = Prisma.AthleteGetPayload<{
  include: { sport: true };
}>;

export type CategoriesCount = {
  all: number;
  paralympic: number;
  olympic: number;
};

export type AthleteSort = 'followers' | 'name' | 'sport';

export type AthleteSortDir = 'desc' | 'asc';
