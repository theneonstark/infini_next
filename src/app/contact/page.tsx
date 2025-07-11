"use client"

import { useState } from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

interface FormData {
  name: string
  email: string
  message: string
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Thank you for your message! We'll get back to you soon.")
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <div className="min-h-screen py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to start your next project? We&#39;d love to hear from you. Send
            us a message and we&#39;ll respond as soon as possible.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-white/5 backdrop-blur-md border border-white/10 text-white">
              <CardHeader>
                <CardTitle className="text-2xl">Send us a message</CardTitle>
                <CardDescription className="text-gray-400">
                  Fill out the form below and we&apos;ll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your full name"
                      className="bg-white/10 text-white placeholder-gray-400 border border-white/10"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      className="bg-white/10 text-white placeholder-gray-400 border border-white/10"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your project or ask us a question..."
                      rows={6}
                      className="bg-white/10 text-white placeholder-gray-400 border border-white/10"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="bg-white/5 backdrop-blur-md border border-white/10 text-white">
                <CardHeader>
                  <CardTitle className="text-2xl">Contact Information</CardTitle>
                  <CardDescription className="text-gray-400">
                    Reach out to us through any of these channels
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6 text-sm">
                  {/* Email */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-800/30 rounded-full flex items-center justify-center">
                      <DotLottieReact
                        src="https://lottie.host/aa9730fa-bdf6-40e6-b3cc-f0e97e7274fb/padnhTK7AQ.lottie"
                        loop
                        autoplay
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Email</h3>
                      {/* <p className="text-gray-300">hello@modernservices.com</p> */}
                      <p className="text-gray-300">info@infinimorphconsulting.com</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-800/30 rounded-full flex items-center justify-center">
                      <DotLottieReact
                        src="https://lottie.host/5da4cd74-52b2-4db7-b2f3-a421b69ae5d7/uA7MjE1Cl1.lottie"
                        loop
                        autoplay
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Phone</h3>
                      <p className="text-gray-300">(+91) 92115-79757</p>
                      <p className="text-gray-300">Mon-Fri 9AM-6PM EST</p>
                    </div>
                  </div>

                  {/* Office */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-800/30 rounded-full flex items-center justify-center">
                      <DotLottieReact
                        src="https://lottie.host/a0500677-1646-4b76-8f9e-8e8e0ed491f0/yRVmTESF0j.lottie"
                        loop
                        autoplay
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Office</h3>
                      <p className="text-gray-300">Jaitpur, Badarpur</p>
                      <p className="text-gray-300">New Delhi - 110044</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Hours */}
              <Card className="bg-white/5 backdrop-blur-md border border-white/10 text-white">
                <CardHeader>
                  <CardTitle className="text-xl">Business Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-gray-300">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span className="font-medium">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span className="font-medium">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span className="font-medium">Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* FAQ */}
          {/* <Card className="mt-12 bg-white/5 backdrop-blur-md border border-white/10 text-white">
            <CardHeader>
              <CardTitle className="text-2xl">Frequently Asked Questions</CardTitle>
              <CardDescription className="text-gray-400">
                Quick answers to common questions about our services
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300 text-sm">
                <div>
                  <h4 className="font-semibold mb-2 text-white">
                    How long does a typical project take?
                  </h4>
                  <p>
                    Project timelines vary based on scope and complexity. Simple
                    websites typically take 2-4 weeks, while complex applications can take 2-6 months.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-white">
                    Do you offer ongoing support?
                  </h4>
                  <p>
                    Yes! We provide ongoing maintenance and support packages to keep
                    your digital assets running smoothly and up-to-date.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-white">
                    What&apos;s your payment structure?
                  </h4>
                  <p>
                    We typically work with a 50% upfront payment and 50% upon completion.
                    For larger projects, we can arrange milestone-based payments.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-white">
                    Can you work with our existing team?
                  </h4>
                  <p>
                    We&apos;re experienced in collaborating with in-house teams and
                    can integrate seamlessly into your existing workflow.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card> */}
        </div>
      </div>
    </div>
  )
}
