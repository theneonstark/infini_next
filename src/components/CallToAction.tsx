"use client"

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { use, useRef } from 'react';

export const CallToAction = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  })

  const translateY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  
  return (
    <div className="bg-black text-white py-[72px] sm:py-24" ref={containerRef}>
      
      <div className="container max-w-xl relative">
      <motion.div style={{translateY}}>
      <Image src={'/assets/images/helix2.png'} alt="helix" className="absolute top-6 left-[calc(100%+36px)]" width={100} height={100}/>
      </motion.div>
      <motion.div style={{translateY}}>
       
      <Image src={'/assets/images/emojistar.png'} alt="emoji" className="absolute -top-[120px] right-[calc(100%+30px)]" width={100} height={100}/>
      </motion.div>
       

        <h2 className="font-bold text-5xl sm:text-6xl tracking-tighter">Get Instant Access</h2>
        <p className="text-xl text-center text-white/70  mt-5">Unlock a seamless experience with our platform. Sign up today and start exploring powerful tools designed to elevate your success.</p>
        <form className="mt-10 flex flex-col gap-2.5 max-w-sm mx-auto sm:flex-row">
          <input type="email" placeholder="info@infinimorphconsulting.com" className="h-12 bg-white/20 rounded-lg px-5 font-medium placeholder:text-[#9CA3AF] sm:flex-1"/>
          <button className="bg-white text-black h-12 rounded-lg px-5">Get access</button>
        </form>
      </div>


    </div>
  )
};
