'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import type { RefObject } from 'react';
import type { HTMLMotionProps } from 'framer-motion';

// Define the bubble type for better type safety
interface Bubble {
  color: string;
  size: string;
  initial: {
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
  };
}

const FloatingBubbles: React.FC = () => {
  // Create individual refs with proper typing for HTMLDivElement
  const bubbleRef1 = useRef<HTMLDivElement>(null);
  const bubbleRef2 = useRef<HTMLDivElement>(null);
  const bubbleRef3 = useRef<HTMLDivElement>(null);
  const bubbleRef4 = useRef<HTMLDivElement>(null);
  const bubbleRef5 = useRef<HTMLDivElement>(null);
  const bubbleRef6 = useRef<HTMLDivElement>(null);
  const bubbleRefs: RefObject<HTMLDivElement>[] = [
    bubbleRef1,
    bubbleRef2,
    bubbleRef3,
    bubbleRef4,
    bubbleRef5,
    bubbleRef6,
  ];

  useEffect(() => {
    bubbleRefs.forEach((ref, index) => {
      if (ref.current) {
        const tl = gsap.timeline({ repeat: -1, yoyo: true });
        tl.to(ref.current, {
          x: `random(-150, 150)`,
          y: `random(-150, 150)`,
          scale: `random(0.7, 1.3)`,
          rotation: `random(-45, 45)`,
          duration: 8 + index * 1.8,
          ease: 'sine.inOut',
          delay: index * 0.4,
        });
      }
    });
  }, []);

  const bubbles: Bubble[] = [
    {
      color: 'bg-[#6e00ff]/30 dark:bg-[#6e00ff]/80',
      size: 'w-96 h-96',
      initial: { top: '-12rem', right: '-12rem' },
    },
    {
      color: 'bg-[#9c40ff]/30 dark:bg-[#9c40ff]/80',
      size: 'w-96 h-96',
      initial: { bottom: '-12rem', left: '-12rem' },
    },
    {
      color: 'bg-[#6e00ff]/30 dark:bg-[#6e00ff]/80',
      size: 'w-96 h-96',
      initial: { top: '15rem', left: '15rem' },
    },
    {
      color: 'bg-[#9c40ff]/30 dark:bg-[#9c40ff]/80',
      size: 'w-96 h-96',
      initial: { bottom: '10rem', right: '10rem' },
    },
    {
      color: 'bg-[#6e00ff]/30 dark:bg-[#6e00ff]/80',
      size: 'w-96 h-96',
      initial: { top: '-8rem', left: '20rem' },
    },
    {
      color: 'bg-[#9c40ff]/30 dark:bg-[#9c40ff]/80',
      size: 'w-96 h-96',
      initial: { bottom: '-15rem', right: '15rem' },
    },
  ];

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        {bubbles.map(({ color, size, initial }, index) => (
          <motion.div
            key={index}
            ref={bubbleRefs[index]}
            className={`absolute ${size} ${color} rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-60`}
            style={initial}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 0.6, scale: 1 }}
            transition={{ duration: 1.5, delay: index * 0.3 }}
            {...({} as HTMLMotionProps<'div'>)} // Ensure motion.div props are typed
          />
        ))}
      </div>
    </div>
  );
};

export default FloatingBubbles;