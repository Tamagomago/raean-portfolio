'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Text from '@/app/components/ui/text';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const navItems = ['home', 'about', 'works', 'experience', 'contact'];
  const [glitchMap, setGlitchMap] = useState<Record<string, number>>({});
  const [isHovered, setIsHovered] = useState(false);
  const pathname = usePathname();
  const currentPage = pathname === '/' ? 'home' : pathname.slice(1);

  const triggerGlitch = (item: string) => {
    setGlitchMap((prev) => ({
      ...prev,
      [item]: (prev[item] || 0) + 1,
    }));
  };

  return (
    <header className={'pointer-events-none fixed inset-0 top-8 z-50 h-fit w-fit text-white'}>
      <nav 
        className="pointer-events-auto w-fit"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <ul className="flex w-fit flex-col gap-4">
          {navItems.map((item) => {
            const isActive = currentPage === item;
            const showActiveBg = isActive && !isHovered;

            return (
              <Link
                key={item}
                href={item === 'home' ? '/' : item}
                className={`group relative block w-fit overflow-hidden py-0.5 pr-4 pl-8 transition-colors duration-150 ${showActiveBg ? 'text-black' : 'text-white'}`}
                onMouseEnter={() => triggerGlitch(item)}
              >
                {/* Sliding background */}
                <div
                  className={`absolute inset-0 -translate-x-full bg-white transition-transform duration-300 ease-out group-hover:translate-x-0 ${showActiveBg ? 'translate-x-0' : ''}`}
                />
                <Text
                  key={`${item}-${glitchMap[item] || 0}`}
                  className={`px-0! relative z-10 text-lg transition-colors duration-300 ${showActiveBg ? 'text-black' : 'group-hover:text-black'}`}
                  forceVisible={true}
                >
                  {`> ${item}`}
                </Text>
              </Link>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
