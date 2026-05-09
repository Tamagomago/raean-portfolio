'use client';

import React, { useState } from 'react';
import { cn } from '@/app/lib/utils';
import Image from 'next/image';
import Text from '@/app/components/ui/text';

interface SquareCellProps {
  logo: string;
  name: string;
  className?: string;
}

const SquareCell = ({ logo, name, className }: SquareCellProps) => {
  const [glitchKey, setGlitchKey] = useState(0);

  const handleMouseEnter = () => {
    setGlitchKey((prev) => prev + 1);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      className={cn(
        'group relative flex aspect-square w-24 items-center justify-center overflow-hidden border border-dashed border-white/70 transition-all duration-300 hover:border-none hover:border-white md:w-64',
        className,
      )}
    >
      {/*Sliding Background*/}
      <div
        className={
          'absolute inset-0 -translate-y-full bg-white transition-transform duration-300 ease-out group-hover:translate-y-0'
        }
      />
      <div className="relative h-12 w-12 transition-all duration-300 md:h-16 md:w-16">
        <Image src={logo} alt={name} fill className="object-contain group-hover:invert" />
      </div>
      <div
        className={
          'absolute right-0 bottom-0 hidden bg-black px-2 text-white lowercase group-hover:block'
        }
      >
        <Text key={glitchKey} className={'text-lg'} forceVisible={true}>
          {name}
        </Text>
      </div>
    </div>
  );
};

export default SquareCell;
