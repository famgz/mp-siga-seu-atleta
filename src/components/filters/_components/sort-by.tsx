import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ArrowDownWideNarrowIcon, ArrowUpNarrowWideIcon } from 'lucide-react';

interface Props {
  sort: string;
  onSortByChange: (sort: string) => void;
  sortDir: string;
  onDirectionChange: () => void;
}

export default function SortBy({
  sort,
  onSortByChange,
  sortDir,
  onDirectionChange,
}: Props) {
  return (
    <div className='flex flex-col md:flex-row items-center gap-1'>
      <span className='text-sm underline decoration-yellow-500 block md:hidden'>
        Ordenação:
      </span>
      <div className='flex items-center gap-1'>
        <Select
          defaultValue='followers'
          value={sort}
          onValueChange={onSortByChange}>
          <SelectTrigger className='w-32'>
            <SelectValue placeholder='Seguidores' />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value='followers'>Seguidores</SelectItem>
            <SelectItem value='name'>Nome</SelectItem>
            <SelectItem value='sport'>Esporte</SelectItem>
          </SelectContent>

          <Button onClick={onDirectionChange} type='button'>
            {sortDir === 'desc' ? (
              <ArrowDownWideNarrowIcon />
            ) : (
              <ArrowUpNarrowWideIcon />
            )}
          </Button>
        </Select>
      </div>
    </div>
  );
}
