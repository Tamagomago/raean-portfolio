'use client';

import { useState, useEffect } from 'react';

const GLITCH_CHARS =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&!?/\\|<>[]{}~^*';

export function useGlitch(
  text: string,
  isVisible: boolean,
  duration = 600,
  stagger = 60,
  frame = 50,
) {
  const [glitchChars, setGlitchChars] = useState<(string | null)[]>(() =>
    text.split('').map(() => null),
  );
  const [isIntroComplete, setIsIntroComplete] = useState(false);

  useEffect(() => {
    if (!isVisible) return;

    const chars = text.split('');
    const timers: ReturnType<typeof setTimeout>[] = [];

    chars.forEach((finalChar, i) => {
      if (finalChar === ' ' || finalChar === '_') return;

      const startDelay = i * stagger;

      const startTimer = setTimeout(() => {
        let elapsed = 0;

        const scrambleInterval = setInterval(() => {
          elapsed += frame;

          if (elapsed >= duration) {
            clearInterval(scrambleInterval);
            setGlitchChars((prev) => {
              const next = [...prev];
              next[i] = null;
              return next;
            });
            if (i === chars.length - 1) {
              setIsIntroComplete(true);
            }
          } else {
            const randomChar = GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
            setGlitchChars((prev) => {
              const next = [...prev];
              next[i] = randomChar;
              return next;
            });
          }
        }, frame);

        timers.push(scrambleInterval as unknown as ReturnType<typeof setTimeout>);
      }, startDelay);

      timers.push(startTimer);
    });

    return () => timers.forEach(clearTimeout);
  }, [isVisible, text, duration, stagger, frame]);

  return { glitchChars, isIntroComplete };
}
