"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Link from "next/link"

gsap.registerPlugin(ScrollTrigger)

export default function ServicesPage() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    cardsRef.current.forEach((card, i) => {
      if (card) {
        gsap.fromTo(
          card,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: i * 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        )
      }
    })
  }, [])

const services = [
  {
    id: "web-design-development",
    title: "Web Design & Development",
    description:
      "Build modern, responsive websites that not only look great but perform seamlessly. From landing pages to complex platforms, we create tailored web experiences.",
    features: ["Responsive Design", "SEO Optimization", "CMS Integration", "E-Commerce Solutions"],
    icon: "💻",
  },
  {
    id: "app-development",
    title: "App Development",
    description:
      "Build powerful mobile and web applications using cutting-edge technologies. From concept to deployment, we handle the entire development lifecycle.",
    features: ["React Native", "Flutter", "Progressive Web Apps", "API Integration"],
    icon: "📱",
  },
  {
    id: "graphic-designing",
    title: "Graphic Designing",
    description:
      "Craft compelling visual assets that elevate your brand identity across print and digital platforms. We blend creativity with strategy for stunning results.",
    features: ["Social Media Creatives", "Posters & Flyers", "Infographics", "Ad Creatives"],
    icon: "🖼️",
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    description:
      "Create intuitive and beautiful user interfaces that provide exceptional user experiences. Our design process focuses on user research, wireframing, prototyping, and testing.",
    features: ["User Research", "Wireframing", "Prototyping", "Usability Testing"],
    icon: "🎨",
  },
  {
    id: "accountant-consulting",
    title: "Accountant Consulting",
    description:
      "We help businesses manage their finances with professional accounting consultations including taxation, bookkeeping, GST, and compliance.",
    features: ["Tax Filing", "GST Setup", "Bookkeeping", "Compliance Advice"],
    icon: "📊",
  },
  {
    id: "video-editing",
    title: "Video Editing",
    description:
      "Engage your audience with professionally edited videos that tell your story. We specialize in short-form content, reels, promos, and more.",
    features: ["Social Media Reels", "YouTube Videos", "Corporate Edits", "Motion Graphics"],
    icon: "🎬",
  },
  {
    id: "3d-modals",
    title: "3D Modals",
    description:
      "Bring your concepts to life with high-quality 3D modeling and rendering. Perfect for product demos, architecture, and animated visuals.",
    features: ["Product Modeling", "3D Animation", "Rendering", "Texturing"],
    icon: "🧊",
  },
  {
    id: "trademark-branding",
    title: "Trademark & Branding",
    description:
      "Protect your brand identity and make it unforgettable. We offer trademark registration along with comprehensive branding services.",
    features: ["Trademark Filing", "Logo Design", "Brand Strategy", "Visual Identity"],
    icon: "™️",
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description:
      "Reach your ideal audience and grow your online presence with data-driven digital marketing strategies tailored to your business goals.",
    features: ["Social Media Marketing", "Google Ads", "Email Campaigns", "SEO & Analytics"],
    icon: "📈",
  },
  {
    id: "custom-software-development",
    title: "Custom Software Development",
    description:
      "Get tailor-made software solutions that streamline your business operations and give you a competitive edge.",
    features: ["ERP Systems", "Inventory Management", "CRM Solutions", "Automation Tools"],
    icon: "🧩",
  },
]



  return (
    <div className="min-h-screen py-20 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We offer comprehensive digital solutions tailored to meet your business needs. From design to development,
            we&#39;ve got you covered.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => {cardsRef.current[index] = el}}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg shadow-xl hover:shadow-[0_0_20px_#a855f7] transition-shadow duration-300 p-8"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-300 mb-6">{service.description}</p>

              <div className="mb-6">
                <h4 className="font-semibold mb-3">What&#39;s Included:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <svg
                        className="w-4 h-4 text-green-400 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-white/10 pt-4">
              <Link href={`/features/${service.id}`}>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors"
                >
                  Get Started
                </motion.button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg shadow-xl hover:shadow-[0_0_20px_#a855f7] transition-shadow p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-white">Need Something Custom?</h2>
            <p className="text-gray-300 mb-8">
              Every business is unique. Let&#39;s discuss your specific requirements and create a tailored solution.
            </p>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-purple-600 text-white py-3 px-8 rounded-lg hover:bg-purple-700 transition-colors"
            >
              Contact Us for Custom Quote
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
