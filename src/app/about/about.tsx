"use client";

import { FC, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CallToAction } from "@/components/CallToAction";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Head from "next/head";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const AboutPage: FC = () => {
  const titleRef = useRef(null);

  useEffect(() => {
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: -50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  return (
    <>
      <Head>
        <title>My website</title>
        <meta name="description" content="This text will appear in the description section of search engine results." />
      </Head>
      <div className="text-white min-h-screen py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h1
              ref={titleRef}
              className="text-center font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tighter mb-6"
            >
              About Us
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto"
            >
              At InfiniMorph Consulting, we&#39;re a dynamic team of experts delivering comprehensive digital and business
              solutions, from web design and development to accounting, graphic design, logo creation, and trademark
              services, empowering businesses to thrive in the modern world.
            </motion.p>
          </div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Card className="mb-8 bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-3xl text-white">Our Story</CardTitle>
                  <CardDescription className="text-lg text-white/70">
                    Established in 2024, InfiniMorph Consulting is your all-in-one partner for business success
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-white/90 leading-relaxed space-y-4">
                  {[
                    `Founded in 2024, InfiniMorph Consulting emerged with a vision to revolutionize how businesses access comprehensive digital and professional services...`,
                    `Starting as a passionate group of innovators in web design, development, accounting, and creative services...`,
                    `From crafting stunning websites and robust applications to designing memorable logos...`,
                    `Our name, InfiniMorph, reflects our philosophy: infinite possibilities through transformative solutions.`,
                  ].map((text, index) => (
                    <motion.p
                      key={index}
                      variants={fadeInUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      custom={index + 1}
                    >
                      {text}
                    </motion.p>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Card className="mb-8 bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-3xl text-white">Our Founder</CardTitle>
                  <CardDescription className="text-lg text-white/70">
                    Meet the visionary behind InfiniMorph Consulting
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-white/90 leading-relaxed space-y-4">
                  <div className="flex flex-col items-center sm:flex-row sm:items-start gap-6">
                    {/* <motion.div
                      variants={fadeInUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="relative w-32 h-32 sm:w-full sm:h-40 rounded-2xl overflow-hidden"
                    >
                      <Image
                        src="/assets/clients/sabra.png"
                        alt="Sabra Khatoon, Founder of InfiniMorph Consulting"
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 128px, 160px"
                      />
                    </motion.div> */}
                    <div className="text-center sm:text-left">
                      <p className="text-2xl font-semibold">Sabra Khatoon</p>
                      <p>
                        Sabra Khatoon is the Founder and Digital Marketing Manager of InfiniMorph Consulting. With a strong background in digital marketing and business consulting, she established the company in 2024 to provide integrated solutions that help businesses grow. Her expertise spans web development, creative design, financial services, and strategic marketing, driving the company&apos;s mission to deliver transformative services globally.
                      </p>
                      <ul className="list-disc pl-6 space-y-1 text-sm mt-4">
                        <li>Founder and CEO since 2024</li>
                        <li>Digital Marketing Specialist</li>
                        <li>Expert in integrated business solutions</li>
                        <li>Based in Delhi, India</li>
                        <li>Passionate about empowering businesses through innovation</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {[
                {
                  title: "Our Mission",
                  content:
                    "To empower businesses worldwide with a seamless, all-in-one service model, delivering innovative web design, development, accounting, graphic design, logo creation, and trademark solutions...",
                },
                {
                  title: "Our Vision",
                  content:
                    "To be the global leader in integrated business solutions, transforming how companies operate and succeed by providing unparalleled expertise in digital, creative, and financial services under the InfiniMorph Consulting banner.",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={index + 1}
                >
                  <Card className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-2xl text-white">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-white/90">{item.content}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Card className="mb-8 bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-3xl text-white">Our Services</CardTitle>
                  <CardDescription className="text-lg text-white/70">
                    Comprehensive solutions to elevate your business
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-white/90 leading-relaxed">
                  <ul className="list-disc pl-6 space-y-2">
                    {[
                      {
                        title: "Web Design & Development:",
                        detail:
                          "Crafting responsive, user-friendly websites and applications tailored to your brand, optimized for performance and scalability.",
                      },
                      {
                        title: "Accounting Services:",
                        detail:
                          "Streamlining your financial processes with expert bookkeeping, tax preparation, and financial consulting to ensure compliance and growth.",
                      },
                      {
                        title: "Graphic Design:",
                        detail:
                          "Creating visually stunning designs for marketing materials, social media, and branding that captivate your audience.",
                      },
                      {
                        title: "Logo Creation:",
                        detail:
                          "Designing unique, memorable logos that embody your brand's identity and leave a lasting impression.",
                      },
                      {
                        title: "Trademark Services:",
                        detail:
                          "Protecting your brand with expert trademark registration and intellectual property guidance to secure your business's future.",
                      },
                    ].map((service, index) => (
                      <motion.li
                        key={service.title}
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={index + 1}
                      >
                        <span className="font-semibold">{service.title}</span> {service.detail}
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <CallToAction />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;