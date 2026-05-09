'use client';

import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/app/lib/utils';
import { useGlitch } from '../../hooks/useGlitch';
import styles from '@/app/components/ui/typography.module.css';

interface TextProps {
  children: string;
  className?: string;
  font?: string;
  align?: 'start' | 'center' | 'end';
  forceVisible?: boolean;
  duration?: number;
  stagger?: number;
}

const Text = ({
  children,
  className,
  font = 'font-rainyhearts',
  align = 'start',
  forceVisible,
  duration = 600,
  stagger = 40,
}: TextProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeVisible = forceVisible ?? isVisible;
  const { glitchChars } = useGlitch(children, activeVisible, duration, stagger, 60);

  useEffect(() => {
    if (forceVisible !== undefined) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.01 },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [forceVisible]);

  const alignmentClasses = {
    start: 'justify-start',
    center: 'justify-center',
    end: 'justify-end',
  };

  return (
    <div ref={containerRef} className={cn('px-0 text-2xl', className)}>
      <p
        className={cn(
          font,
          'flex flex-wrap items-baseline leading-normal',
          alignmentClasses[align],
        )}
      >

        {children.split('').map((char, i) => {
          const displayChar = glitchChars[i] ?? char;
          const isGlitching = glitchChars[i] !== null;

          return (
            <span
              key={i}
              className={cn(
                'relative inline-block transition-colors duration-150',
                isGlitching && styles.charDistort,
              )}
            >
              {displayChar === ' ' ? '\u00A0' : displayChar}
            </span>
          );
        })}
      </p>
    </div>
  );
};

export default Text;
