'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxLayerProps {
  children: React.ReactNode;
  /**
   * speed: multiplier for parallax travel.
   *   0   = no movement (pinned)
   *   0.3 = slow drift (subtle decorative elements)
   *   1.0 = moves at same speed as scroll (neutral)
   *   1.5 = moves faster than scroll (pop-forward)
   *  Negative values move in reverse direction.
   */
  speed?: number;
  /** axis: 'y' (default) or 'x' */
  axis?: 'y' | 'x';
  style?: React.CSSProperties;
  className?: string;
}

export default function ParallaxLayer({
  children,
  speed = 0.3,
  axis = 'y',
  style,
  className,
}: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const travel = 120 * speed;
  const value = useTransform(scrollYProgress, [0, 1], [-travel / 2, travel / 2]);

  return (
    <div ref={ref} style={{ overflow: 'hidden', ...style }} className={className}>
      <motion.div style={axis === 'y' ? { y: value } : { x: value }}>
        {children}
      </motion.div>
    </div>
  );
}
