"use client";

import React from "react";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-[#00000] text-white py-12 px-4 sm:px-6 md:px-12 lg:px-20 flex justify-center">
      <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-8 lg:gap-12 items-center justify-between">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 max-w-xl">
          <p className="text-xs sm:text-sm bg-gradient-to-r from-[#6e00ff] via-[#9c40ff] to-[#9c40ff] bg-clip-text text-transparent font-semibold mb-2 tracking-wider">WHY CHOOSE US</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4 sm:mb-6">
            Crafting <span className="bg-gradient-to-r from-[#6e00ff] via-[#9c40ff] to-[#9c40ff] bg-clip-text text-transparent">Digital Experiences</span>
            <br /> That <span className="bg-gradient-to-r from-[#6e00ff] via-[#9c40ff] to-[#9c40ff] bg-clip-text text-transparent">Matter.</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-md md:text-lg mb-6 sm:mb-8">
            We deliver transformative digital solutions that drive success. Our passion for innovation and commitment to excellence ensure your business stands out in a competitive landscape, creating impactful experiences that resonate with your audience.
          </p>

          <div className="space-y-3 sm:space-y-4">
            {[
              "Expertise and Experience",
              "Comprehensive Services",
              "Client-Centric Approach",
              "Increased Conversion Rates"
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 border-b border-gray-700 pb-2"
              >
                <CheckCircle className="text-green-400 w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-base sm:text-lg text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="relative w-full lg:w-1/2 max-w-md lg:max-w-2xl">
          {/* Main screen mockup */}
          <div className="rounded-xl overflow-hidden border border-gray-800">
            <Image 
              src="/assets/images/product.avif" 
              alt="Mockup" 
              className="w-full h-auto object-cover"
              width={1000} 
              height={1000}
              priority
            />
          </div>

          {/* Page speed overlay */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="absolute -left-4 sm:-left-6 lg:-left-10 bottom-6 sm:bottom-8 lg:-bottom-10 bg-black bg-opacity-70 p-4 sm:p-6 rounded-xl text-center text-white border border-gray-800 w-40 sm:w-48"
          >
            <div className="text-green-400 text-2xl sm:text-3xl font-bold mb-1">97%</div>
            <div className="text-white font-semibold text-base sm:text-lg mb-1 sm:mb-2">Page Speed</div>
            <p className="text-gray-400 text-xs sm:text-sm">
              Page speed performance, including load time & page size
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}