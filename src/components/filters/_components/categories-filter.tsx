import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Category } from '@/types/sport';

interface Props {
  category: string;
  onCategoryChange: (category: Category) => void;
}

export default function CategoriesFilter({
  category,
  onCategoryChange,
}: Props) {
  return (
    <div className='flex flex-col md:flex-row items-center gap-1 mt-10 md:mt-0'>
      <span className='text-sm underline decoration-yellow-500 block md:hidden'>
        Categoria:
      </span>

      <ToggleGroup
        type='single'
        value={category}
        onValueChange={onCategoryChange}>
        <ToggleGroupItem value='all' aria-label='Selecionar todos'>
          Todos
        </ToggleGroupItem>
        <ToggleGroupItem value='olympic' aria-label='Selecionar Olímpicos'>
          Olímpicos
        </ToggleGroupItem>
        <ToggleGroupItem
          value='paralympic'
          aria-label='Selecionar Paralímpicos'>
          Paralímpicos
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
}
