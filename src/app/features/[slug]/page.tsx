"use client"
import { useState, FormEvent } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowLeft,
  Check,
  Clock,
  Users,
  Star,
  MessageCircle,
  Phone,
  Mail,
  Calendar,
  Download,
  Play,
  ChevronRight,
} from "lucide-react"
import Image from "next/image"

// Define interfaces for the service data structure
interface ServicePackage {
  name: string
  price: string
  description: string
  features: string[]
  popular?: boolean
}

interface ProcessStep {
  step: number
  title: string
  description: string
  duration: string
}

interface PortfolioItem {
  title: string
  description: string
  image: string
}

interface Testimonial {
  name: string
  company: string
  content: string
  rating: number
}

interface FAQ {
  question: string
  answer: string
}

interface ServiceData {
  title: string
  subtitle: string
  description: string
  icon: string
  price: string
  duration: string
  deliverables: string
  rating: number
  reviews: number
  image: string
  features: string[]
  packages: ServicePackage[]
  process: ProcessStep[]
  technologies: string[]
  portfolio: PortfolioItem[]
  testimonials: Testimonial[]
  faqs: FAQ[]
}

interface FormData {
  name: string
  email: string
  phone: string
  company: string
  message: string
  budget: string
  timeline: string
}

interface ServiceDataMap {
  [key: string]: ServiceData
}

export default function ServiceDetailPage() {
  const params = useParams<{ slug: string }>()
  const [activeTab, setActiveTab] = useState<string>("overview")
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    budget: "",
    timeline: "",
  })

  // Service data with detailed information
  const serviceData: ServiceDataMap = {
    "web-design-development": {
      title: "Web Design & Development",
      subtitle: "Modern, Responsive Websites That Drive Results",
      description:
        "Transform your online presence with custom-built websites that combine stunning design with powerful functionality. Our expert team creates responsive, SEO-optimized websites that engage visitors and convert them into customers.",
      icon: "💻",
      price: "Starting at $2,500",
      duration: "4-8 weeks",
      deliverables: "Complete Website + 3 Months Support",
      rating: 4.9,
      reviews: 127,
      image: "/placeholder.svg?height=400&width=600&text=Web+Development",
      features: [
        "Responsive Design",
        "SEO Optimization",
        "CMS Integration",
        "E-Commerce Solutions",
        "Performance Optimization",
        "Security Implementation",
        "Analytics Setup",
        "Mobile-First Approach",
      ],
      packages: [
        {
          name: "Starter",
          price: "$2,500",
          description: "Perfect for small businesses and startups",
          features: [
            "5-page responsive website",
            "Basic SEO setup",
            "Contact form integration",
            "Mobile optimization",
            "1 month support",
          ],
        },
        {
          name: "Professional",
          price: "$5,000",
          description: "Ideal for growing businesses",
          features: [
            "10-page responsive website",
            "Advanced SEO optimization",
            "CMS integration",
            "E-commerce functionality",
            "Analytics setup",
            "3 months support",
          ],
          popular: true,
        },
        {
          name: "Enterprise",
          price: "$10,000+",
          description: "Custom solutions for large organizations",
          features: [
            "Unlimited pages",
            "Custom functionality",
            "Advanced integrations",
            "Performance optimization",
            "Security implementation",
            "6 months support",
          ],
        },
      ],
      process: [
        {
          step: 1,
          title: "Discovery & Planning",
          description: "We analyze your requirements and create a detailed project roadmap",
          duration: "1 week",
        },
        {
          step: 2,
          title: "Design & Prototyping",
          description: "Create wireframes and visual designs for your approval",
          duration: "2 weeks",
        },
        {
          step: 3,
          title: "Development",
          description: "Build your website using modern technologies and best practices",
          duration: "3-4 weeks",
        },
        {
          step: 4,
          title: "Testing & Launch",
          description: "Thorough testing and deployment to your hosting environment",
          duration: "1 week",
        },
      ],
      technologies: ["React", "Next.js", "WordPress", "Shopify", "Node.js", "MongoDB"],
      portfolio: [
        {
          title: "E-commerce Fashion Store",
          description: "Modern online store with 300% increase in conversions",
          image: "/placeholder.svg?height=200&width=300&text=Fashion+Store",
        },
        {
          title: "Corporate Business Website",
          description: "Professional website for B2B lead generation",
          image: "/placeholder.svg?height=200&width=300&text=Corporate+Site",
        },
        {
          title: "Restaurant Chain Platform",
          description: "Multi-location restaurant website with online ordering",
          image: "/placeholder.svg?height=200&width=300&text=Restaurant+Site",
        },
      ],
      testimonials: [
        {
          name: "Sarah Johnson",
          company: "TechStart Inc.",
          content:
            "The team delivered an exceptional website that exceeded our expectations. Our online sales increased by 250% within the first month!",
          rating: 5,
        },
        {
          name: "Michael Chen",
          company: "GrowthCorp",
          content:
            "Professional, timely, and results-driven. They understood our vision and brought it to life perfectly.",
          rating: 5,
        },
      ],
      faqs: [
        {
          question: "How long does it take to build a website?",
          answer:
            "Typically 4-8 weeks depending on complexity. Simple websites take 4-6 weeks, while complex e-commerce or custom applications may take 6-12 weeks.",
        },
        {
          question: "Do you provide ongoing maintenance?",
          answer:
            "Yes! All packages include initial support, and we offer ongoing maintenance plans starting at $200/month for updates, security, and technical support.",
        },
        {
          question: "Will my website be mobile-friendly?",
          answer:
            "All our websites are built with a mobile-first approach and are fully responsive across all devices and screen sizes.",
        },
        {
          question: "Can you help with hosting and domain setup?",
          answer:
            "Yes, we can help you choose the right hosting solution and set up your domain. We work with reliable hosting providers to ensure optimal performance.",
        },
      ],
    },
    "app-development": {
      title: "App Development",
      subtitle: "Native & Cross-Platform Mobile Applications",
      description:
        "Build powerful mobile applications that engage users and drive business growth. From iOS and Android native apps to cross-platform solutions, we create apps that users love.",
      icon: "📱",
      price: "Starting at $5,000",
      duration: "8-16 weeks",
      deliverables: "Complete App + App Store Deployment",
      rating: 4.8,
      reviews: 89,
      image: "/placeholder.svg?height=400&width=600&text=App+Development",
      features: [
        "Native iOS & Android",
        "Cross-Platform Development",
        "UI/UX Design",
        "API Integration",
        "Push Notifications",
        "Analytics Integration",
        "App Store Optimization",
        "Maintenance & Updates",
      ],
      packages: [
        {
          name: "MVP",
          price: "$5,000",
          description: "Perfect for startups and proof of concept",
          features: [
            "Basic app functionality",
            "iOS or Android (single platform)",
            "Simple UI/UX design",
            "Basic backend integration",
            "App store submission",
          ],
        },
        {
          name: "Professional",
          price: "$12,000",
          description: "Full-featured app for businesses",
          features: [
            "iOS and Android apps",
            "Advanced UI/UX design",
            "Custom backend development",
            "Push notifications",
            "Analytics integration",
            "3 months support",
          ],
          popular: true,
        },
        {
          name: "Enterprise",
          price: "$25,000+",
          description: "Complex apps with advanced features",
          features: [
            "Native iOS and Android",
            "Advanced features & integrations",
            "Custom admin panel",
            "Third-party API integrations",
            "Advanced security",
            "6 months support",
          ],
        },
      ],
      process: [
        {
          step: 1,
          title: "Strategy & Planning",
          description: "Define app requirements, user personas, and technical architecture",
          duration: "1-2 weeks",
        },
        {
          step: 2,
          title: "UI/UX Design",
          description: "Create wireframes, prototypes, and visual designs",
          duration: "2-3 weeks",
        },
        {
          step: 3,
          title: "Development",
          description: "Build the app using native or cross-platform technologies",
          duration: "6-10 weeks",
        },
        {
          step: 4,
          title: "Testing & Deployment",
          description: "Quality assurance testing and app store submission",
          duration: "1-2 weeks",
        },
      ],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "AWS"],
      portfolio: [
        {
          title: "Fitness Tracking App",
          description: "Health app with 100K+ downloads and 4.8 rating",
          image: "/placeholder.svg?height=200&width=300&text=Fitness+App",
        },
        {
          title: "Food Delivery Platform",
          description: "Multi-vendor food delivery app with real-time tracking",
          image: "/placeholder.svg?height=200&width=300&text=Food+App",
        },
        {
          title: "Social Networking App",
          description: "Community-based social app with messaging features",
          image: "/placeholder.svg?height=200&width=300&text=Social+App",
        },
      ],
      testimonials: [
        {
          name: "David Wilson",
          company: "FitLife Startup",
          content:
            "Our fitness app became the #1 health app in the App Store within 3 months of launch. Incredible work!",
          rating: 5,
        },
        {
          name: "Lisa Martinez",
          company: "FoodieExpress",
          content:
            "The team built a robust food delivery platform that handles thousands of orders daily without any issues.",
          rating: 5,
        },
      ],
      faqs: [
        {
          question: "Should I build a native or cross-platform app?",
          answer:
            "It depends on your requirements. Native apps offer better performance and platform-specific features, while cross-platform apps are more cost-effective and faster to develop.",
        },
        {
          question: "How much does app maintenance cost?",
          answer:
            "App maintenance typically costs 15-20% of the initial development cost annually. This includes updates, bug fixes, and compatibility with new OS versions.",
        },
        {
          question: "Do you help with app store submission?",
          answer:
            "Yes! We handle the entire app store submission process, including preparing app store assets, descriptions, and ensuring compliance with store guidelines.",
        },
        {
          question: "Can you integrate with existing systems?",
          answer:
            "We can integrate your app with existing CRM, ERP, payment systems, and any third-party APIs your business uses.",
        },
      ],
    },
  }

  // Get current service data or default
  const currentService: ServiceData = serviceData[params.slug] || serviceData["web-design-development"]

  const handleInputChange = (e: FormEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.currentTarget
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Thank you for your inquiry! We'll get back to you within 24 hours.")
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-400 mb-8">
          <Link href="/features" className="hover:text-white flex items-center">
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to Services
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span>{currentService.title}</span>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-4xl">{currentService.icon}</span>
              <div className="flex items-center space-x-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(currentService.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-400">
                  {currentService.rating} ({currentService.reviews} reviews)
                </span>
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-4 text-white">{currentService.title}</h1>
            <p className="text-xl text-gray-400 mb-6">{currentService.subtitle}</p>
            <p className="text-gray-400 mb-8 leading-relaxed">{currentService.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-white" />
                <div>
                  <p className="font-semibold text-white">Duration</p>
                  <p className="text-sm text-gray-400">{currentService.duration}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-white" />
                <div>
                  <p className="font-semibold text-white">Team Size</p>
                  <p className="text-sm text-gray-400">3-5 experts</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-5 h-5 text-white" />
                <div>
                  <p className="font-semibold text-white">Deliverables</p>
                  <p className="text-sm text-gray-400">{currentService.deliverables}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="flex-1 bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors">
                <Calendar className="w-4 h-4 mr-2" />
                Schedule Consultation
              </Button>
              <Button size="lg" className="flex-1 border text-white bg-transparent hover:bg-purple-700 border-purple-700">
                <Download className="w-4 h-4 mr-2" />
                Download Brochure
              </Button>
            </div>
          </div>

          <div className="relative">
            <Image
              src={currentService.image || "/placeholder.svg"}
              alt={currentService.title}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
              width={200}
              height={200}
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg flex items-center justify-center">
              <Button variant="secondary" size="lg" className="bg-white/90 text-black hover:bg-white">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>
          </div>
        </div>

        {/* Main Content Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-16">
          <TabsList className="grid w-full grid-cols-6 bg-black text-white">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="packages">Packages</TabsTrigger>
            <TabsTrigger value="process">Process</TabsTrigger>
            <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
            <TabsTrigger value="testimonials">Reviews</TabsTrigger>
            <TabsTrigger value="faq">FAQ</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg text-white">
                <CardHeader>
                  <CardTitle>Key Features</CardTitle>
                  <CardDescription>What&apos;s included in this service</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {currentService.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-green-500" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg text-white">
                <CardHeader>
                  <CardTitle>Technologies We Use</CardTitle>
                  <CardDescription>Modern tools and frameworks</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {currentService.technologies.map((tech, index) => (
                      <Badge key={index} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Packages Tab */}
          <TabsContent value="packages" className="space-y-8 text-white">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4 text-white">Choose Your Package</h3>
              <p className="text-gray-400">Select the perfect plan for your business needs</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {currentService.packages.map((pkg, index) => (
                <Card key={index} className={`relative ${pkg.popular ? "border-white shadow-lg" : ""} bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg text-white`} >
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-white text-white-foreground">Most Popular</Badge>
                    </div>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                    {/* <div className="text-3xl font-bold text-white">{pkg.price}</div> */}
                    <CardDescription>{pkg.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <Check className="w-4 h-4 text-green-500" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full bg-purple-500 hover:bg-purple-700">
                      Choose {pkg.name}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Process Tab */}
          <TabsContent value="process" className="space-y-8 text-white">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Our Process</h3>
              <p className="text-gray-400">How we deliver exceptional results</p>
            </div>
            <div className="space-y-8 bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg px-2 py-4 rounded-lg">
              {currentService.process.map((step, index) => (
                <div key={index} className="flex items-start space-x-6 ">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-700 text-white rounded-full flex items-center justify-center font-bold">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-xl font-semibold">{step.title}</h4>
                      <Badge variant="outline" className="text-whtie">{step.duration}</Badge>
                    </div>
                    <p className="text-gray-400">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Portfolio Tab */}
          <TabsContent value="portfolio" className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4 text-white">Our Work</h3>
              <p className="text-gray-400">Recent projects and success stories</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {currentService.portfolio.map((project, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg text-white">
                  <div className="relative">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                      width={200}
                      height={200}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                      <Button variant="secondary" className="opacity-0 hover:opacity-100 transition-opacity">
                        View Project
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h4 className="font-semibold mb-2">{project.title}</h4>
                    <p className="text-sm text-gray-400">{project.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Testimonials Tab */}
          <TabsContent value="testimonials" className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4 text-white">Client Reviews</h3>
              <p className="text-gray-400">What our clients say about our work</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {currentService.testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-gray-400 mb-4 italic">&quot;{testimonial.content}&quot;</blockquote>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.company}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* FAQ Tab */}
          <TabsContent value="faq" className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4 text-white">Frequently Asked Questions</h3>
              <p className="text-gray-400">Common questions about this service</p>
            </div>
            <div className="space-y-4">
              {currentService.faqs.map((faq, index) => (
                <Card key={index} className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg">
                  <CardContent className="p-6">
                    <h4 className="font-semibold mb-2 text-white">{faq.question}</h4>
                    <p className="text-gray-400">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Contact Form */}
        <Card className="max-w-4xl mx-auto bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg text-white">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Ready to Get Started?</CardTitle>
            <CardDescription>
              Fill out the form below and we&apos;ll get back to you within 24 hours with a detailed proposal.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                <div>
                  <Label htmlFor="company">Company Name</Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Your company name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="budget">Budget Range</Label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-input rounded-md bg-background"
                  >
                    <option value="">Select budget range</option>
                    <option value="under-5k">Under $5,000</option>
                    <option value="5k-10k">$5,000 - $10,000</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="50k-plus">$50,000+</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="timeline">Project Timeline</Label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-input rounded-md bg-background"
                  >
                    <option value="">Select timeline</option>
                    <option value="asap">ASAP</option>
                    <option value="1-month">Within 1 month</option>
                    <option value="2-3-months">2-3 months</option>
                    <option value="3-6-months">3-6 months</option>
                    <option value="6-months-plus">6+ months</option>
                  </select>
                </div>
              </div>

              <div>
                <Label htmlFor="message">Project Details *</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  placeholder="Tell us about your project requirements, goals, and any specific features you need..."
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button type="submit" size="lg" className="flex-1">
                  <Mail className="w-4 h-4 mr-2" />
                  Send Proposal Request
                </Button>
                <Button type="button" variant="outline" size="lg" className="flex-1 bg-transparent">
                  <Phone className="w-4 h-4 mr-2" />
                  Schedule a Call
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Quick Contact */}
        <div className="text-center mt-16">
          <h3 className="text-xl font-semibold mb-4">Need to speak with someone right away?</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline">
              <Phone className="w-4 h-4 mr-2" />
              Call: (555) 123-4567
            </Button>
            <Button variant="outline">
              <MessageCircle className="w-4 h-4 mr-2" />
              Live Chat
            </Button>
            <Button variant="outline">
              <Mail className="w-4 h-4 mr-2" />
              Email: hello@modernservices.com
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}