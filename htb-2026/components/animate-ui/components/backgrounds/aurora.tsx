'use client';

import * as React from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

type AuroraProps = React.ComponentProps<'div'> & {
  colorStops?: string[];
  blend?: number;
  amplitude?: number;
  speed?: number;
};

const Aurora = React.forwardRef<HTMLDivElement, AuroraProps>(({
  className,
  children,
  colorStops = ['#3A29FF', '#FF94B4', '#FF3232'],
  blend = 0.5,
  amplitude = 1.0,
  speed = 0.5,
  ...props
}, ref) => {
  // Create gradient stops
  const gradientStops = colorStops.map((color, index) => {
    const position = (index / (colorStops.length - 1)) * 100;
    return `${color} ${position}%`;
  }).join(', ');

  const animationDuration = 60 / speed;

  return (
    <div
      ref={ref}
      data-slot="aurora"
      className={cn(
        'relative flex h-full w-full flex-col items-center justify-center overflow-hidden bg-black',
        className,
      )}
      {...props}
    >
      <motion.div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(${100 + amplitude * 10}deg, ${gradientStops})`,
          backgroundSize: `${300 * amplitude}% ${300 * amplitude}%`,
          opacity: blend,
          mixBlendMode: 'screen',
        }}
        animate={{
          backgroundPosition: ['0% 0%', `${300 * amplitude}% ${300 * amplitude}%`, '0% 0%'],
        }}
        transition={{
          duration: animationDuration,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at top, ${colorStops[0]}40, transparent 70%), radial-gradient(ellipse at bottom, ${colorStops[colorStops.length - 1]}40, transparent 70%)`,
          opacity: blend * 0.6,
          mixBlendMode: 'screen',
        }}
        animate={{
          scale: [1, 1.1 * amplitude, 1],
          rotate: [0, 360],
        }}
        transition={{
          duration: animationDuration * 2,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      {children}
    </div>
  );
});

Aurora.displayName = 'Aurora';

export { Aurora, type AuroraProps };
