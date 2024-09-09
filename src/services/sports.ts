import { db } from '@/lib/prisma';

export async function findSports() {
  return await db.sport.findMany();
}
