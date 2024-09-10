import * as React from 'react';

import { cn } from '@/lib/utils';
import { SearchIcon } from 'lucide-react';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-9 w-full border-2 border-black border-input bg-card px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-yellow-500 disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

const SearchInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <div className='relative w-full'>
        <SearchIcon className='absolute size-4 left-3 top-1/2 transform -translate-y-1/2 text-gray-900' />
        <input
          type={type}
          className={cn(
            'flex h-9 w-full border-2 border-black bg-card pl-8 pr-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 disabled:cursor-not-allowed disabled:opacity-50',
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
SearchInput.displayName = 'SearchInput';

export { Input, SearchInput };
