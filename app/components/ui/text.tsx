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
  noWrap?: boolean;
}

const Text = ({
  children,
  className,
  font = 'font-rainyhearts',
  align = 'start',
  forceVisible,
  duration = 600,
  stagger = 40,
  noWrap = false,
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

  const words = children.split(' ');
  let charCounter = 0;

  return (
    <div ref={containerRef} className={cn('px-0 text-xl md:text-2xl', className)}>
      <p
        className={cn(
          font,
          'flex items-baseline leading-normal',
          noWrap ? 'flex-nowrap' : 'flex-wrap',
          alignmentClasses[align],
        )}
      >
        {words.map((word, wordIdx) => {
          const wordChars = word.split('');
          const wordNode = (
            <span key={wordIdx} className="inline-block whitespace-nowrap">
              {wordChars.map((char) => {
                const i = charCounter++;
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
                    {displayChar}
                  </span>
                );
              })}
              {wordIdx < words.length - 1 && (
                <span className="relative inline-block">&nbsp;</span>
              )}
            </span>
          );

          if (wordIdx < words.length - 1) {
            charCounter++; // Account for the space after the word
          }

          return wordNode;
        })}
      </p>
    </div>
  );
};

export default Text;
