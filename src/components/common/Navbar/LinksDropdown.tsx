
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import Link from 'next/link';
import React, { FC } from 'react';
import { LuAlignLeft } from 'react-icons/lu';
import { UserIcon } from './UserIcon';
import { links } from '@/utils/links';
import { SignedOut, SignedIn, SignInButton, SignUpButton } from '@clerk/nextjs';
import { SignOutLink } from './SignOutLink';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface ILinksDropdownProps {
}

/**
 * @component LinksDropdown
 * @todo Add styling, enhance props, and implement business logic as needed.
 */

export const LinksDropdown: FC<ILinksDropdownProps> = ({ }) => {
  return (
    <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant='outline' className='flex gap-4 max-w-[100px]'>
        <LuAlignLeft className='w-6 h-6' />
        <UserIcon />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent className='w-52' align='start' sideOffset={10}>
    <SignedOut>
          <DropdownMenuItem>
            <SignInButton mode='modal'>
              <button className='w-full text-left'>Login</button>
            </SignInButton>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <SignUpButton mode='modal'>
              <button className='w-full text-left'>Register</button>
            </SignUpButton>
          </DropdownMenuItem>
      </SignedOut>

      <SignedIn>
      {links.map((link) => {
        return (
          <DropdownMenuItem key={link.href}>
            <Link href={link.href} className='capitalize w-full'>
              {link.label}
            </Link>
          </DropdownMenuItem>
        );
      })}
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        <SignOutLink />
      </DropdownMenuItem>
    </SignedIn>

      {/* <SignedIn>
          {links?.map((link) => {
        return (
          <DropdownMenuItem key={link.href}>
            <Link href={link.href} className='capitalize w-full'>
              {link.label}
            </Link>
          </DropdownMenuItem>
        );
      })}
        </SignedIn> */}

      {/* {links?.map((link) => {
        return (
          <DropdownMenuItem key={link.href}>
            <Link href={link.href} className='capitalize w-full'>
              {link.label}
            </Link>
          </DropdownMenuItem>
        );
      })} */}
    </DropdownMenuContent>
  </DropdownMenu>
  );
};
