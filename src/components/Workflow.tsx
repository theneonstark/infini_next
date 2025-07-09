'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    number: 1,
    title: 'Discovery',
    description: 'We start by understanding your business, goals, and target audience to create the perfect strategy.',
    color: 'bg-blue-600',
    glow: 'shadow-blue-500',
  },
  {
    number: 2,
    title: 'Design',
    description: 'Our creative team designs beautiful, user-friendly interfaces that align with your brand identity.',
    color: 'bg-purple-600',
    glow: 'shadow-purple-500',
  },
  {
    number: 3,
    title: 'Development',
    description: 'We build your solution using the latest technologies and best practices for optimal performance.',
    color: 'bg-green-600',
    glow: 'shadow-green-500',
  },
  {
    number: 4,
    title: 'Launch',
    description: 'We deploy your project and provide ongoing support to ensure everything runs smoothly.',
    color: 'bg-orange-600',
    glow: 'shadow-orange-500',
  },
];

export const Workflow = () => {
  return (
    <div className="text-white py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center relative">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.6, duration: 0.6, type: 'spring' }}
            className="flex flex-col items-center text-center md:w-1/4 px-2 relative z-10"
          >
            <div className={`w-16 h-16 rounded-full text-white text-xl font-bold flex items-center justify-center ${step.color} shadow-xl ${step.glow}`}>
              {step.number}
            </div>
            <h3 className="text-lg font-semibold mt-4">{step.title}</h3>
            <p className="text-sm mt-2">{step.description}</p>

            {/* Glowing connecting line */}
            {index < steps.length - 1 && (
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: index * 0.6 + 0.3, duration: 0.4 }}
                className="hidden md:block absolute -z-10 top-8 right-[-50%] w-full h-1 bg-gradient-to-r from-white to-gray-700 shadow-[0_0_10px_#fff] origin-left"
              />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
