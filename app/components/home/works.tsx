'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { cn } from '@/app/lib/utils';
import { Title, Text, ViewMore } from '@/app/components/ui';
import { useParallax } from '@/app/hooks/useParallax';

interface WorkItemProps {
  src: string;
  alt: string;
  title: string;
  className: string;
  width: number;
  height: number;
  textPosition?: string;
}

const WorkImage = ({
  src,
  alt,
  title,
  className,
  width,
  height,
  textPosition = 'right-0 bottom-0',
}: WorkItemProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [glitchKey, setGlitchKey] = useState(0);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setGlitchKey((prev) => prev + 1);
  };

  return (
    <div
      className={cn(
        'relative w-full grayscale transition-all duration-300 hover:grayscale-0 md:w-auto',
        className,
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="h-auto w-full object-cover"
      />
      <div
        className={cn(
          'absolute bg-white px-5 text-black transition-opacity duration-200',
          textPosition,
          isHovered ? 'opacity-0' : 'opacity-100',
        )}
      >
        <Text key={glitchKey} forceVisible={!isHovered}>
          {title}
        </Text>
      </div>
    </div>
  );
};

const Works = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const description = `From starting out with doing simple HTML, CSS, and JavaScript projects to now working\nwith modern frameworks, it has been a rewarding journey of learning and growth.`;

  useParallax(containerRef, contentRef);

  return (
    <div ref={containerRef} className="relative flex w-full flex-col overflow-hidden px-4 md:px-0">
      <div ref={contentRef} className="flex flex-col">
        <div className={'relative flex w-full flex-col gap-8 md:block md:aspect-square md:min-h-0'}>
          <WorkImage
            src={'/img/nimbus-vertical.png'}
            alt={'nimbus'}
            title={'nimbus'}
            width={800}
            height={800}
            className={'md:absolute md:top-0 md:right-0 md:w-1/2'}
          />

          <WorkImage
            src={'/img/motoki-vertical.png'}
            alt={'motoki'}
            title={'motoki'}
            width={700}
            height={800}
            className={'md:absolute md:top-[12%] md:left-0 md:w-[45%]'}
          />

          <WorkImage
            src={'/img/newton-library.png'}
            alt={'newton'}
            title={'newton_library'}
            width={700}
            height={800}
            className={'md:absolute md:bottom-0 md:left-1/2 md:w-[40%] md:-translate-x-1/2'}
          />
        </div>
        <div className={'mt-20 flex w-full flex-col items-center md:mt-50 md:mb-25'}>
          <div className="mb-4 md:mb-8">
            <Title
              distortIntervalMs={2000}
              className={
                'text-[80px] leading-tight sm:text-[120px] md:text-[160px] lg:text-[200px]'
              }
            >
              WORKS
            </Title>
          </div>
          <div className="mb-10 md:mb-16">
            {description.split('\n').map((sentence, i) => (
              <Text
                key={i}
                stagger={15}
                font={'font-geist-mono'}
                duration={300}
                className={'text-xs md:text-sm'}
                align="center"
              >
                {sentence}
              </Text>
            ))}
          </div>
          <ViewMore href={'/works'} className="mt-0 w-fit cursor-pointer" />
        </div>
      </div>
      {/* Fade-to-background overlay */}
      <div className="to-dark pointer-events-none absolute bottom-0 left-0 z-20 h-48 w-full bg-linear-to-b from-transparent" />
    </div>
  );
};

export default Works;
