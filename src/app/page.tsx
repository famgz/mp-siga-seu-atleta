import AthleteList from '@/components/athlete-list';
import { findAthletes } from '@/services/athlete';
import { findSports } from '@/services/sports';
import { Suspense } from 'react';

export default async function Home() {
  const athletes = await findAthletes({});
  const sports = await findSports();

  return (
    <main className='p-4 flex flex-col gap-12'>
      <Suspense key={'any'} fallback={<div>Carregando...</div>}>
        <AthleteList initialData={athletes} />
      </Suspense>
    </main>
  );
}
