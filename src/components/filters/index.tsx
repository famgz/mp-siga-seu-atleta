'use client';

import DesktopFilters from '@/components/filters/_components/desktop-filters';
import MobileFilters from '@/components/filters/_components/mobile-filters';
import { SearchInput } from '@/components/ui/input';
import { CategoriesCount } from '@/types/athlete';
import { SportWithCount } from '@/types/sport';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

interface Props {
  sports: SportWithCount[];
  categoriesCount: CategoriesCount;
}

export default function Filters({ sports, categoriesCount }: Props) {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
  // const isMobile = useMediaQuery('only screen and (max-width: 768px)');  // causes hydration error, maybe it loads after the rendering

  const q = searchParams.get('q') || '';
  const category = searchParams.get('category') || 'all';
  const sport = searchParams.get('sport') || '';
  const sort = searchParams.get('sort') || '';
  const sortDir = searchParams.get('sortDir') || 'desc';

  function updateUrl(params: URLSearchParams) {
    replace(`${pathname}?${params.toString()}`);
  }

  const handleSearchChange = useDebouncedCallback(
    (ev: React.ChangeEvent<HTMLInputElement>) => {
      const params = new URLSearchParams(searchParams);
      const searchString = ev.target.value;
      if (searchString) {
        params.set('q', searchString);
      } else {
        params.delete('q');
      }
      updateUrl(params);
    },
    200
  );

  function handleCategoryChange(selectedCategory: string) {
    if (!selectedCategory) return;
    const params = new URLSearchParams(searchParams);
    params.set('category', selectedCategory);
    updateUrl(params);
  }

  function handleSportChange(sportCode: string) {
    const params = new URLSearchParams(searchParams);
    if (!sportCode) {
      params.delete('sport');
    } else {
      params.set('sport', sportCode);
    }
    updateUrl(params);
  }

  function handleSortByChange(selectedSort: string) {
    const params = new URLSearchParams(searchParams);
    params.set('sort', selectedSort);
    updateUrl(params);
  }

  function handleSortDirectionChange() {
    const params = new URLSearchParams(searchParams);
    params.set('sortDir', sortDir === 'desc' ? 'asc' : 'desc');
    updateUrl(params);
  }

  return (
    <div className='relative items-center flex md:flex-col lg:flex-row gap-8'>
      <SearchInput
        className='lg:w-56'
        type='text'
        name='q'
        placeholder='Pesquisar'
        defaultValue={q}
        onChange={handleSearchChange}
      />

      <div className='md:hidden'>
        <MobileFilters
          category={category}
          onCategoryChange={handleCategoryChange}
          sports={sports}
          sportCode={sport}
          categoriesCount={categoriesCount}
          onSportChange={handleSportChange}
          sort={sort}
          onSortByChange={handleSortByChange}
          sortDir={sortDir}
          onDirectionChange={handleSortDirectionChange}
        />
      </div>

      <div className='hidden md:block'>
        <DesktopFilters
          category={category}
          onCategoryChange={handleCategoryChange}
          sports={sports}
          sportCode={sport}
          categoriesCount={categoriesCount}
          onSportChange={handleSportChange}
          sort={sort}
          onSortByChange={handleSortByChange}
          sortDir={sortDir}
          onDirectionChange={handleSortDirectionChange}
        />
      </div>
    </div>
  );
}
