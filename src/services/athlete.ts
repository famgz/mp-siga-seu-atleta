'use server';

import { ATHLETES_PER_PAGE } from '@/lib/constants';
import { db } from '@/lib/prisma';
import { AthleteWithSport, CategoriesCount } from '@/types/athlete';
import { Category } from '@/types/sport';

interface GetCategoriesCountProps {
  searchText?: string;
  sportCode?: string;
}

interface FindAthletesProps extends GetCategoriesCountProps {
  category?: Category;
  offset?: number;
  limit?: number;
}

const isParalympic = (category: Category) =>
  !category || category === 'all' ? undefined : category === 'paralympic';

export async function getCategoriesCount({
  searchText,
  sportCode,
}: GetCategoriesCountProps): Promise<CategoriesCount> {
  const athletes = await db.athlete.findMany({
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
          sport: {
            code: sportCode,
          },
        },
      ],
    },
  });

  const paralympicCount = athletes.reduce(
    (acc: number, athlete) => (athlete.sport?.paralympic ? acc + 1 : acc),
    0
  );

  return {
    all: athletes.length,
    paralympic: paralympicCount,
    olympic: athletes.length - paralympicCount,
  };
}

export async function findAthletes({
  offset = 0,
  limit = ATHLETES_PER_PAGE,
  searchText,
  category = 'all',
  sportCode,
}: FindAthletesProps): Promise<AthleteWithSport[]> {
  const paralympic = isParalympic(category);

  const athletes = await db.athlete.findMany({
    skip: offset,
    take: limit,
    include: { sport: true },
    where: {
      AND: [
        // search string
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
        // is paralympic
        {
          paralympic,
        },
        // sport
        {
          sport: {
            code: sportCode,
          },
        },
      ],
    },
    orderBy: {
      instagramFollowersCount: 'desc',
    },
  });

  return athletes;
}
