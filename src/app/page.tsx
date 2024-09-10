import AthleteList from '@/components/athlete-list';
import Filters from '@/components/filters';
import { findAthletes } from '@/services/athlete';
import { findSports } from '@/services/sports';
import { Category } from '@/types/sport';
import { Suspense } from 'react';

interface Props {
  searchParams: {
    q?: string;
    category?: Category;
  };
}

export default async function Home({ searchParams }: Props) {
  const searchText = searchParams?.q || '';
  const category = searchParams?.category || 'all';
  const athletes = await findAthletes({
    searchText,
    category,
  });
  const sports = await findSports();

  return (
    <main className='p-4 flex flex-col gap-12'>
      <Filters />
      <Suspense key={searchText + category} fallback={<div>Carregando...</div>}>
        <AthleteList
          filters={{ searchText, category }}
          initialData={athletes}
        />
      </Suspense>
    </main>
  );
}
