"use client"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function OurService() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen py-10 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 my-24">
      <motion.h1
        className="text-center text-white font-bold text-5xl sm:text-6xl tracking-tighter"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Our <span className="bg-gradient-to-r from-[#6e00ff] via-[#9c40ff] to-[#9c40ff] bg-clip-text text-transparent">Services</span>
      </motion.h1>
      <div className="max-w-2xl mx-auto mt-4 sm:mt-6">
        <motion.p
        className="text-center text-base sm:text-lg md:text-xl text-white/70"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
            We follow a proven methodology to ensure your project is delivered on time, within budget, and exceeds expectations.
      </motion.p>
      </div>
      </div>
      
      {/* Animated Background Glow */}
      <motion.div
        className="absolute top-[20%] left-[5%] w-[90%] h-[60%] rounded-full bg-gradient-to-r from-green-400/10 to-green-400/0 blur-[50px] pointer-events-none"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />

      <motion.div
        className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
          >
            <Card
              className="bg-black text-white text-center p-5 border border-t border-white/70 relative overflow-hidden group"
            >
              {/* Animated Border Effect */}
              <motion.div
                className="absolute inset-0 border-2 border-transparent"
                animate={{
                  borderColor: ["#9c40ff", "#6e00ff", "#9c40ff"],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              />
              <CardHeader>
                {service.icon}
                <CardTitle className="bg-gradient-to-r from-[#6e00ff] via-[#9c40ff] to-[#9c40ff] bg-clip-text text-transparent mt-2">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-white">
                  {service.description}
                </CardDescription>
              </CardContent>
              <CardFooter className="justify-center">
                <motion.div
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: "0 0 15px rgba(156, 64, 255, 0.5)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="relative"
                >
                  <Button
                    variant="outline"
                    className="border-[#9c40ff] text-[#9c40ff] hover:bg-[#9c40ff] hover:text-white transition-all duration-300"
                  >
                    Get Started
                  </Button>
                </motion.div>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Explore More Services Button */}
      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Button
          variant="outline"
          className="border-[#9c40ff] text-[#9c40ff] hover:bg-[#9c40ff] hover:text-white text-lg px-8 py-6"
        >
          Explore More Services
        </Button>
      </motion.div>
    </div>
  );
}

const services = [
  {
    "title": "Web Development",
    "icon": <DotLottieReact
      src="https://lottie.host/14515042-17c0-48ff-9e54-7b21da46d24f/xXoATTuAXC.lottie"
      loop
      autoplay
    />,
    "description": "Build robust, scalable, and high-performance websites tailored to your business needs using cutting-edge technologies."
  },
  {
    "title": "Digital Marketing",
    "icon": <DotLottieReact
      src="https://lottie.host/e8a7e635-16e9-4dbd-9026-7ca06b45f782/6NbnhmvtfB.lottie"
      loop
      autoplay
    />,
    "description": "Drive growth with strategic digital marketing campaigns, optimizing reach and engagement across all digital channels."
  },
  {
    "title": "Accountant",
    "icon": <DotLottieReact
      src="https://lottie.host/1dc27425-a00a-41ef-be14-6bff5169b240/L7cNLC9FDv.lottie"
      loop
      autoplay
    />,
    "description": "Streamline your financial processes with expert accounting services, ensuring accuracy and compliance for your business."
  },
  {
    "title": "Web Maintenance",
    "icon": <DotLottieReact
      src="https://lottie.host/1bef9f32-89aa-4bd3-8348-d1954d2622a8/P9uH5cmTmd.lottie"
      loop
      autoplay
    />,
    "description": "Keep your website secure, updated, and running smoothly with our comprehensive maintenance and support services."
  },
  {
    "title": "App Development",
    "icon": <DotLottieReact
      src="https://lottie.host/6edbd8f3-201d-46e9-bfbc-6ca562f21bf5/X9QyFG6i5p.lottie"
      loop
      autoplay
    />,
    "description": "Keep your website secure, updated, and running smoothly with our comprehensive maintenance and support services."
  },
  {
    "title": "Consultation",
    "icon": <DotLottieReact
      src="https://lottie.host/10d760b7-8e9e-496f-934b-98e5e50130b8/PoERyZYoBQ.lottie"
      loop
      autoplay
    />,
    "description": "Receive personalized guidance to navigate challenges and unlock new opportunities with our expert consultation services."
  },
];