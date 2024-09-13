import CategoriesFilter from '@/components/filters/_components/categories-filter';
import SortBy from '@/components/filters/_components/sort-by';
import SportsFilter from '@/components/filters/_components/sports-filter';
import { FilterProps } from '@/components/filters/types';

export default function DesktopFilters({
  category,
  categoriesCount,
  onCategoryChange,
  onSportChange,
  sports,
  sportCode,
  sort,
  onSortByChange,
  sortDir,
  onDirectionChange,
}: FilterProps) {
  return (
    <div className='flex w-full justify-between'>
      <div className='flex gap-8 items-center'>
        <CategoriesFilter
          category={category}
          categoriesCount={categoriesCount}
          onCategoryChange={onCategoryChange}
        />

        <SportsFilter
          sports={sports}
          sportCode={sportCode}
          onSportChange={onSportChange}
        />
      </div>

      <SortBy
        sort={sort}
        onSortByChange={onSortByChange}
        sortDir={sortDir}
        onDirectionChange={onDirectionChange}
      />
    </div>
  );
}
