"use client"
import Image from 'next/image';
import {motion} from 'framer-motion'
import AnimatedGradientText from './animatedgradienttext';
import { cn } from './lib/utils';

export const Hero = () => {
  return (
    <div className="bg-black text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] py-[72px] sm:py-24 relative overflow-clip h-[100vh]">
      <div className="absolute h-[375px] w-[7850px] sm:w-[1536px] sm:h-[768px] lg:w-[3200px] llg:h-[800px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)]"></div>
    <div className="container relative">
      <div className="flex justify-center mt-16 ">
      <div className="inline-flex relative">
        <AnimatedGradientText>
          <h1 className={cn(
                      `text-6xl sm:text-9xl font-bold tracking-tightner py-4 text-center inline-flex animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
                    )}>InifiMorph <br/> Consulting</h1>
        </AnimatedGradientText>
      <motion.div className='absolute right-[678px] top-[108px] hidden sm:inline'
      drag
      dragSnapToOrigin

      >
      <Image src={'/assets/images/cursor.png'} alt="cursor" height={200} width={200} className='max-w-none' draggable="false"/>
      </motion.div>
      <motion.div className='absolute left-[698px] top-[56px] hidden sm:inline'
      drag
      dragSnapToOrigin
      >
      <Image src={'/assets/images/message.png'} alt="cursor"  height={200} width={200} className='max-w-none' draggable="false"/>
      </motion.div>
      </div>
      </div>
      <div className="flex justify-center">
      <p className='text-xl text-center mt-8 max-w-md'>Whether you&apos;re a startup or scaling enterprise, we help you build, launch, and grow—faster and smarter.</p>
      </div>
      <div className="flex justify-center mt-8">
      <button className='bg-white text-black py-3 px-5 rounded-lg font-medium'>Get for free</button>
      </div>


    </div>
    

    </div>
  )
};
