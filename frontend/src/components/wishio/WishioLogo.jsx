import React from 'react';
import { cn } from '../../lib/utils';

const WishioLogo = ({ className, iconClassName }) => {
  return (
    <div
      className={cn(
        'flex items-center justify-center bg-gradient-to-br from-violet-500 to-purple-600',
        className
      )}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn('text-white', iconClassName)}
        aria-hidden="true"
      >
        <rect x="3" y="8" width="18" height="13" rx="2.5" stroke="currentColor" strokeWidth="2.1" />
        <path d="M12 8V21" stroke="currentColor" strokeWidth="2.1" />
        <path d="M3 13H21" stroke="currentColor" strokeWidth="2.1" />
        <path
          d="M12 8C9.6 8 7.5 6.8 7.5 4.8C7.5 3.2 8.8 2 10.4 2C12.6 2 14.4 4.2 14.8 8"
          stroke="currentColor"
          strokeWidth="2.1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 8C14.4 8 16.5 6.8 16.5 4.8C16.5 3.2 15.2 2 13.6 2C11.4 2 9.6 4.2 9.2 8"
          stroke="currentColor"
          strokeWidth="2.1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default WishioLogo;
