import { db } from '@/lib/prisma';

export default async function Home() {
  const sports = await db.sport.findMany({});

  return (
    <div>
      {sports.map((sport) => (
        <p key={sport.id}>{sport.name}</p>
      ))}
    </div>
  );
}
