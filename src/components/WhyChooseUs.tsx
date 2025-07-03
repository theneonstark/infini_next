"use client";

import React from "react";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-[#111] text-white py-20 px-6 md:px-20 flex justify-center">
      <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-12 items-center justify-between">
        {/* Left Section */}
        <div className="max-w-xl">
          <p className="text-sm text-lime-400 font-semibold mb-2">WHY CHOOSE US</p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Crafting <span className="text-cyan-400">Digital Experiences</span>
            <br /> That <span className="text-lime-400">Matter.</span>
          </h2>
          <p className="text-gray-400 text-md mb-8">
            Dictumst porta ultricies tristique hac vestibulum himenaeos ligula. Cubilia sapien torquent at finibus accumsan et pellentesque class lacinia tristique.
          </p>

          <div className="space-y-4">
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
                <CheckCircle className="text-gray-400 w-5 h-5" />
                <span className="text-lg text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="relative w-full max-w-2xl">
          {/* Main screen mockup */}
          <div className="rounded-xl overflow-hidden border border-gray-800">
            <Image src="/assets/images/product.avif" alt="Mockup" className="w-full h-full" width={1000} height={1000}/>
          </div>

          {/* Page speed overlay */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="absolute -left-10 bottom-10 bg-black bg-opacity-90 p-6 rounded-xl text-center text-white border border-gray-800 w-48"
          >
            <div className="text-lime-400 text-3xl font-bold mb-1">97%</div>
            <div className="text-white font-semibold text-lg mb-2">Page Speed</div>
            <p className="text-gray-400 text-sm">
              Page speed performance, including load time & page size
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
