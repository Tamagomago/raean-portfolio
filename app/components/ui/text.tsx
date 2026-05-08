'use client';

import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/app/lib/utils';
import { useGlitch } from '../../hooks/useGlitch';
import styles from '@/app/components/ui/glitch.module.css';

interface TextProps {
  children: string;
  className?: string;
  forceVisible?: boolean;
}

const Text = ({ children, className, forceVisible }: TextProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeVisible = forceVisible ?? isVisible;
  const { glitchChars } = useGlitch(children, activeVisible, 600, 40, 60);

  useEffect(() => {
    if (forceVisible !== undefined) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [forceVisible]);

  return (
    <div ref={containerRef} className={cn('px-8 text-2xl', className)}>
      <p className="font-rainyhearts flex flex-nowrap items-baseline leading-none">
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
