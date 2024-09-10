'use client';

import AthleteCard from '@/components/athlete-card';
import { ATHLETES_PER_PAGE } from '@/lib/constants';
import { AthleteWithSport, findAthletes } from '@/services/athlete';
import { Category } from '@/types/sport';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface Props {
  initialData: AthleteWithSport[];
  filters: { searchText?: string; category?: Category };
}

export default function AthleteList({ initialData, filters }: Props) {
  const [offset, setOffset] = useState(ATHLETES_PER_PAGE);
  const [athletes, setAthletes] = useState<AthleteWithSport[]>(initialData);
  const [hasMoreData, setHasMoreData] = useState(
    initialData.length === ATHLETES_PER_PAGE
  );
  const [scrollTrigger, isInView] = useInView();

  async function loadMoreAthletes() {
    if (hasMoreData) {
      const apiAthletes = await findAthletes({ offset, ...filters });
      if (apiAthletes.length === 0) {
        setHasMoreData(false);
        return;
      }
      setAthletes((prev) => [...prev, ...apiAthletes]);
      setOffset((prev) => prev + ATHLETES_PER_PAGE);
    }
  }

  useEffect(() => {
    if (isInView && hasMoreData) {
      loadMoreAthletes();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView, hasMoreData]);

  return (
    <>
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
        {athletes.map((athlete) => (
          <AthleteCard key={athlete.id} athlete={athlete} />
        ))}
      </div>

      <div className='w-full flex justify-center py-4'>
        {hasMoreData && <div ref={scrollTrigger}>Carregando...</div>}
      </div>
    </>
  );
}
