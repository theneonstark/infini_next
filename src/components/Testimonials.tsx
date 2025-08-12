"use client";

import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { div } from "framer-motion/client";
import Image from "next/image";

const testimonials = [
  {
    name: "Sahil Gautam",
    role: "Product Manager",
    quote: "This product has transformed our workflow. The intuitive interface and powerful features make our team more efficient than ever.",
    avatar: "/assets/clients/sahil.png"
  },
  {
    name: "Mohd Shahid",
    role: "Software Engineer",
    quote: "The attention to detail in this application is remarkable. It's been a game-changer for our development process.",
    avatar: "/assets/clients/shahid.png"
  },
  {
    name: "Sabra Khatoon",
    role: "Digital Marketing Specialist",
    quote: "Exceptional support and regular updates make this tool indispensable for any dedicated marketing team.",
    avatar: "/assets/clients/sabra.png"
  },
  {
    name: "Siddharth Prakash Maurya",
    role: "Marketing Director",
    quote: "Outstanding customer support and continuous updates make this a must-have tool for any serious marketing team.",
    avatar: "/assets/clients/siddharth.png"
  },
  {
    name: "Shikhar Panday",
    role: "CEO - Farm Dairy",
    quote: "The scalability and reliability of this solution have been crucial for our company's growth. Highly recommended!",
    avatar: "/"
  },
]

export default function Testimonials() {
  return (
    <div className="py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">Testimonials</h2>
        <p className="text-lg text-gray-300 mt-2">
          Hear from our satisfied customers who have experienced the transformative power of our product.
        </p>
      </div>
      <Carousel
        className="w-full max-w-7xl mx-auto"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="-ml-2">
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="md:basis-1/3 pl-2">
              <div className="p-1">
                <Card className="h-full">
                  <CardContent className="flex flex-col h-full p-6">
                    <div className="flex items-center mb-4">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full mr-4"
                        width={600}
                        height={600}
                      />
                      <div>
                        <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 italic flex-grow">&#39;{testimonial.quote}&#39;</p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0" />
        <CarouselNext className="right-0" />
      </Carousel>
    </div>
  )
}