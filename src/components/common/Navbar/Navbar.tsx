import React, { FC } from 'react';

interface INavbarProps {
  property1: string; // Adjust the type based on actual requirements
  property2: number; // Adjust the type based on actual requirements
}

export const Navbar: FC<INavbarProps> = ({ property1, property2 }) => {
  return (
    <div>
      <h1>Navbar</h1>
      <p>Property 1: {property1}</p>
      <p>Property 2: {property2}</p>
    </div>
  );
};

