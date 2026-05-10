'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Text from '@/app/components/ui/text';
import { cn } from '@/app/lib/utils';

interface NavLinkProps {
  href: string;
  children: string;
  showActiveBg?: boolean;
  className?: string;
  textClassName?: string;
  onMouseEnter?: () => void;
}

const NavLink = ({
  href,
  children,
  showActiveBg,
  className,
  textClassName,
  onMouseEnter,
}: NavLinkProps) => {
  const [glitchKey, setGlitchKey] = useState(0);

  const handleMouseEnter = () => {
    setGlitchKey((prev) => prev + 1);
    onMouseEnter?.();
  };

  return (
    <Link
      href={href}
      className={cn(
        'group relative block w-fit overflow-hidden transition-colors duration-150',
        textClassName?.includes('p-') ? '' : 'py-0.5 pr-4 pl-8',
        showActiveBg ? 'text-black' : 'text-white',
        className,
      )}
      onMouseEnter={handleMouseEnter}
    >
      {/* Sliding background */}
      <div
        className={cn(
          'absolute inset-0 -translate-x-full bg-white transition-transform duration-300 ease-out group-hover:translate-x-0',
          showActiveBg ? 'translate-x-0' : '',
        )}
      />
      <Text
        key={glitchKey}
        className={cn(
          'relative z-10 px-0! transition-colors duration-300',
          showActiveBg ? 'text-black' : 'group-hover:text-black',
          'font-rainyhearts',
          textClassName,
        )}
        forceVisible={true}
        noWrap={true}
      >
        {children.startsWith('>') ? children : `> ${children}`}
      </Text>
    </Link>
  );
};

export default NavLink;
