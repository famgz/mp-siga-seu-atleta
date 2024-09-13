'use client';

import SportIcon from '@/components/filters/_components/sport-icon';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { SportWithCount } from '@/types/sport';
import { CheckIcon } from 'lucide-react';
import { useState } from 'react';

interface Props {
  sports: SportWithCount[];
  sportCode: string;
  onSportChange: (sportCode: string) => void;
}

export default function SportsFilter({
  sports,
  onSportChange,
  sportCode,
}: Props) {
  const [open, setOpen] = useState(false);
  const [selectedSport, setSelectedSport] = useState<
    SportWithCount | undefined
  >(sports.find((sport) => sport.code === sportCode));

  function handleChange(name: string) {
    if (name === selectedSport?.name) {
      setSelectedSport(undefined);
      onSportChange('');
    } else {
      const selected = sports.find((sport) => sport.name === name);
      setSelectedSport(selected);
      onSportChange(selected?.code || '');
    }
    setOpen(false);
  }

  return (
    <div className='flex flex-col md:flex-row items-center gap-1 h-9'>
      <span className='text-sm underline decoration-yellow-500 block md:hidden'>
        Esporte:
      </span>
      <div className='flex items-center gap-4 h-full'>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant={'outline'}
              size={'sm'}
              className='h-full min-h-9 justify-start'>
              {selectedSport ? (
                <SportSymbolWithNameAndCount
                  sport={selectedSport}
                  isCurrent={false}
                />
              ) : (
                'Todos os esportes'
              )}
            </Button>
          </PopoverTrigger>

          <PopoverContent className='p-0' side='top' align='center'>
            <Command>
              <CommandInput placeholder='Pesquisar esporte...' />
              <CommandList>
                <CommandEmpty>Esporte não encontrado</CommandEmpty>
                <CommandGroup>
                  {sports.map((sport) => (
                    <CommandItem
                      key={sport.code}
                      value={sport.name}
                      onSelect={handleChange}>
                      <SportSymbolWithNameAndCount
                        sport={sport}
                        isCurrent={sport.code === selectedSport?.code}
                      />
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}

function SportSymbolWithNameAndCount({
  sport,
  isCurrent,
}: {
  sport: SportWithCount;
  isCurrent: boolean;
}) {
  return (
    <div className='flex items-center gap-2 whitespace-nowrap'>
      <SportIcon sportCode={sport.code} />
      <span>
        {sport.name} ({sport._count.athletes})
      </span>
      {isCurrent && <CheckIcon className='size-4' strokeWidth={3} />}
    </div>
  );
}
