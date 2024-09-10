import CategoriesFilter from '@/components/filters/_components/categories-filter';
import { Category } from '@/types/sport';

interface Props {
  category: string;
  onCategoryChange: (category: Category) => void;
}

export default function DesktopFilters({ category, onCategoryChange }: Props) {
  return (
    <div className='flex w-full justify-between'>
      <div className='flex gap-8'>
        <CategoriesFilter
          category={category}
          onCategoryChange={onCategoryChange}
        />
      </div>
    </div>
  );
}
