'use server';

import { ATHLETES_PER_PAGE } from '@/lib/constants';
import { db } from '@/lib/prisma';
import { Category } from '@/types/sport';
import { Prisma } from '@prisma/client';

export type AthleteWithSport = Prisma.AthleteGetPayload<{
  include: { sport: true };
}>;

interface FindAthletesProps {
  offset?: number;
  limit?: number;
  searchText?: string;
  category?: Category;
}

export async function findAthletes({
  offset = 0,
  limit = ATHLETES_PER_PAGE,
  searchText,
  category = 'all',
}: FindAthletesProps) {
  const paralympic =
    !category || category === 'all' ? undefined : category === 'paralympic';

  return await db.athlete.findMany({
    skip: offset,
    take: limit,
    include: { sport: true },
    where: {
      AND: [
        {
          OR: [
            {
              instagramName: {
                contains: searchText,
                mode: 'insensitive',
              },
            },
            {
              instagramBio: {
                contains: searchText,
                mode: 'insensitive',
              },
            },
          ],
        },
        {
          paralympic,
        },
      ],
    },
    orderBy: {
      instagramFollowersCount: 'desc',
    },
  });
}
