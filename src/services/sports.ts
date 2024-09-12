import { db } from '@/lib/prisma';
import { SportWithCount } from '@/types/sport';

interface FindSportsProps {
  searchText?: string;
}

export async function findSports({
  searchText = '',
}: FindSportsProps): Promise<SportWithCount[]> {
  return await db.sport.findMany({
    include: {
      _count: {
        select: {
          athletes: {
            where: {
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
          },
        },
      },
    },
  });
}
