'use client';

import React, { useRef } from 'react';
import { Title, ViewMore } from '@/app/components/ui';
import { experience } from '@/app/lib/data';
import { cn, getLatestExperience, truncate } from '@/app/lib/utils';
import { Text } from '@/app/components/ui';
import Link from 'next/link';
import { useParallax } from '@/app/hooks/useParallax';

const Experience = () => {
  const latestThree = getLatestExperience(experience);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useParallax(containerRef, contentRef);

  return (
    <div
      ref={containerRef}
      className={'bg-dark relative w-full overflow-hidden px-6 py-20 md:px-12 md:py-50 lg:px-24'}
    >
      <div
        ref={contentRef}
        className="flex w-full flex-col items-center justify-center gap-16 lg:flex-row lg:gap-10 xl:gap-20"
      >
        <div className={'flex flex-col items-center justify-center lg:flex-1 lg:items-start'}>
          <Title
            distortIntervalMs={2000}
            className={'text-[50px] leading-tight sm:text-[80px] md:text-[100px] xl:text-[125px]'}
          >
            EXPERIENCE
          </Title>
          <ViewMore href={'/about'} className={'lg:ml-4'} />
        </div>
        <div className="flex w-full flex-col items-center justify-center lg:flex-1 lg:items-end">
          {latestThree.map((exp, i) => (
            <Link
              href={'/about_raean'}
              key={i}
              className={cn(
                i === 2 ? 'border-b' : '',
                'group flex w-full items-center justify-between border-t border-dashed border-white/70 py-5 transition-colors duration-300 hover:bg-white/5 lg:pl-20',
              )}
            >
              <div
                className={`grid flex-1 grid-cols-1 items-start gap-2 sm:grid-cols-[160px_1fr] sm:items-center sm:gap-0 md:grid-cols-[200px_1fr]`}
              >
                <Text className="text-sm transition-transform duration-300 group-hover:translate-x-2 md:text-xl">
                  {exp.date_duration}
                </Text>

                <div className="flex flex-col">
                  <Text className="text-base md:text-xl">{`${exp.title} @${exp.at}`}</Text>
                  <Text
                    className={'text-xs! md:text-sm!'}
                    font={'font-geist-mono'}
                  >{`${truncate(exp.key_points[0], 40)}`}</Text>
                </div>
              </div>
              <span
                className={
                  'font-rainyhearts mt-0! text-2xl transition-transform duration-300 group-hover:-translate-x-2'
                }
              >
                {'>'}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
