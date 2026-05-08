'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Text from '@/app/components/ui/text';

const Navbar = () => {
  const navItems = ['home', 'about', 'works', 'experience', 'contact'];
  const [glitchMap, setGlitchMap] = useState<Record<string, number>>({});

  const triggerGlitch = (item: string) => {
    setGlitchMap((prev) => ({
      ...prev,
      [item]: (prev[item] || 0) + 1,
    }));
  };

  return (
    <header className={'pointer-events-none fixed inset-0 top-8 z-50 h-fit w-fit text-white'}>
      <nav className="pointer-events-auto w-fit">
        <ul className="flex w-fit flex-col gap-4">
          {navItems.map((item) => (
            <Link
              key={item}
              href={item === 'home' ? '/' : item}
              className={
                'block w-fit py-0.5 pr-4 pl-8 transition-colors duration-150 hover:bg-white hover:text-black'
              }
              onMouseEnter={() => triggerGlitch(item)}
            >
              <Text
                key={`${item}-${glitchMap[item] || 0}`}
                className={'px-0! text-lg'}
                forceVisible={true}
              >
                {`> ${item}`}
              </Text>
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
