'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { NavLink } from '@/app/components/ui';

const Navbar = () => {
  const navItems = ['home', 'about_raean', 'works', 'experience', 'contact'];
  const [isHovered, setIsHovered] = useState(false);
  const pathname = usePathname();
  const currentPage = pathname === '/' ? 'home' : pathname.slice(1);

  return (
    <header className={'pointer-events-none fixed top-8 left-0 z-50 h-fit w-fit text-white'}>
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
              <NavLink
                key={item}
                href={item === 'home' ? '/' : item}
                showActiveBg={showActiveBg}
              >
                {item}
              </NavLink>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
