'use client';

import { useEffect, useRef } from 'react';
import { CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import CountUp from './CountUp';
import Image from 'next/image';
import { motion, useAnimation, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const features = [
  "Custom Solutions",
  "Cutting-Edge Design",
  "SEO Optimization",
  "Responsive Design",
  "Innovative Technology",
  "Security and Reliability"
];

// Framer Motion variants for buttons
const buttonVariants = {
  rest: { scale: 1, boxShadow: "0px 0px 0px rgba(0,0,0,0)" },
  hover: { 
    scale: 1.05, 
    boxShadow: "0px 4px 15px rgba(156, 64, 255, 0.4)",
    transition: { duration: 0.3, ease: "easeOut" }
  }
};

export const Weare = () => {
  // Refs for GSAP animations
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const featureBoxRef = useRef(null);
  const textContentRef = useRef(null);
  const statsRef = useRef(null);
  const bottomSectionRef = useRef(null);

  // Framer Motion controls
  const controls = useAnimation();
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  useEffect(() => {
    // GSAP Animations
    const ctx = gsap.context(() => {
      // Image animation
      gsap.from(imageRef.current, {
        opacity: 0,
        x: -100,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });

      // Feature box animation
      gsap.from(featureBoxRef.current, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: featureBoxRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse"
        }
      });

      // Feature items stagger
      gsap.from(".feature-item", {
        opacity: 0,
        y: 20,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: featureBoxRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse"
        }
      });

      // Text content animation
      gsap.from(textContentRef.current, {
        opacity: 0,
        x: 100,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textContentRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });

      // Stats animation
      gsap.from(".stat-item", {
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      });

      // Bottom section animation
      gsap.from(bottomSectionRef.current, {
        opacity: 0,
        y: 100,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: bottomSectionRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse"
        }
      });
    }, sectionRef);

    // Framer Motion animation for section visibility
    if (isInView) {
      controls.start({ opacity: 1, y: 0 });
    }

    return () => ctx.revert(); // Cleanup GSAP context
  }, [controls, isInView]);

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-black text-white py-8 sm:py-12 lg:py-16 px-4 sm:px-6 md:px-10 lg:px-20"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-6 lg:gap-12">
        {/* Left Side: Image + Overlay Box */}
        <div className="relative">
          <Image
            ref={imageRef}
            src="/assets/images/teamwork.jpg"
            alt="Team working"
            className="w-full h-auto object-cover grayscale rounded-xl"
            width={700}
            height={700}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 700px"
            priority
          />
          <div
            ref={featureBoxRef}
            className="absolute bottom-4 left-4 sm:-bottom-6 sm:-left-6 lg:-bottom-10 lg:-left-10 bg-black/60 backdrop-blur-md p-4 sm:p-6 rounded-lg space-y-3 sm:space-y-4 w-3/4 sm:w-1/2 lg:w-[40%]"
          >
            {features.map((item, i) => (
              <div key={i} className="feature-item flex items-center gap-2 sm:gap-3">
                <CheckCircle className="text-green-400 w-4 h-4 sm:w-5 sm:h-5" />
                <p className="text-xs sm:text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Text Content */}
        <div ref={textContentRef} className="w-full lg:w-1/2 space-y-6 sm:space-y-8 text-left">
          {/* First Text Container */}
          <div className="space-y-4 sm:space-y-6">
            <p className="text-xs sm:text-sm bg-gradient-to-r from-[#6e00ff] via-[#9c40ff] to-[#9c40ff] bg-clip-text text-transparent font-medium">WHO WE ARE</p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
              Innovative Solutions for Your <br />
              <span className="bg-gradient-to-r from-[#6e00ff] via-[#9c40ff] to-[#9c40ff] bg-clip-text text-transparent">
                Online Success.
              </span>
            </h1>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-xl">
              Sem iaculis facilisis convallis ex aliquam massa a venenatis blandit pede rhoncus.
              Euismod consectetur nostra etiam lectus potenti accumsan pellentesque venenatis.
            </p>

            {/* Stats */}
            <div ref={statsRef} className="flex flex-wrap gap-6 sm:gap-10 mt-4 sm:mt-6 text-center">
              <div className="stat-item min-w-[80px]">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">
                  <CountUp from={0} to={115} direction='up' duration={1} className='count-up-text'/>+
                </h2>
                <p className="text-xs sm:text-sm text-gray-400">Project Done</p>
              </div>
              <div className="stat-item min-w-[80px]">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">
                  <CountUp from={0} to={25} direction='up' duration={1} className='count-up-text'/>+
                </h2>
                <p className="text-xs sm:text-sm text-gray-400">Happy Client</p>
              </div>
              <div className="stat-item min-w-[80px]">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">4.5</h2>
                <p className="text-xs sm:text-sm text-gray-400">Client Reviews</p>
              </div>
            </div>

            <motion.div
              variants={buttonVariants}
              initial="rest"
              whileHover="hover"
            >
              <Button className="mt-4 sm:mt-6 bg-[#9c40ff] text-black hover:bg-green-300 w-fit rounded-full text-xs sm:text-sm px-4 sm:px-6">
                Discover more
              </Button>
            </motion.div>
          </div>

          {/* Second Text Container */}
          <div className="space-y-4 sm:space-y-6 pt-6 sm:pt-8 border-t border-gray-800">
            <p className="text-xs sm:text-sm bg-gradient-to-r from-[#6e00ff] via-[#9c40ff] to-[#9c40ff] bg-clip-text text-transparent font-medium">OUR MISSION</p>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight">
              Empowering Your <span className="bg-gradient-to-r from-[#6e00ff] via-[#9c40ff] to-[#9c40ff] bg-clip-text text-transparent">Digital Future</span>
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque eros id magna
              dictum, ac posuere nunc ultricies. Vestibulum ante ipsum primis in faucibus orci.
            </p>
            <motion.div
              variants={buttonVariants}
              initial="rest"
              whileHover="hover"
            >
              <Button className="mt-4 sm:mt-6 bg-[#9c40ff] text-black hover:bg-green-300 w-fit rounded-full text-xs sm:text-sm px-4 sm:px-6">
                Learn More
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* New Section from Image */}
      <div
        ref={bottomSectionRef}
        className="max-w-7xl mx-auto mt-12 sm:mt-16 lg:mt-20 py-6 sm:py-8 bg-black/90 text-white flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8 px-4 sm:px-6"
      >
        <div className="space-y-4 sm:space-y-6 text-left">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight">
            <span className="bg-gradient-to-r from-[#6e00ff] via-[#9c40ff] to-[#9c40ff] bg-clip-text text-transparent">Innovative Design for Modern Businesses</span>.
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <motion.div
            variants={buttonVariants}
            initial="rest"
            whileHover="hover"
          >
            <Button className="mt-4 sm:mt-6 bg-[#9c40ff] text-black hover:bg-green-300 w-fit rounded-full text-xs sm:text-sm px-4 sm:px-6">
              Learn more
            </Button>
          </motion.div>
        </div>
        <div className="flex gap-6 sm:gap-8 mt-6 sm:mt-0">
          <motion.div
            className="bg-gray-800/70 backdrop-blur-md p-6 sm:p-8 rounded-lg text-center w-48 sm:w-56"
            whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
          >
            <h3 className="inline-flex items-center gap-5 text-xl sm:text-3xl font-bold text-white">+60% <span className='text-green-400 text-6xl font-light'>↑</span></h3>
            <p className="text-green-400 text-xs sm:text-sm mt-2"> Traffic Increase</p>
            <p className="text-gray-400 text-xs sm:text-sm mt-1">By optimizing your website for search engines and enhancing user experience.</p>
          </motion.div>
          <motion.div
            className="bg-gray-800/70 backdrop-blur-md p-6 sm:p-8 rounded-lg text-center w-48 sm:w-56"
            whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
          >
            <h3 className="inline-flex items-center gap-5 text-xl sm:text-3xl font-bold text-white">+30% <span className='text-green-400 text-6xl font-light'>↑</span></h3>
            <p className="text-green-400 text-xs sm:text-sm mt-2"> Revenue Increase</p>
            <p className="text-gray-400 text-xs sm:text-sm mt-1">Rise in revenue as more visitors convert into paying customers.</p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}