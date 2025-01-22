import React, { FC } from 'react';
import { LuUser } from "react-icons/lu";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface IUserIconProps {
}

/**
 * @component UserIcon
 * @todo Add styling, enhance props, and implement business logic as needed.
 */
export const UserIcon: FC<IUserIconProps> = ({ }) => {
  return (
    <LuUser className='w-6 h-6 bg-primary rounded-full text-white' />
  );
};
