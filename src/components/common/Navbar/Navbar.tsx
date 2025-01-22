import React, { FC } from "react";
import { DarkMode, LinksDropdown, Logo, NavSearch } from ".";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface INavbarProps {}

export const Navbar: FC<INavbarProps> = ({}) => {
  return (
    <nav className='border-b'>
    <div className='container flex flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap gap-4 py-8'>
      <Logo />
      <NavSearch />
      <div className='flex gap-4 items-center'>
        <DarkMode />
        <LinksDropdown />
      </div>
    </div>
  </nav>
  );
};

