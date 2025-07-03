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

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Manager",
    quote: "This product has transformed our workflow. The intuitive interface and powerful features make our team more efficient than ever.",
    avatar: "https://i.pravatar.cc/150?img=1"
  },
  {
    name: "Michael Chen",
    role: "Software Engineer",
    quote: "The attention to detail in this application is remarkable. It's been a game-changer for our development process.",
    avatar: "https://i.pravatar.cc/150?img=2"
  },
  {
    name: "Emily Davis",
    role: "Marketing Director",
    quote: "Outstanding customer support and continuous updates make this a must-have tool for any serious marketing team.",
    avatar: "https://i.pravatar.cc/150?img=3"
  },
  {
    name: "James Wilson",
    role: "CEO",
    quote: "The scalability and reliability of this solution have been crucial for our company's growth. Highly recommended!",
    avatar: "https://i.pravatar.cc/150?img=4"
  },
  {
    name: "Lisa Anderson",
    role: "Designer",
    quote: "The creative freedom this tool provides is unmatched. It's helped me bring my visions to life effortlessly.",
    avatar: "https://i.pravatar.cc/150?img=5"
  }
]

export default function Testimonials() {
  return (
    <div className="bg-black py-12">
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
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic flex-grow">"{testimonial.quote}"</p>
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