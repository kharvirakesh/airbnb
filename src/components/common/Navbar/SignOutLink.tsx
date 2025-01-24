import React, { FC } from 'react';
import { SignOutButton } from '@clerk/nextjs';
import { useToast } from '@/hooks/use-toast';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface ISignOutLinkProps {
}

/**
 * @component SignOutLink
 * @todo Add styling, enhance props, and implement business logic as needed.
 */
export const SignOutLink: FC<ISignOutLinkProps> = ({ }) => {
  const {toast} = useToast()
  const handleLogout = () => {
    toast({
      description:'You have been signed out.'
    })
  }
  return (
 <SignOutButton redirectUrl='/'>
  <button onClick={handleLogout} className='w-full text-left'>Logout</button>
 </SignOutButton>
  );
};

