'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import {
  GeistPixelCircle,
  GeistPixelGrid,
  GeistPixelLine,
  GeistPixelSquare,
  GeistPixelTriangle,
} from 'geist/font/pixel';
import { cn } from '@/app/lib/utils';
import { useGlitch } from '../../hooks/useGlitch';
import styles from '@/app/components/ui/glitch.module.css';

type StyleVariant = 'filled' | 'outline' | 'invert' | 'grid' | 'triangle';

interface CharMeta {
  font: string;
  style: StyleVariant;
}

interface TitleProps {
  text?: string;
  distortIntervalMs?: number;
  forceVisible?: boolean;
}

const FONTS = [
  GeistPixelCircle.className,
  GeistPixelGrid.className,
  GeistPixelLine.className,
  GeistPixelSquare.className,
  GeistPixelTriangle.className,
];

const ALL_STYLES: StyleVariant[] = ['filled', 'outline', 'invert', 'grid', 'triangle'];

function randomStyle(exclude?: StyleVariant): StyleVariant {
  const pool = ALL_STYLES.filter((s) => s !== exclude);
  return pool[Math.floor(Math.random() * pool.length)];
}

function buildInitialMeta(text: string): CharMeta[] {
  return text.split('').map((_, i) => ({
    font: FONTS[i % FONTS.length],
    style: 'filled' as StyleVariant,
  }));
}

const Title = ({ text = 'WATCH_DOGS', distortIntervalMs = 750, forceVisible }: TitleProps) => {
  const [meta, setMeta] = useState<CharMeta[]>(() => buildInitialMeta(text));
  const [distorted, setDistorted] = useState<Set<number>>(new Set());
  const [hovered, setHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeVisible = forceVisible ?? isVisible;
  const { glitchChars } = useGlitch(text, activeVisible);

  const metaRef = useRef(meta);
  useEffect(() => {
    metaRef.current = meta;
  }, [meta]);

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

  const triggerDistort = useCallback(() => {
    const idx = Math.floor(Math.random() * text.length);

    const currentStyle = metaRef.current[idx]?.style;
    const newStyle = randomStyle(currentStyle);
    const newFont = FONTS[Math.floor(Math.random() * FONTS.length)];

    setDistorted((prev) => {
      if (prev.has(idx)) return prev;
      return new Set(prev).add(idx);
    });

    setMeta((prev) => {
      const next = [...prev];
      next[idx] = { font: newFont, style: newStyle };
      return next;
    });

    setTimeout(() => {
      setDistorted((prev) => {
        const next = new Set(prev);
        next.delete(idx);
        return next;
      });
    }, 140);
  }, [text.length]);

  useEffect(() => {
    if (!activeVisible) return;

    const ids = [
      setInterval(triggerDistort, distortIntervalMs + Math.random() * 500),
      setInterval(triggerDistort, distortIntervalMs * 2 + Math.random() * 700),
      setInterval(triggerDistort, distortIntervalMs * 3 + Math.random() * 900),
    ];
    return () => ids.forEach(clearInterval);
  }, [triggerDistort, distortIntervalMs, activeVisible]);

  return (
    <div
      ref={containerRef}
      className={cn(
        'relative inline-block cursor-default overflow-hidden select-none',
        'px-1 py-2 transition-colors duration-300',
        hovered ? styles.rootHovered : styles.root,
      )}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex flex-nowrap items-baseline leading-none">
        {text.split('').map((char, i) => {
          const { font, style } = meta[i] ?? { font: FONTS[0], style: 'filled' };
          const isDistorted = distorted.has(i);
          const displayChar = glitchChars[i] ?? char;
          const isGlitching = glitchChars[i] !== null;

          return (
            <span
              key={i}
              data-c={char}
              className={cn(
                'relative inline-block text-[15vw] leading-none font-extralight sm:text-[12vw] md:text-[200px] md:font-black lg:text-[300px]',
                'transition-[color,background,text-decoration] duration-150',
                font,
                styles[`s_${style}`],
                (isDistorted || isGlitching) && styles.charDistort,
                hovered && styles.charHovered,
              )}
            >
              {displayChar}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Title;
