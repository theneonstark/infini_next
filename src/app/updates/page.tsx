"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CalendarDays, Clock, ArrowRight, Star, Zap, Shield, Smartphone } from "lucide-react"

interface Update {
  id: number
  title: string
  description: string
  date: string
  category: string
  type: string
  image: string
  details: string[]
}

export default function UpdatesPage() {
  const updates: Update[] = [
    {
      id: 1,
      title: "New AI-Powered Design Tools Integration",
      description:
        "We've integrated cutting-edge AI tools to accelerate our design process and deliver even better results for our clients.",
      date: "2024-01-15",
      category: "Feature",
      type: "major",
      image: "/placeholder.svg?height=200&width=400",
      details: [
        "Automated design suggestions based on industry best practices",
        "AI-powered color palette generation",
        "Smart layout optimization",
        "Reduced design time by 40%",
      ],
    },
    {
      id: 2,
      title: "Enhanced Security Protocols",
      description:
        "Implemented advanced security measures across all our development projects to ensure maximum protection for client data.",
      date: "2024-01-10",
      category: "Security",
      type: "major",
      image: "/placeholder.svg?height=200&width=400",
      details: [
        "End-to-end encryption for all data transfers",
        "Multi-factor authentication implementation",
        "Regular security audits and penetration testing",
        "GDPR and CCPA compliance updates",
      ],
    },
    {
      id: 3,
      title: "Mobile-First Development Approach",
      description:
        "All new projects now follow our enhanced mobile-first methodology for optimal user experience across all devices.",
      date: "2024-01-05",
      category: "Process",
      type: "minor",
      image: "/placeholder.svg?height=200&width=400",
      details: [
        "Progressive Web App (PWA) capabilities",
        "Improved mobile performance optimization",
        "Touch-friendly interface design",
        "Cross-platform compatibility testing",
      ],
    },
    {
      id: 4,
      title: "24/7 Support System Launch",
      description:
        "Introducing our new round-the-clock support system to provide immediate assistance whenever you need it.",
      date: "2023-12-28",
      category: "Service",
      type: "major",
      image: "/placeholder.svg?height=200&width=400",
      details: [
        "Live chat support available 24/7",
        "Dedicated support portal",
        "Priority ticket system for urgent issues",
        "Average response time under 2 hours",
      ],
    },
    {
      id: 5,
      title: "Performance Optimization Updates",
      description:
        "Significant improvements to website loading speeds and overall performance across all our hosting solutions.",
      date: "2023-12-20",
      category: "Performance",
      type: "minor",
      image: "/placeholder.svg?height=200&width=400",
      details: [
        "CDN integration for faster content delivery",
        "Image optimization and lazy loading",
        "Code splitting and bundle optimization",
        "Average page load time reduced by 60%",
      ],
    },
    {
      id: 6,
      title: "New Team Members & Expanded Capacity",
      description:
        "We've grown our team with talented developers and designers to better serve our growing client base.",
      date: "2023-12-15",
      category: "Team",
      type: "minor",
      image: "/placeholder.svg?height=200&width=400",
      details: [
        "5 new senior developers joined the team",
        "2 UX/UI specialists added",
        "Expanded project management capabilities",
        "50% increase in project delivery capacity",
      ],
    },
  ]

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Feature":
        return <Star className="w-4 h-4" />
      case "Security":
        return <Shield className="w-4 h-4" />
      case "Process":
        return <Zap className="w-4 h-4" />
      case "Service":
        return <Smartphone className="w-4 h-4" />
      default:
        return <Clock className="w-4 h-4" />
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Feature":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
      case "Security":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
      case "Process":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
      case "Service":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
      case "Performance":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200"
      case "Team":
        return "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">Latest Updates</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay informed about our latest features, improvements, and company news. We&#39;re constantly evolving to serve
            you better.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">15+</div>
              <p className="text-sm text-muted-foreground">Updates This Quarter</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">99.9%</div>
              <p className="text-sm text-muted-foreground">Uptime Achieved</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">40%</div>
              <p className="text-sm text-muted-foreground">Performance Improvement</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">24/7</div>
              <p className="text-sm text-muted-foreground">Support Available</p>
            </CardContent>
          </Card>
        </div>

        {/* Updates List */}
        <div className="space-y-8">
          {updates.map((update) => (
            <Card key={update.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img
                    src={update.image || "/placeholder.svg"}
                    alt={update.title}
                    className="w-full h-48 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <CardHeader className="p-0 mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <Badge className={getCategoryColor(update.category)}>
                          {getCategoryIcon(update.category)}
                          <span className="ml-1">{update.category}</span>
                        </Badge>
                        {update.type === "major" && <Badge variant="destructive">Major Update</Badge>}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <CalendarDays className="w-4 h-4 mr-1" />
                        {formatDate(update.date)}
                      </div>
                    </div>
                    <CardTitle className="text-2xl mb-2">{update.title}</CardTitle>
                    <CardDescription className="text-base">{update.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Key Improvements:</h4>
                      <ul className="space-y-1">
                        {update.details.map((detail, index) => (
                          <li key={index} className="flex items-start text-sm">
                            <ArrowRight className="w-4 h-4 mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button variant="outline" size="sm">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <Card className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 border-0">
          <CardContent className="text-center p-12">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive the latest updates, feature announcements, and company news
              directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg bg-background border border-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <Button className="px-6 py-3">
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}