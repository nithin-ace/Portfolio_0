'use client';

/**
 * useParallax — lightweight scroll-parallax hook using Framer Motion
 *
 * offset: how many px to travel over the element's full scroll range.
 *   Positive = moves DOWN as you scroll down (standard)
 *   Negative = moves UP as you scroll down (counter-parallax)
 */
import { useRef } from 'react';
import { useScroll, useTransform, MotionValue } from 'framer-motion';

export function useParallax(offset: number): {
  ref: React.RefObject<HTMLElement | null>;
  y: MotionValue<number>;
} {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref as React.RefObject<HTMLElement>,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);
  return { ref, y };
}

/**
 * useWindowParallax — parallax relative to total page scroll (good for hero)
 */
export function useWindowParallax(inputRange: [number, number], outputRange: [number, number]): MotionValue<number> {
  const { scrollY } = useScroll();
  return useTransform(scrollY, inputRange, outputRange);
}
