"use client"
import Image from 'next/image';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimatedGradientText from './animatedgradienttext';
import { cn } from './lib/utils';
import { useEffect, useRef } from 'react';

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    // GSAP ScrollTrigger animations
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
      }
    );

    gsap.fromTo(
      titleRef.current,
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.2,
        ease: 'elastic.out(1, 0.5)',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 85%',
        },
      }
    );

    gsap.fromTo(
      descriptionRef.current,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        delay: 0.3,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: descriptionRef.current,
          start: 'top 90%',
        },
      }
    );

    gsap.fromTo(
      buttonRef.current,
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        delay: 0.5,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: buttonRef.current,
          start: 'top 95%',
        },
      }
    );

    // Background gradient animation
    gsap.to(containerRef.current, {
      backgroundPosition: '50% 100%',
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="bg-black text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] py-[72px] sm:py-24 relative overflow-clip h-[100vh]"
      style={{ backgroundSize: '100% 200%' }}
    >
      <div className="absolute h-[375px] w-[7850px] sm:w-[1536px] sm:h-[768px] lg:w-[4000px] lg:h-[800px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)]"></div>
      <div className="container relative">
        <div className="flex justify-center mt-16">
          <div className="inline-flex relative">
            <AnimatedGradientText>
              <h1 
                ref={titleRef}
                className={cn(
                  `text-6xl sm:text-9xl font-bold tracking-tighter py-4 text-center inline-flex animate-gradient bg-gradient-to-r from-[#6e00ff] via-[#9c40ff] to-[#6e00ff] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
                )}
              >
                InifiMorph <br /> Consulting
              </h1>
            </AnimatedGradientText>
            <motion.div 
              className='absolute right-[678px] top-[108px] hidden sm:inline'
              drag
              dragSnapToOrigin
              dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileDrag={{ scale: 1.2 }}
            >
              <Image 
                src={'/assets/images/cursor.png'} 
                alt="cursor" 
                height={200} 
                width={200} 
                className='max-w-none' 
                draggable="false" 
              />
            </motion.div>
            <motion.div 
              className='absolute left-[698px] top-[56px] hidden sm:inline'
              drag
              dragSnapToOrigin
              dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileDrag={{ scale: 1.2 }}
            >
              <Image 
                src={'/assets/images/message.png'} 
                alt="message" 
                height={200} 
                width={200} 
                className='max-w-none' 
                draggable="false" 
              />
            </motion.div>
          </div>
        </div>
        <div className="flex justify-center">
          <p 
            ref={descriptionRef}
            className='text-xl text-center mt-8 max-w-md'
          >
            Whether you&#39;re a startup or scaling enterprise, we help you build, launch, and grow—faster and smarter.
          </p>
        </div>
        <div className="flex justify-center mt-8">
          <motion.button
            ref={buttonRef}
            className='bg-white text-black py-3 px-5 rounded-lg font-medium'
            whileHover={{ 
              scale: 1.05, 
              boxShadow: '0 0 20px rgba(255,255,255,0.3)',
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.95 }}
            animate={{ 
              y: [0, -10, 0],
              transition: { 
                repeat: Infinity, 
                duration: 2,
                ease: 'easeInOut'
              }
            }}
          >
            Get for free
          </motion.button>
        </div>
      </div>
    </div>
  )
};