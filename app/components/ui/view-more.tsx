'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Text, NavLink } from '@/app/components/ui';
import { cn } from '@/app/lib/utils';

interface ViewMoreProps {
  href: string;
  label?: string;
  className?: string;
  textClassName?: string;
}

const ViewMore = ({ href, label = 'view_more', className, textClassName }: ViewMoreProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn('mt-8 w-fit cursor-pointer', className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
    >
      {isHovered ? (
        <NavLink href={href} className={cn('mt-0!', textClassName)} textClassName={textClassName}>
          {label}
        </NavLink>
      ) : (
        <div
          className={cn(
            'relative block w-fit overflow-hidden bg-white text-black transition-colors duration-150',
            textClassName?.includes('p-') ? '' : 'px-2 py-0.5',
          )}
        >
          <Link href={href}>
            <Text
              duration={150}
              className={cn('relative z-10 px-0! text-black!', textClassName || 'text-base')}
            >
              {'>'}
            </Text>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ViewMore;
