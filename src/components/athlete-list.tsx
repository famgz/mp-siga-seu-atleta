import AthleteCard from '@/components/athlete-card';
import { AthleteWithSport } from '@/services/athlete';
import { Athlete } from '@prisma/client';

interface Props {
  initialData: AthleteWithSport[];
}

export default function AthleteList({ initialData }: Props) {
  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
      {initialData.map((athlete) => (
        <AthleteCard key={athlete.id} athlete={athlete} />
      ))}
    </div>
  );
}
