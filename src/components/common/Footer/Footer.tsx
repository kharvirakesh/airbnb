import React, { FC } from 'react';

interface IFooterProps {
  property1: string; // Adjust the type based on actual requirements
  property2: number; // Adjust the type based on actual requirements
}

export const Footer: FC<IFooterProps> = ({ property1, property2 }) => {
  return (
    <div>
      <h1>Footer</h1>
      <p>Property 1: {property1}</p>
      <p>Property 2: {property2}</p>
    </div>
  );
};

