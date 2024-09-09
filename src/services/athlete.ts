'use server';

import { ATHLETES_PER_PAGE } from '@/lib/constants';
import { db } from '@/lib/prisma';
import { Prisma } from '@prisma/client';

export type AthleteWithSport = Prisma.AthleteGetPayload<{
  include: { sport: true };
}>;

interface FindAthletesProps {
  offset?: number;
  limit?: number;
}

export async function findAthletes({
  offset = 0,
  limit = ATHLETES_PER_PAGE,
}: FindAthletesProps) {
  return await db.athlete.findMany({
    skip: offset,
    take: limit,
    include: { sport: true },
  });
}
