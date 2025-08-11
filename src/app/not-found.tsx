"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Home, ArrowLeft, Search, Mail } from "lucide-react"

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto text-center my-16">
      {/* 404 Hero Section */}
      <div className="mb-8">
        <div className="text-8xl md:text-9xl font-bold text-white mb-4">404</div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-400 mb-4">Page Not Found</h1>
        <p className="text-lg text-gray-400 mb-8 max-w-md mx-auto">
          Oops! The page you&apos;re looking for seems to have wandered off into the digital void. Don&apos;t worry, we&apos;ll help
          you find your way back.
        </p>
      </div>

      {/* Action Cards */}
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <Card className="hover:shadow-lg transition-shadow bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg text-white">
          <CardContent className="p-6">
            <Home className="h-8 w-8 text-white mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Go Home</h3>
            <p className="text-sm text-gray-400 mb-4">Return to our homepage and explore our services</p>
            <Button asChild className="w-full bg-white text-black hover:text-white">
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg">
          <CardContent className="p-6">
            <Search className="h-8 w-8 text-primary mx-auto mb-3 text-white" />
            <h3 className="font-semibold mb-2 text-white">Browse Services</h3>
            <p className="text-sm text-gray-400 mb-4">Check out our comprehensive service offerings</p>
            <Button asChild variant="outline" className="w-full bg-transparent text-white">
              <Link href="/features">
                <Search className="mr-2 h-4 w-4" />
                View Services
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Quick Links */}
      <Card className="mb-8 bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg text-white">
        <CardContent className="p-6">
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <div className="flex flex-wrap justify-center gap-2">
            <Button asChild variant="ghost" size="sm">
              <Link href="/about">About Us</Link>
            </Button>
            <Button asChild variant="ghost" size="sm">
              <Link href="/contact">Contact</Link>
            </Button>
            <Button asChild variant="ghost" size="sm">
              <Link href="/help">Help Center</Link>
            </Button>
            {/* <Button asChild variant="ghost" size="sm">
              <Link href="/updates">Updates</Link>
            </Button> */}
          </div>
        </CardContent>
      </Card>

      {/* Contact Support */}
      <div className="text-center">
        <p className="text-sm text-gray-400 mb-4">Still can&apos;t find what you&apos;re looking for?</p>
        <Button asChild variant="outline">
          <Link href="/contact">
            <Mail className="mr-2 h-4 w-4" />
            Contact Support
          </Link>
        </Button>
      </div>
    </div>
  )
}
