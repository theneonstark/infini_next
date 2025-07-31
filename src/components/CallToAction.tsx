"use client"

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const CallToAction = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <div className="bg-black text-white py-12 sm:py-16 md:py-20 lg:py-24" ref={containerRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative">
        <motion.div style={{ translateY }} className="hidden sm:block">
          <Image 
            src={'/assets/images/helix2.png'} 
            alt="helix" 
            className="absolute top-4 sm:top-6 left-[calc(100%+12px)] sm:left-[calc(100%+24px)] lg:left-[calc(100%+36px)] w-12 sm:w-16 lg:w-20 xl:w-24" 
            width={96}
            height={96}
          />
        </motion.div>
        <motion.div style={{ translateY }} className="hidden sm:block">
          <Image 
            src={'/assets/images/emojistar.png'} 
            alt="emoji" 
            className="absolute -top-16 sm:-top-20 lg:-top-24 right-[calc(100%+12px)] sm:right-[calc(100%+20px)] lg:right-[calc(100%+30px)] w-12 sm:w-16 lg:w-20 xl:w-24" 
            width={96}
            height={96}
          />
        </motion.div>

        <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tighter text-center">
          Get Instant Access
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-center text-white/70 mt-4 sm:mt-5 mx-auto max-w-md sm:max-w-lg md:max-w-xl">
          Unlock a seamless experience with our platform. Sign up today and start exploring powerful tools designed to elevate your success.
        </p>
        <div className="mt-8 sm:mt-10 flex flex-col gap-2.5 max-w-sm mx-auto sm:flex-row sm:max-w-xl">
          <input 
            type="email" 
            placeholder="info@infinimorphconsulting.com" 
            className="h-10 sm:h-12 bg-white/20 rounded-lg px-4 sm:px-5 font-medium placeholder:text-[#9CA3AF] sm:flex-1 w-full"
          />
          <button className="bg-white text-black h-10 sm:h-12 rounded-lg px-4 sm:px-5 font-medium">
            Get access
          </button>
        </div>
      </div>
    </div>
  )
};