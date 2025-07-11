"use client"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Search,
  ChevronRight,
  MessageCircle,
  Phone,
  Mail,
  FileText,
  HelpCircle,
  Book,
  Video,
  Download,
  ExternalLink,
} from "lucide-react"

export default function HelpPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const categories = [
    {
      title: "Getting Started",
      icon: <Book className="w-6 h-6 text-blue-400" />,
      description: "Learn the basics and get up and running quickly",
      articles: 12,
      color: "bg-blue-900 text-blue-300",
    },
    {
      title: "Account & Billing",
      icon: <FileText className="w-6 h-6 text-green-400" />,
      description: "Manage your account settings and billing information",
      articles: 8,
      color: "bg-green-900 text-green-300",
    },
    {
      title: "Technical Support",
      icon: <HelpCircle className="w-6 h-6 text-purple-400" />,
      description: "Troubleshooting and technical assistance",
      articles: 15,
      color: "bg-purple-900 text-purple-300",
    },
    {
      title: "API Documentation",
      icon: <FileText className="w-6 h-6 text-orange-400" />,
      description: "Developer resources and API guides",
      articles: 20,
      color: "bg-orange-900 text-orange-300",
    },
  ]

  const resources = [
    {
      title: "Video Tutorials",
      description: "Step-by-step video guides for common tasks",
      icon: <Video className="w-8 h-8 text-indigo-400" />,
      count: "25+ videos",
      link: "#",
    },
    {
      title: "Download Center",
      description: "Templates, guides, and useful resources",
      icon: <Download className="w-8 h-8 text-green-400" />,
      count: "15+ downloads",
      link: "#",
    },
    {
      title: "API Reference",
      description: "Complete API documentation and examples",
      icon: <FileText className="w-8 h-8 text-yellow-400" />,
      count: "Full docs",
      link: "#",
    },
  ]

  return (
    <div className="min-h-screen py-20 text-gray-300">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 text-white">Help Center</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8 text-gray-400">
            Find answers to your questions, browse our documentation, or get in touch with our support team.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search for help articles, guides, or FAQs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 py-6 text-lg bg-[#1f1f1f] border border-gray-700 text-white placeholder-gray-500"
            />
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[{
            icon: <MessageCircle className="w-8 h-8 text-blue-400" />,
            title: "Live Chat",
            desc: "Get instant help from our support team",
            btn: <Button className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors">Start Chat</Button>
          }, {
            icon: <Phone className="w-8 h-8 text-green-400" />,
            title: "Phone Support",
            desc: "Call us for immediate assistance",
            btn: <Button className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors">Call Now</Button>
          }, {
            icon: <Mail className="w-8 h-8 text-purple-400" />,
            title: "Email Support",
            desc: "Send us a detailed message",
            btn: <Button className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors">Send Email</Button>
          }].map((item, i) => (
            <Card key={i} className="bg-white/10 backdrop-blur-md border border-white/10 hover:shadow-lg transition-shadow cursor-pointer text-center">
              <CardContent className="pt-8 pb-6 text-gray-200">
                <div className="w-16 h-16 bg-[#2f2f2f] rounded-full flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                <p className="text-gray-400 mb-4">{item.desc}</p>
                {item.btn}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Categories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-white">Browse by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-md border border-white/10 hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6 text-gray-200">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${category.color}`}>
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white">{category.title}</h3>
                  <p className="text-sm mb-3">{category.description}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span>{category.articles} articles</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Resources */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-white">Additional Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-md border border-white/10 hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center text-gray-200">
                  <div className="w-16 h-16 bg-[#2f2f2f] rounded-full flex items-center justify-center mx-auto mb-4">
                    {resource.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white">{resource.title}</h3>
                  <p className="mb-4">{resource.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">{resource.count}</span>
                    <Button size="sm" className="bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors">
                      Explore
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Support */}
        <Card className="bg-white/10 backdrop-blur-md border border-purple-700">
          <CardContent className="text-center p-12 text-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-white">Still Need Help?</h3>
            <p className="mb-8 max-w-2xl mx-auto">
              Can&#39;t find what you&#39;re looking for? Our support team is here to help you with any questions or issues you
              might have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Contact Support
                <MessageCircle className="w-4 h-4 ml-2" />
              </Button>
              <Button size="lg" className="bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors">
                Schedule a Call
                <Phone className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
