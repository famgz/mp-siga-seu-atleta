import AthleteList from '@/components/athlete-list';
import Filters from '@/components/filters';
import { findAthletes } from '@/services/athlete';
import { findSports } from '@/services/sports';
import { Suspense } from 'react';

interface Props {
  searchParams: {
    q?: string;
  };
}

export default async function Home({ searchParams }: Props) {
  const searchText = searchParams?.q || '';
  const athletes = await findAthletes({
    searchText,
  });
  const sports = await findSports();

  return (
    <main className='p-4 flex flex-col gap-12'>
      <Filters />
      <Suspense key={searchText} fallback={<div>Carregando...</div>}>
        <AthleteList filters={{ searchText }} initialData={athletes} />
      </Suspense>
    </main>
  );
}
