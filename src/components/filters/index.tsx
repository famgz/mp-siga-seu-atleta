'use client';

import { SearchInput } from '@/components/ui/input';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export default function Filters() {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
  const q = searchParams.get('q') || '';

  const handleSearch = useDebouncedCallback(
    (ev: React.ChangeEvent<HTMLInputElement>) => {
      const params = new URLSearchParams(searchParams);
      const searchString = ev.target.value;
      if (searchString) params.set('q', searchString);
      else params.delete('q');
      replace(`${pathname}?${params.toString()}`);
    },
    200
  );

  return (
    <div className='relative flex md:flex-col lg:flex-row gap-8'>
      <div>
        <SearchInput
          className='w-full lg:w-56'
          type='text'
          name='q'
          placeholder='Pesquisar'
          defaultValue={q}
          onChange={handleSearch}
        />
      </div>
    </div>
  );
}
