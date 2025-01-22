import React, { FC } from 'react';
import { LuTent } from 'react-icons/lu';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface ILogoProps {
}

/**
 * @component Logo
 * @todo Add styling, enhance props, and implement business logic as needed.
 */
export const Logo: FC<ILogoProps> = ({ }) => {
  return (
    <Button size='icon' asChild>
    <Link href='/'>
      <LuTent className='w-6 h-6' />
    </Link>
  </Button>
  );
};




