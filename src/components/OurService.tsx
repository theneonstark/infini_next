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
      <motion.h1
        className="text-center text-white font-bold text-5xl sm:text-6xl tracking-tighter my-32"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Our Services
      </motion.h1>
      
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
              className="bg-black text-white text-center p-5 border border-t border-white/70 hover:border-green-400 transition-colors"
            >
              <CardHeader>
                <motion.img
                  src={service.icon}
                  alt={service.title}
                  className="mx-auto"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.2 }}
                />
                <CardTitle className="text-green-400 mt-2">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-white">
                  {service.description}
                </CardDescription>
              </CardContent>
              <CardFooter className="justify-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outline"
                    className="border-green-400 text-green-400 hover:bg-green-400 hover:text-white"
                  >
                    Get Started
                  </Button>
                </motion.div>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

const services = [
  {
    title: "Web Design",
    icon: "https://img.icons8.com/ios-filled/50/30D4A5/globe.png",
    description:
      "Habitant risus facilisis vitae curabitur hac nullam. Netus condimentum erat vestibulum sollicitudin sem tempor lacinia.",
  },
  {
    title: "Web Development",
    icon: "https://img.icons8.com/ios-filled/50/30D4A5/code.png",
    description:
      "Habitant risus facilisis vitae curabitur hac nullam. Netus condimentum erat vestibulum sollicitudin sem tempor lacinia.",
  },
  {
    title: "Digital Marketing",
    icon: "https://img.icons8.com/ios-filled/50/30D4A5/marketing.png",
    description:
      "Habitant risus facilisis vitae curabitur hac nullam. Netus condimentum erat vestibulum sollicitudin sem tempor lacinia.",
  },
  {
    title: "Visual Identity",
    icon: "https://img.icons8.com/ios-filled/50/30D4A5/identity.png",
    description:
      "Habitant risus facilisis vitae curabitur hac nullam. Netus condimentum erat vestibulum sollicitudin sem tempor lacinia.",
  },
  {
    title: "Consultation",
    icon: "https://img.icons8.com/ios-filled/50/30D4A5/consultation.png",
    description:
      "Habitant risus facilisis vitae curabitur hac nullam. Netus condimentum erat vestibulum sollicitudin sem tempor lacinia.",
  },
  {
    title: "Web Maintenance",
    icon: "https://img.icons8.com/ios-filled/50/30D4A5/maintenance.png",
    description:
      "Habitant risus facilisis vitae curabitur hac nullam. Netus condimentum erat vestibulum sollicitudin sem tempor lacinia.",
  },
];