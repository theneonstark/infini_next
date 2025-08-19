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
import Head from "next/head"

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
  videoUrl: string
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

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // Service data with detailed information
  const serviceData: ServiceDataMap = {
  "web-design-development": {
    title: "Web Design & Development",
    subtitle: "Modern, Responsive Websites That Drive Results",
    description:
      "Transform your online presence with custom-built websites that combine stunning design with powerful functionality. Our expert team creates responsive, SEO-optimized websites that engage visitors and convert them into customers.",
    icon: "/assets/3dicon/web.png",
    price: "Starting at $2,500",
    duration: "4-8 weeks",
    deliverables: "Complete Website + 3 Months Support",
    rating: 4.9,
    reviews: 127,
    image: "/assets/images/Web Design & Development.jpg",
    videoUrl: "https://www.youtube.com/embed/Wr5f3W8tn_w?rel=0&modestbranding=1&playsinline=1",
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
        image: "/assets/projects/ecommerce.png",
      },
      {
        title: "Corporate Business Website",
        description: "Professional website for B2B lead generation",
        image: "/assets/projects/b2b.png",
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
    icon: "/assets/3dicon/mobile.png",
    price: "Starting at $5,000",
    duration: "8-16 weeks",
    deliverables: "Complete App + App Store Deployment",
    rating: 4.8,
    reviews: 89,
    image: "/assets/images/App_Dev.png",
    videoUrl: "/",
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
        image: "/assets/projects/fitness.png",
      },
      {
        title: "Food Delivery Platform",
        description: "Multi-vendor food delivery app with real-time tracking",
        image: "/assets/projects/food.png",
      },
      {
        title: "Social Networking App",
        description: "Community-based social app with messaging features",
        image: "/assets/projects/social.png",
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
  "graphic-designing": {
    title: "Graphic Designing",
    subtitle: "Visually Stunning Designs for Your Brand",
    description:
      "Elevate your brand with captivating graphic designs that communicate your message effectively. Our creative team delivers high-quality visuals for print, digital, and marketing campaigns.",
    icon: "/assets/3dicon/graphic.png",
    price: "Starting at $500",
    duration: "1-4 weeks",
    deliverables: "Custom Graphics + Source Files",
    rating: 4.7,
    reviews: 65,
    image: "/assets/images/graphic.jpg",
    videoUrl: "/",
    features: [
      "Logo Design",
      "Branding Materials",
      "Marketing Collaterals",
      "Social Media Graphics",
      "Print Design",
      "Digital Banners",
      "Infographics",
      "Custom Illustrations",
    ],
    packages: [
      {
        name: "Basic",
        price: "$500",
        description: "Perfect for startups needing basic visuals",
        features: [
          "Logo design",
          "Business card design",
          "1 social media graphic",
          "1 revision round",
        ],
      },
      {
        name: "Professional",
        price: "$1,500",
        description: "Ideal for businesses needing comprehensive branding",
        features: [
          "Logo design with 2 variations",
          "Business card and letterhead",
          "Social media kit (5 graphics)",
          "2 revision rounds",
        ],
        popular: true,
      },
      {
        name: "Premium",
        price: "$3,000+",
        description: "Complete branding solutions for enterprises",
        features: [
          "Full branding package",
          "Marketing collateral set",
          "Social media kit (10 graphics)",
          "Custom illustrations",
          "Unlimited revisions",
        ],
      },
    ],
    process: [
      {
        step: 1,
        title: "Concept Development",
        description: "Understand your brand and create initial design concepts",
        duration: "3-5 days",
      },
      {
        step: 2,
        title: "Design Creation",
        description: "Develop high-quality designs based on approved concepts",
        duration: "1-2 weeks",
      },
      {
        step: 3,
        title: "Revisions",
        description: "Refine designs based on your feedback",
        duration: "3-5 days",
      },
      {
        step: 4,
        title: "Delivery",
        description: "Provide final designs and source files in multiple formats",
        duration: "2-3 days",
      },
    ],
    technologies: ["Adobe Photoshop", "Adobe Illustrator", "Canva", "Figma", "InDesign"],
    portfolio: [
      {
        title: "Startup Logo Design",
        description: "Modern logo for a tech startup",
        image: "/assets/projects/startup.png",
      },
      {
        title: "Marketing Campaign",
        description: "Full set of marketing materials for a retail brand",
        image: "/assets/projects/marketing.png",
      },
      {
        title: "Social Media Kit",
        description: "Engaging social media graphics for a lifestyle brand",
        image: "/assets/projects/mediakit.png",
      },
    ],
    testimonials: [
      {
        name: "Emily Brown",
        company: "StyleVibe",
        content: "The logo and branding materials were spot-on and gave our brand a fresh look!",
        rating: 5,
      },
      {
        name: "James Lee",
        company: "TechTrend",
        content: "Their designs helped us stand out in a competitive market. Highly recommended!",
        rating: 4,
      },
    ],
    faqs: [
      {
        question: "What file formats will I receive?",
        answer: "We provide designs in multiple formats including PNG, JPG, PDF, and source files (AI, PSD).",
      },
      {
        question: "How many revisions are included?",
        answer: "Revision rounds depend on the package. Basic includes 1, Professional includes 2, and Premium offers unlimited revisions.",
      },
      {
        question: "Can you design for print and digital?",
        answer: "Yes, we create designs optimized for both print (CMYK) and digital (RGB) formats.",
      },
    ],
  },
  "ui-ux-design": {
    title: "UI/UX Design",
    subtitle: "User-Centric Designs for Seamless Experiences",
    description:
      "Create intuitive and engaging user interfaces with our expert UI/UX design services. We focus on user research, wireframing, and prototyping to deliver designs that enhance user satisfaction and engagement.",
    icon: "/assets/3dicon/figma.png",
    price: "Starting at $1,500",
    duration: "3-6 weeks",
    deliverables: "Wireframes + Prototypes + Design System",
    rating: 4.8,
    reviews: 78,
    image: "/assets/images/UIUX.webp",
    videoUrl: "/",
    features: [
      "User Research",
      "Wireframing",
      "Prototyping",
      "Usability Testing",
      "Design Systems",
      "Responsive Design",
      "Interaction Design",
      "Accessibility Compliance",
    ],
    packages: [
      {
        name: "Starter",
        price: "$1,500",
        description: "Ideal for small apps or websites",
        features: [
          "User flow design",
          "Basic wireframes",
          "1 prototype",
          "1 revision round",
        ],
      },
      {
        name: "Professional",
        price: "$3,500",
        description: "Perfect for medium-sized projects",
        features: [
          "User research",
          "Detailed wireframes",
          "Interactive prototypes",
          "Design system",
          "2 revision rounds",
        ],
        popular: true,
      },
      {
        name: "Enterprise",
        price: "$7,000+",
        description: "Comprehensive UI/UX for complex projects",
        features: [
          "Full user research",
          "Advanced wireframes",
          "High-fidelity prototypes",
          "Complete design system",
          "Usability testing",
          "Unlimited revisions",
        ],
      },
    ],
    process: [
      {
        step: 1,
        title: "Research & Analysis",
        description: "Conduct user research and analyze requirements",
        duration: "1 week",
      },
      {
        step: 2,
        title: "Wireframing",
        description: "Create low-fidelity wireframes to map user flows",
        duration: "1-2 weeks",
      },
      {
        step: 3,
        title: "Prototyping",
        description: "Develop interactive prototypes for testing",
        duration: "1-2 weeks",
      },
      {
        step: 4,
        title: "Final Design & Delivery",
        description: "Finalize designs and deliver assets",
        duration: "1 week",
      },
    ],
    technologies: ["Figma", "Sketch", "Adobe XD", "InVision"],
    portfolio: [
      {
        title: "Mobile App UI",
        description: "Intuitive UI for a productivity app",
        image: "/assets/projects/mobileui.png",
      },
      {
        title: "E-commerce Interface",
        description: "User-friendly design for an online store",
        image: "/assets/projects/ecommerceui.png",
      },
      {
        title: "Dashboard Design",
        description: "Clean and functional dashboard for analytics",
        image: "/assets/projects/dashboardui.png",
      },
    ],
    testimonials: [
      {
        name: "Anna Taylor",
        company: "AppWorks",
        content: "The UI/UX design transformed our app’s user experience. Engagement increased by 200%!",
        rating: 5,
      },
      {
        name: "Robert King",
        company: "DataCorp",
        content: "Their user-centered approach made our platform incredibly intuitive.",
        rating: 4,
      },
    ],
    faqs: [
      {
        question: "What is included in the design system?",
        answer: "A design system includes typography, colors, components, and guidelines for consistent UI design.",
      },
      {
        question: "Do you conduct user testing?",
        answer: "Yes, our Enterprise package includes usability testing to ensure optimal user experience.",
      },
      {
        question: "Can you redesign existing interfaces?",
        answer: "Yes, we can revamp existing UI/UX to improve functionality and aesthetics.",
      },
    ],
  },
  "accountant-consulting": {
    title: "Accountant Consulting",
    subtitle: "Expert Financial Guidance for Your Business",
    description:
      "Our professional accounting services provide strategic financial advice to optimize your business’s financial health. From bookkeeping to tax planning, we ensure compliance and efficiency.",
    icon: "/assets/3dicon/accountant.png",
    price: "Starting at $1,000/month",
    duration: "Ongoing or Project-Based",
    deliverables: "Financial Reports + Tax Strategy",
    rating: 4.6,
    reviews: 53,
    image: "/assets/images/acc_consulting.jpg",
    videoUrl: "/",
    features: [
      "Bookkeeping",
      "Tax Planning",
      "Financial Reporting",
      "Budgeting",
      "Payroll Management",
      "Audit Support",
      "Cash Flow Analysis",
      "Compliance Consulting",
    ],
    packages: [
      {
        name: "Basic",
        price: "$1,000/month",
        description: "Essential accounting for small businesses",
        features: [
          "Monthly bookkeeping",
          "Basic tax preparation",
          "Financial statements",
          "Quarterly reviews",
        ],
      },
      {
        name: "Professional",
        price: "$2,500/month",
        description: "Comprehensive financial services",
        features: [
          "Full bookkeeping",
          "Advanced tax planning",
          "Monthly financial reports",
          "Budget planning",
          "Payroll services",
        ],
        popular: true,
      },
      {
        name: "Enterprise",
        price: "$5,000+/month",
        description: "Tailored solutions for large businesses",
        features: [
          "Complete financial management",
          "Strategic tax optimization",
          "Custom reporting",
          "Audit preparation",
          "Dedicated consultant",
        ],
      },
    ],
    process: [
      {
        step: 1,
        title: "Assessment",
        description: "Evaluate your financial needs and current systems",
        duration: "1 week",
      },
      {
        step: 2,
        title: "Planning",
        description: "Develop a customized financial strategy",
        duration: "1-2 weeks",
      },
      {
        step: 3,
        title: "Implementation",
        description: "Execute bookkeeping, tax, and reporting services",
        duration: "Ongoing",
      },
      {
        step: 4,
        title: "Review & Optimization",
        description: "Regular reviews to optimize financial performance",
        duration: "Quarterly",
      },
    ],
    technologies: ["QuickBooks", "Xero", "Sage", "Excel", "Wave"],
    portfolio: [
      {
        title: "Small Business Accounting",
        description: "Streamlined financials for a retail chain",
        image: "/assets/projects/businessacc.png",
      },
      {
        title: "Tax Optimization",
        description: "Saved $50K in taxes for a tech startup",
        image: "/assets/projects/tax.png",
      },
      {
        title: "Corporate Financials",
        description: "Managed finances for a multinational firm",
        image: "/assets/projects/corporate.png",
      },
    ],
    testimonials: [
      {
        name: "Laura Adams",
        company: "ShopEasy",
        content: "Their accounting services saved us time and money. Highly professional!",
        rating: 5,
      },
      {
        name: "Tom Harris",
        company: "GrowFast",
        content: "The tax strategies they provided were a game-changer for our business.",
        rating: 4,
      },
    ],
    faqs: [
      {
        question: "What types of businesses do you serve?",
        answer: "We serve startups, SMEs, and large enterprises across various industries.",
      },
      {
        question: "Do you offer tax filing services?",
        answer: "Yes, we handle tax preparation and filing for businesses and individuals.",
      },
      {
        question: "Can you integrate with existing accounting software?",
        answer: "Yes, we work with popular platforms like QuickBooks, Xero, and Sage.",
      },
    ],
  },
  "video-editing": {
    title: "Video Editing",
    subtitle: "Professional Video Content That Captivates",
    description:
      "Create compelling video content with our expert video editing services. From promotional videos to cinematic storytelling, we deliver polished videos that engage your audience.",
    icon: "/assets/3dicon/video.png",
    price: "Starting at $800",
    duration: "1-3 weeks",
    deliverables: "Edited Video + Source Files",
    rating: 4.9,
    reviews: 92,
    image: "/assets/images/video_editing.webp",
    videoUrl: "/",
    features: [
      "Video Editing",
      "Color Grading",
      "Motion Graphics",
      "Sound Design",
      "Transitions & Effects",
      "4K Resolution",
      "Storyboarding",
      "Subtitling",
    ],
    packages: [
      {
        name: "Basic",
        price: "$800",
        description: "Simple video editing for short projects",
        features: [
          "Up to 2-minute video",
          "Basic cuts and transitions",
          "Standard audio editing",
          "1 revision",
        ],
      },
      {
        name: "Professional",
        price: "$2,000",
        description: "Ideal for marketing and promotional videos",
        features: [
          "Up to 5-minute video",
          "Advanced editing",
          "Color grading",
          "Motion graphics",
          "2 revisions",
        ],
        popular: true,
      },
      {
        name: "Cinematic",
        price: "$5,000+",
        description: "High-end video production for films and ads",
        features: [
          "Unlimited length",
          "Cinematic editing",
          "Custom effects",
          "Professional sound design",
          "Unlimited revisions",
        ],
      },
    ],
    process: [
      {
        step: 1,
        title: "Footage Review",
        description: "Analyze raw footage and project goals",
        duration: "2-3 days",
      },
      {
        step: 2,
        title: "Editing",
        description: "Edit the video with cuts, transitions, and effects",
        duration: "1-2 weeks",
      },
      {
        step: 3,
        title: "Enhancements",
        description: "Add color grading, sound, and motion graphics",
        duration: "3-5 days",
      },
      {
        step: 4,
        title: "Final Delivery",
        description: "Deliver the final video and source files",
        duration: "2-3 days",
      },
    ],
    technologies: ["Adobe Premiere Pro", "Final Cut Pro", "After Effects", "DaVinci Resolve"],
    portfolio: [
      {
        title: "Promotional Video",
        description: "Engaging ad for a product launch",
        image: "/assets/projects/promotional.png",
      },
      {
        title: "Corporate Video",
        description: "Professional video for company branding",
        image: "/assets/projects/corporatev.png",
      },
      {
        title: "Short Film",
        description: "Cinematic editing for an award-winning short",
        image: "/assets/projects/shortfilm.png",
      },
    ],
    testimonials: [
      {
        name: "Chris Evans",
        company: "BrandBoost",
        content: "The video they created was stunning and boosted our campaign!",
        rating: 5,
      },
      {
        name: "Sophie Turner",
        company: "MediaPro",
        content: "Their editing skills turned our raw footage into a masterpiece.",
        rating: 5,
      },
    ],
    faqs: [
      {
        question: "What video formats do you deliver?",
        answer: "We deliver in MP4, MOV, AVI, and other formats as needed.",
      },
      {
        question: "Can you work with existing footage?",
        answer: "Yes, we can edit and enhance any raw footage you provide.",
      },
      {
        question: "Do you offer animation services?",
        answer: "Yes, we provide motion graphics and basic animation in our packages.",
      },
    ],
  },
  "3d-modals": {
    title: "3D Modeling",
    subtitle: "Realistic 3D Assets for Any Industry",
    description:
      "Create high-quality 3D models for games, animations, or product visualizations. Our skilled artists deliver detailed and optimized models tailored to your needs.",
    icon: "/assets/3dicon/3dmodal.png",
    price: "Starting at $1,200",
    duration: "2-6 weeks",
    deliverables: "3D Models + Textures",
    rating: 4.7,
    reviews: 47,
    image: "/assets/images/3d-Models.webp",
    videoUrl: "/",
    features: [
      "3D Modeling",
      "Texturing",
      "Rigging",
      "Animation",
      "Rendering",
      "Low-Poly Models",
      "High-Poly Models",
      "UV Mapping",
    ],
    packages: [
      {
        name: "Basic",
        price: "$1,200",
        description: "Simple 3D models for small projects",
        features: [
          "1 low-poly model",
          "Basic texturing",
          "1 revision",
        ],
      },
      {
        name: "Professional",
        price: "$3,000",
        description: "Detailed models for professional use",
        features: [
          "1 high-poly model",
          "Advanced texturing",
          "Rigging",
          "2 revisions",
        ],
        popular: true,
      },
      {
        name: "Enterprise",
        price: "$6,000+",
        description: "Complex 3D assets for large-scale projects",
        features: [
          "Multiple models",
          "Custom animations",
          "High-quality rendering",
          "Unlimited revisions",
        ],
      },
    ],
    process: [
      {
        step: 1,
        title: "Concept & Planning",
        description: "Define model specifications and requirements",
        duration: "3-5 days",
      },
      {
        step: 2,
        title: "Modeling",
        description: "Create the 3D model structure",
        duration: "1-3 weeks",
      },
      {
        step: 3,
        title: "Texturing & Rigging",
        description: "Add textures and rigging for animation",
        duration: "1-2 weeks",
      },
      {
        step: 4,
        title: "Delivery",
        description: "Deliver final models and files",
        duration: "3-5 days",
      },
    ],
    technologies: ["Blender", "Maya", "3ds Max", "ZBrush", "Substance Painter"],
    portfolio: [
      {
        title: "Game Character",
        description: "Detailed 3D character for a video game",
        image: "/assets/projects/gamechr.png",
      },
      {
        title: "Product Visualization",
        description: "Realistic 3D model of a consumer product",
        image: "/assets/projects/product.png",
      },
      {
        title: "Architectural Model",
        description: "3D model of a building for visualization",
        image: "/assets/projects/architechure.png",
      },
    ],
    testimonials: [
      {
        name: "Mark Thompson",
        company: "GameStudio",
        content: "The 3D models were perfect for our game. Highly detailed and optimized!",
        rating: 5,
      },
      {
        name: "Rachel Green",
        company: "ProductX",
        content: "Their 3D visualizations helped us showcase our product beautifully.",
        rating: 4,
      },
    ],
    faqs: [
      {
        question: "What file formats do you provide?",
        answer: "We provide OBJ, FBX, STL, and other formats as required.",
      },
      {
        question: "Can you create animated 3D models?",
        answer: "Yes, our Professional and Enterprise packages include rigging and animation.",
      },
      {
        question: "Do you optimize models for games?",
        answer: "Yes, we create low-poly models optimized for real-time rendering in games.",
      },
    ],
  },
  "trademark-branding": {
    title: "Trademark & Branding",
    subtitle: "Protect and Build Your Brand Identity",
    description:
      "Establish a strong brand identity and protect it with our trademark and branding services. We create memorable brands and ensure legal protection through trademark registration.",
    icon: "/assets/3dicon/trademark.png",
    price: "Starting at $2,000",
    duration: "4-8 weeks",
    deliverables: "Brand Identity + Trademark Filing",
    rating: 4.8,
    reviews: 60,
    image: "/assets/images/Trademark.webp",
    videoUrl: "/",
    features: [
      "Brand Strategy",
      "Logo Design",
      "Trademark Search",
      "Trademark Registration",
      "Brand Guidelines",
      "Visual Identity",
      "Tagline Creation",
      "Market Analysis",
    ],
    packages: [
      {
        name: "Basic",
        price: "$2,000",
        description: "Basic branding and trademark services",
        features: [
          "Logo design",
          "Trademark search",
          "Basic brand guidelines",
          "1 revision",
        ],
      },
      {
        name: "Professional",
        price: "$4,500",
        description: "Comprehensive branding and protection",
        features: [
          "Logo and visual identity",
          "Trademark filing",
          "Brand strategy",
          "2 revisions",
        ],
        popular: true,
      },
      {
        name: "Enterprise",
        price: "$8,000+",
        description: "Full branding and trademark solutions",
        features: [
          "Complete brand identity",
          "Global trademark registration",
          "Market analysis",
          "Unlimited revisions",
        ],
      },
    ],
    process: [
      {
        step: 1,
        title: "Brand Discovery",
        description: "Understand your business and brand vision",
        duration: "1 week",
      },
      {
        step: 2,
        title: "Design & Strategy",
        description: "Create brand assets and strategy",
        duration: "2-3 weeks",
      },
      {
        step: 3,
        title: "Trademark Process",
        description: "Conduct searches and file trademarks",
        duration: "1-2 weeks",
      },
      {
        step: 4,
        title: "Finalization",
        description: "Deliver brand guidelines and trademark documents",
        duration: "1 week",
      },
    ],
    technologies: ["Adobe Illustrator", "Figma", "LegalZoom", "USPTO Tools"],
    portfolio: [
      {
        title: "Tech Brand Identity",
        description: "Created a unique brand for a tech startup",
        image: "/assets/projects/techbrand.png",
      },
      {
        title: "Retail Branding",
        description: "Developed a retail brand with trademark protection",
        image: "/assets/projects/retailbrand.png",
      },
      {
        title: "Global Brand",
        description: "International brand with global trademarks",
        image: "/assets/projects/globalbrand.png",
      },
    ],
    testimonials: [
      {
        name: "John Carter",
        company: "InnovateTech",
        content: "Our brand identity is now iconic, and our trademark is secure!",
        rating: 5,
      },
      {
        name: "Emma Wilson",
        company: "ShopTrend",
        content: "The branding process was smooth, and the results were outstanding.",
        rating: 4,
      },
    ],
    faqs: [
      {
        question: "What is included in brand guidelines?",
        answer: "Guidelines include logos, colors, typography, and usage rules for consistency.",
      },
      {
        question: "How long does trademark registration take?",
        answer: "It typically takes 6-12 months, depending on the region and complexity.",
      },
      {
        question: "Do you handle international trademarks?",
        answer: "Yes, our Enterprise package includes global trademark registration.",
      },
    ],
  },
  "digital-marketing": {
    title: "Digital Marketing",
    subtitle: "Grow Your Online Presence with Proven Strategies",
    description:
      "Boost your brand’s visibility and engagement with our data-driven digital marketing services. From SEO to social media, we create campaigns that deliver results.",
    icon: "/assets/3dicon/dm.png",
    price: "Starting at $1,000/month",
    duration: "Ongoing or Campaign-Based",
    deliverables: "Marketing Strategy + Reports",
    rating: 4.9,
    reviews: 110,
    image: "/assets/images/DM.jpg",
    videoUrl: "/",
    features: [
      "SEO",
      "Social Media Marketing",
      "PPC Advertising",
      "Content Marketing",
      "Email Campaigns",
      "Analytics & Reporting",
      "Influencer Marketing",
      "Conversion Optimization",
    ],
    packages: [
      {
        name: "Starter",
        price: "$1,000/month",
        description: "Basic digital marketing for small businesses",
        features: [
          "Basic SEO",
          "1 social media platform",
          "Monthly reports",
          "Email campaign setup",
        ],
      },
      {
        name: "Professional",
        price: "$3,000/month",
        description: "Comprehensive marketing for growth",
        features: [
          "Advanced SEO",
          "3 social media platforms",
          "PPC campaign",
          "Content creation",
          "Bi-weekly reports",
        ],
        popular: true,
      },
      {
        name: "Enterprise",
        price: "$7,000+/month",
        description: "Full-scale digital marketing solutions",
        features: [
          "Complete SEO strategy",
          "Multiple platforms",
          "Advanced PPC",
          "Influencer partnerships",
          "Weekly reports",
        ],
      },
    ],
    process: [
      {
        step: 1,
        title: "Strategy Development",
        description: "Analyze goals and create a marketing plan",
        duration: "1-2 weeks",
      },
      {
        step: 2,
        title: "Campaign Setup",
        description: "Set up campaigns across chosen channels",
        duration: "1-2 weeks",
      },
      {
        step: 3,
        title: "Execution",
        description: "Run and manage marketing campaigns",
        duration: "Ongoing",
      },
      {
        step: 4,
        title: "Reporting & Optimization",
        description: "Track performance and optimize strategies",
        duration: "Monthly",
      },
    ],
    technologies: ["Google Ads", "Meta Ads", "HubSpot", "Google Analytics", "SEMrush"],
    portfolio: [
      {
        title: "SEO Campaign",
        description: "Increased organic traffic by 150% for an e-commerce site",
        image: "/assets/projects/seocampaign.png",
      },
      {
        title: "Social Media Ads",
        description: "Boosted engagement for a fashion brand",
        image: "/assets/projects/ads.png",
      },
      {
        title: "PPC Campaign",
        description: "Achieved 5x ROI on Google Ads campaign",
        image: "/assets/projects/ppc.png",
      },
    ],
    testimonials: [
      {
        name: "Sophie Davis",
        company: "TrendyStore",
        content: "Our online sales doubled thanks to their marketing strategies!",
        rating: 5,
      },
      {
        name: "Liam Brown",
        company: "TechWave",
        content: "The SEO and PPC campaigns delivered amazing results.",
        rating: 5,
      },
    ],
    faqs: [
      {
        question: "What platforms do you cover?",
        answer: "We manage campaigns on Google, Meta, LinkedIn, and more.",
      },
      {
        question: "How do you measure success?",
        answer: "We track KPIs like traffic, conversions, and ROI with detailed reports.",
      },
      {
        question: "Can you manage existing campaigns?",
        answer: "Yes, we can optimize and manage your current marketing campaigns.",
      },
    ],
  },
  "custom-software-development": {
    title: "Custom Software Development",
    subtitle: "Tailored Software Solutions for Your Business",
    description:
      "Develop bespoke software solutions to streamline your business processes. Our team builds scalable, secure, and efficient software tailored to your specific needs.",
    icon: "/assets/3dicon/custom.png",
    price: "Starting at $10,000",
    duration: "8-20 weeks",
    deliverables: "Custom Software + Documentation",
    rating: 4.8,
    reviews: 72,
    image: "/assets/images/csd.jpg",
    videoUrl: "/",
    features: [
      "Custom Development",
      "Scalable Architecture",
      "API Integrations",
      "Cloud Solutions",
      "Security Features",
      "User Training",
      "Maintenance Support",
      "Database Management",
    ],
    packages: [
      {
        name: "Basic",
        price: "$10,000",
        description: "Simple software for small businesses",
        features: [
          "Basic functionality",
          "Single module",
          "Basic UI",
          "1 month support",
        ],
      },
      {
        name: "Professional",
        price: "$25,000",
        description: "Robust software for growing businesses",
        features: [
          "Multiple modules",
          "Custom UI/UX",
          "API integrations",
          "3 months support",
        ],
        popular: true,
      },
      {
        name: "Enterprise",
        price: "$50,000+",
        description: "Advanced solutions for large organizations",
        features: [
          "Complex systems",
          "Advanced integrations",
          "Scalable architecture",
          "6 months support",
        ],
      },
    ],
    process: [
      {
        step: 1,
        title: "Requirements Analysis",
        description: "Gather and analyze business requirements",
        duration: "2-3 weeks",
      },
      {
        step: 2,
        title: "Design & Prototyping",
        description: "Create software designs and prototypes",
        duration: "2-4 weeks",
      },
      {
        step: 3,
        title: "Development",
        description: "Build the software using best practices",
        duration: "4-12 weeks",
      },
      {
        step: 4,
        title: "Testing & Deployment",
        description: "Test and deploy the software with training",
        duration: "2-3 weeks",
      },
    ],
    technologies: ["Java", "Python", "C#", "AWS", "SQL", "Docker"],
    portfolio: [
      {
        title: "CRM Software",
        description: "Custom CRM for a sales team",
        image: "/assets/projects/crm.png",
      },
      {
        title: "Inventory System",
        description: "Efficient inventory management software",
        image: "/assets/projects/ims.png",
      },
      {
        title: "ERP Solution",
        description: "Enterprise resource planning system",
        image: "/assets/projects/erp.png",
      },
    ],
    testimonials: [
      {
        name: "Daniel Lee",
        company: "SmartBiz",
        content: "The custom software streamlined our operations significantly!",
        rating: 5,
      },
      {
        name: "Grace Kim",
        company: "TechCorp",
        content: "Their team delivered a robust and user-friendly solution.",
        rating: 4,
      },
    ],
    faqs: [
      {
        question: "What types of software do you build?",
        answer: "We develop CRM, ERP, inventory, and custom business applications.",
      },
      {
        question: "Do you provide ongoing support?",
        answer: "Yes, all packages include support, and we offer maintenance plans.",
      },
      {
        question: "Can you integrate with existing systems?",
        answer: "Yes, we ensure seamless integration with your current systems.",
      },
    ],
  },
};

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

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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
              <Image src={currentService.icon} width={100} height={100} alt={`${currentService.title} icon`}/>
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
              className="w-full h-full object-cover rounded-lg shadow-lg"
              width={500}
              height={500}
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg flex items-center justify-center">
              <Button 
                variant="secondary" 
                size="lg" 
                className="bg-white/90 text-black hover:bg-white"
                onClick={openModal}
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>
          </div>
        </div>

        {/* Modal for YouTube Video */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <div className="bg-gray-900 p-6 rounded-lg w-full max-w-3xl relative">
              <button 
                className="absolute top-2 right-2 text-white hover:text-gray-300"
                onClick={closeModal}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src={currentService.videoUrl || "https://www.youtube.com/embed/dQw4w9WgXcQ"}
                  title="Demo Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-96 rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
        )}

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
                      <Badge className="bg-white text-black hover:text-white">Most Popular</Badge>
                    </div>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl">{pkg.name}</CardTitle>
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
                      width={500}
                      height={500}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                      {/* <Button variant="secondary" className="opacity-0 hover:opacity-100 transition-opacity">
                        View Project
                      </Button> */}
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
        {/* <Card className="max-w-4xl mx-auto bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg text-white">
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
        </Card> */}

        {/* Quick Contact */}
        <div className="text-center mt-16">
          <h3 className="text-xl font-semibold mb-4">Need to speak with someone right away?</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline">
              <Phone className="w-4 h-4 mr-2" />
              Call: (+91) 92115-79757
            </Button>
            <Button variant="outline">
              <MessageCircle className="w-4 h-4 mr-2" />
              Live Chat
            </Button>
            <Button variant="outline">
              <Mail className="w-4 h-4 mr-2" />
              Email: info@infinimorphconsulting.com
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}