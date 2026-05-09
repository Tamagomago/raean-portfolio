'use client';

import React, { useState } from 'react';
import { cn } from '@/app/lib/utils';
import { GeistPixelSquare } from 'geist/font/pixel';
import styles from '@/app/components/ui/typography.module.css';
import Title from '@/app/components/ui/title';
import Text from '@/app/components/ui/text';
import NavLink from '@/app/components/ui/nav-link';
import Link from 'next/link';

const About = () => {
  const [isViewMoreHovered, setIsViewMoreHovered] = useState(false);
  const description =
    'I am Raean Chrissean R. Tamayo, a third-year Computer Science student.\nBorn on March 18, 2005, in Iloilo City, Philippines,\nI am an aspiring full-stack developer passionate about creating beautiful, functional, and user-friendly web applications.';
  return (
    <div className={cn('bg-dark relative w-full px-8 py-20', GeistPixelSquare.className)}>
      <div className={'my-50 ml-16'}>
        <h1
          className={cn(styles.s_outline, 'mt-50 text-7xl font-thin tracking-widest')}
          style={{ WebkitTextStroke: '0.5px white' }}
        >
          ABOUT
        </h1>
        <div className={'mb-8 ml-8'}>
          <Title text={'RAEAN'} distortIntervalMs={2000} className={'text-[200px]'} />
        </div>
        <div className={'mb-30'}>
          {description.split('\n').map((sentence, i) => (
            <Text
              key={i}
              stagger={15}
              font={'font-geist-mono'}
              duration={300}
              className={'text-sm'}
            >
              {sentence}
            </Text>
          ))}
        </div>

        <div
          className="mt-8 w-fit cursor-pointer"
          onMouseEnter={() => setIsViewMoreHovered(true)}
          onMouseLeave={() => setIsViewMoreHovered(false)}
          onTouchStart={() => setIsViewMoreHovered(true)}
        >
          {isViewMoreHovered ? (
            <NavLink href={'/about'} className="mt-0!">
              view_more
            </NavLink>
          ) : (
            <div className="px relative block w-fit overflow-hidden bg-white px-2 py-0.5 text-black transition-colors duration-150">
              <Link href={'/about'}>
                <Text duration={150} className="relative z-10 px-0! text-lg text-black!">
                  {'>'}
                </Text>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
