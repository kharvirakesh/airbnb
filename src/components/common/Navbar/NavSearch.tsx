import { Input } from '@/components/ui/input';
import React, { FC } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface INavSearchProps {
}

/**
 * @component NavSearch
 * @todo Add styling, enhance props, and implement business logic as needed.
 */
export const NavSearch: FC<INavSearchProps> = ({ }) => {
  return (
    <Input
    type='search'
    placeholder='find a property...'
    className='max-w-xs dark:bg-muted '
  />
  );
};
