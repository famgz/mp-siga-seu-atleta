'use client';

import DesktopFilters from '@/components/filters/_components/desktop-filters';
import { SearchInput } from '@/components/ui/input';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export default function Filters() {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
  const q = searchParams.get('q') || '';
  const category = searchParams.get('category') || 'all';

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

  function handleCategoryChange(selectedCategory: string) {
    if (!selectedCategory) return;
    const params = new URLSearchParams(searchParams);
    params.set('category', selectedCategory);
    replace(`${pathname}?${params.toString()}`);
  }

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

      <DesktopFilters
        category={category}
        onCategoryChange={handleCategoryChange}
      />
    </div>
  );
}
