'use client';

import React from 'react';
import Title from '@/app/components/ui/title';
import Text from '@/app/components/ui/text';
import SquareCell from '@/app/components/ui/square-cell';
import { tools } from '@/app/lib/data';

const Tools = () => {
  const description =
    'Currently, I primarily use Next.js for frontend and Express for backend,\nalong with Prisma ORM for database management.';

  return (
    <div className={'relative flex min-h-screen w-full justify-center px-8'}>
      {/* Fade-to-background overlay */}
      <div className="to-dark pointer-events-none absolute top-0 left-0 z-20 h-48 w-full bg-linear-to-t from-transparent" />

      <div className={'my-50 flex max-w-4xl flex-col items-center justify-center text-center'}>
        <div className="mb-8">
          <Title
            text={'TOOLS'}
            distortIntervalMs={2000}
            className={'text-[150px] md:text-[200px]'}
          />
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
            <SquareCell key={i} name={tool.name} logo={`/svg/${tool.logo}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tools;
