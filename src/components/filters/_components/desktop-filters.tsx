import CategoriesFilter from '@/components/filters/_components/categories-filter';
import SortBy from '@/components/filters/_components/sort-by';
import SportsFilter from '@/components/filters/_components/sports-filter';
import { CategoriesCount } from '@/types/athlete';
import { Category, SportWithCount } from '@/types/sport';

interface Props {
  category: string;
  sports: SportWithCount[];
  sportCode: string;
  categoriesCount: CategoriesCount;
  onCategoryChange: (category: Category) => void;
  onSportChange: (sportCode: string) => void;
  sort: string;
  onSortByChange: (sort: string) => void;
  sortDir: string;
  onDirectionChange: () => void;
}

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
}: Props) {
  return (
    <div className='flex w-full justify-between'>
      <div className='flex gap-8'>
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
