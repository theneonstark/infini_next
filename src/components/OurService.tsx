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
    <div className="bg-black min-h-screen py-10 relative overflow-hidden">
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
                <motion.img
                  src={service.icon}
                  alt={service.title}
                  className="mx-auto"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.2 }}
                />
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
    title: "Web Design",
    icon: "https://img.icons8.com/?size=100&id=49407&format=png&color=000000",
    description:
      "Habitant risus facilisis vitae curabitur hac nullam. Netus condimentum erat vestibulum sollicitudin sem tempor lacinia.",
  },
  {
    title: "Web Development",
    icon: "https://img.icons8.com/?size=100&id=48250&format=png&color=ffffff",
    description:
      "Habitant risus facilisis vitae curabitur hac nullam. Netus condimentum erat vestibulum sollicitudin sem tempor lacinia.",
  },
  {
    title: "Digital Marketing",
    icon: "https://img.icons8.com/?size=100&id=52954&format=png&color=000000",
    description:
      "Habitant risus facilisis vitae curabitur hac nullam. Netus condimentum erat vestibulum sollicitudin sem tempor lacinia.",
  },
  {
    title: "Accountant",
    icon: "https://img.icons8.com/?size=100&id=65708&format=png&color=000000",
    description:
      "Habitant risus facilisis vitae curabitur hac nullam. Netus condimentum erat vestibulum sollicitudin sem tempor lacinia.",
  },
  {
    title: "Consultation",
    icon: "https://img.icons8.com/?size=100&id=48149&format=png&color=000000",
    description:
      "Habitant risus facilisis vitae curabitur hac nullam. Netus condimentum erat vestibulum sollicitudin sem tempor lacinia.",
  },
  {
    title: "Web Maintenance",
    icon: "https://img.icons8.com/?size=100&id=SZIOLhqepltk&format=png&color=000000",
    description:
      "Habitant risus facilisis vitae curabitur hac nullam. Netus condimentum erat vestibulum sollicitudin sem tempor lacinia.",
  },
];