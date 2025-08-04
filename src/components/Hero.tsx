"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedGradientText from "./animatedgradienttext";
import { cn } from "./lib/utils";
import { useEffect, useRef } from "react";

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
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      titleRef.current,
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "elastic.out(1, 0.5)",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
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
        ease: "power2.out",
        scrollTrigger: {
          trigger: descriptionRef.current,
          start: "top 90%",
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
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: buttonRef.current,
          start: "top 95%",
        },
      }
    );

    // Background gradient animation
    gsap.to(containerRef.current, {
      backgroundPosition: "50% 100%",
      ease: "none",
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
      className="bg-black text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] py-8 sm:py-16 md:py-20 lg:py-24 relative overflow-clip min-h-[60vh] sm:min-h-[80vh] lg:min-h-[100vh]"
      style={{ backgroundSize: "100% 200%" }}
    >
      <div
        className="absolute h-[200px] w-[1000px] sm:h-[300px] sm:w-[1536px] md:h-[400px] md:w-[2000px] lg:h-[600px] lg:w-[3000px] xl:h-[800px] xl:w-[4000px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] top-[calc(100%-64px)] sm:top-[calc(100%-80px)] md:top-[calc(100%-100px)] lg:top-[calc(100%-120px)]"
      ></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-center mt-8 sm:mt-12 md:mt-16">
          <div className="inline-flex relative">
            <AnimatedGradientText>
              <h1
                ref={titleRef}
                className={cn(
                  "text-center text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tighter py-2 sm:py-3 md:py-4 text-center inline-flex animate-gradient bg-gradient-to-r from-[#6e00ff] via-[#9c40ff] to-[#6e00ff] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent"
                )}
              >
                InifiMorph <br /> Consulting
              </h1>
            </AnimatedGradientText>
            <motion.div
              className="absolute right-[150px] top-[50px] hidden sm:inline md:right-[300px] md:top-[80px] lg:right-[500px] lg:top-[100px] xl:right-[678px] xl:top-[108px]"
              drag
              dragSnapToOrigin
              dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileDrag={{ scale: 1.2 }}
            >
              <Image
                src={"/assets/images/cursor.png"}
                alt="cursor"
                height={100}
                width={100}
                className="max-w-none w-[80px] sm:w-[100px] md:w-[150px] lg:w-[180px] xl:w-[200px]"
                draggable="false"
              />
            </motion.div>
            <motion.div
              className="absolute left-[150px] top-[30px] hidden sm:inline md:left-[300px] md:top-[40px] lg:left-[500px] lg:top-[50px] xl:left-[698px] xl:top-[56px]"
              drag
              dragSnapToOrigin
              dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileDrag={{ scale: 1.2 }}
            >
              <Image
                src={"/assets/images/message.png"}
                alt="message"
                height={100}
                width={100}
                className="max-w-none w-[80px] sm:w-[100px] md:w-[150px] lg:w-[180px] xl:w-[200px]"
                draggable="false"
              />
            </motion.div>
          </div>
        </div>
        <div className="flex justify-center">
          <h2
            ref={descriptionRef}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-center mt-4 sm:mt-6 md:mt-8 max-w-[90%] sm:max-w-[80%] md:max-w-[600px] lg:max-w-[700px]"
          >
            Whether you&#39;re a startup or scaling enterprise, we help you build, launch, and grow—faster and smarter.
          </h2>
        </div>
        <div className="flex justify-center mt-6 sm:mt-8 md:mt-10">
          <motion.button
            ref={buttonRef}
            className="bg-white text-black py-2 px-4 sm:py-3 sm:px-5 md:py-3 md:px-6 lg:py-4 lg:px-7 rounded-lg font-medium text-sm sm:text-base md:text-lg"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px rgba(255,255,255,0.3)",
              transition: { duration: 0.1 },
            }}
            whileTap={{ scale: 0.95 }}
            animate={{
              y: [0, -10, 0],
              transition: { repeat: Infinity, duration: 2, ease: "easeInOut" },
            }}
          >
            Get for free
          </motion.button>
        </div>
      </div>
    </div>
  );
};