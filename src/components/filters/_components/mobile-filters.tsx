'use client';

import CategoriesFilter from '@/components/filters/_components/categories-filter';
import SortBy from '@/components/filters/_components/sort-by';
import SportsFilter from '@/components/filters/_components/sports-filter';
import { FilterProps } from '@/components/filters/types';
import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { ListFilterIcon } from 'lucide-react';
import { useState } from 'react';

export default function MobileFilters({
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
  const [open, setOpen] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const closeAfter = (callback: (params?: any) => any) => (params?: any) => {
    callback(params);
    setOpen(false);
  };

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button className='bg-yellow-500 h-9 flex gap-2'>
          <ListFilterIcon className='size-5' />
          Filtros
        </Button>
      </DrawerTrigger>

      <DrawerContent className='p-4 flex flex-col gap-6'>
        <CategoriesFilter
          category={category}
          categoriesCount={categoriesCount}
          onCategoryChange={closeAfter(onCategoryChange)}
        />

        <SportsFilter
          sports={sports}
          sportCode={sportCode}
          onSportChange={closeAfter(onSportChange)}
        />

        <SortBy
          sort={sort}
          onSortByChange={closeAfter(onSortByChange)}
          sortDir={sortDir}
          onDirectionChange={closeAfter(onDirectionChange)}
        />
      </DrawerContent>
    </Drawer>
  );
}
