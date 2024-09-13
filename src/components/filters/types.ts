import { CategoriesCount } from '@/types/athlete';
import { Category, SportWithCount } from '@/types/sport';

export interface FilterProps {
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
