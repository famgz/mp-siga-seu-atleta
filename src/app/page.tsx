import AthleteList from '@/components/athlete-list';
import Filters from '@/components/filters';
import { findAthletes, getCategoriesCount } from '@/services/athlete';
import { findSports } from '@/services/sports';
import { Category } from '@/types/sport';
import { Suspense } from 'react';

interface Props {
  searchParams: {
    q?: string;
    category?: Category;
    sport?: string;
  };
}

export default async function Home({ searchParams }: Props) {
  const searchText = searchParams?.q || '';
  const category = searchParams?.category || 'all';
  const sportCode = searchParams?.sport;

  const [athletes, categoriesCount, sports] = await Promise.all([
    findAthletes({
      searchText,
      category,
      sportCode,
    }),
    getCategoriesCount({
      searchText,
      sportCode,
    }),
    findSports({ searchText }),
  ]);

  return (
    <main className='p-4 flex flex-col gap-12'>
      <Filters sports={sports} categoriesCount={categoriesCount} />
      <Suspense
        key={searchText + category + sportCode}
        fallback={<div>Carregando...</div>}>
        <AthleteList
          filters={{ searchText, category }}
          initialData={athletes}
        />
      </Suspense>
    </main>
  );
}
