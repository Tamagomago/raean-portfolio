'use client';

import React, { useRef } from 'react';
import { Title, Text, SquareCell } from '@/app/components/ui';
import { tools } from '@/app/lib/data';
import { useParallax } from '@/app/hooks/useParallax';

const Tools = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const description =
    'Currently, I primarily use Next.js for frontend and Express for backend,\nalong with Prisma ORM for database management.';

  useParallax(containerRef, contentRef);

  return (
    <div
      ref={containerRef}
      className={'relative flex min-h-screen w-full justify-center px-8'}
    >
      {/* Fade-to-background overlay */}
      <div className="to-dark pointer-events-none absolute top-0 left-0 z-20 h-48 w-full bg-linear-to-t from-transparent" />

      <div
        ref={contentRef}
        className={'my-50 flex max-w-4xl flex-col items-center justify-center text-center'}
      >
        <div className="mb-8">
          <Title distortIntervalMs={2000} className={'text-[150px] md:text-[200px]'}>
            TOOLS
          </Title>
        </div>
        <div className="mb-16">
          {description.split('\n').map((sentence, i) => (
            <Text
              key={i}
              stagger={15}
              font={'font-geist-mono'}
              duration={300}
              className={'text-sm'}
              align="center"
            >
              {sentence}
            </Text>
          ))}
        </div>

        {/* 3-row grid of cells */}
        <div className="grid grid-cols-3 gap-3">
          {tools.map((tool, i) => (
            <SquareCell key={i} logo={`/svg/${tool.logo}`}>
              {tool.name}
            </SquareCell>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tools;
