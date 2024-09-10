'use server';

import { ATHLETES_PER_PAGE } from '@/lib/constants';
import { db } from '@/lib/prisma';
import { Prisma } from '@prisma/client';
import { revalidatePath } from 'next/cache';

export type AthleteWithSport = Prisma.AthleteGetPayload<{
  include: { sport: true };
}>;

interface FindAthletesProps {
  offset?: number;
  limit?: number;
  searchText?: string;
}

export async function findAthletes({
  offset = 0,
  limit = ATHLETES_PER_PAGE,
  searchText,
}: FindAthletesProps) {
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
        {},
      ],
    },
  });
}
