import { db } from '@/lib/prisma';
import { Athlete, Prisma, Sport } from '@prisma/client';

export type AthleteWithSport = Prisma.AthleteGetPayload<{
  include: { sport: true };
}>;

export async function findAthletes() {
  return await db.athlete.findMany({ include: { sport: true } });
}
