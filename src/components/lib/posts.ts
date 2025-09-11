interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  tags: string[];
  cover: string;
  content: { tag: string; heading: string; description: string; image: string }[];
}

const posts: Post[] = [
  {
    slug: "modern-nextjs-service-site",
    title: "UI/UX & Graphic Designing: Complete Guide for 2025",
    excerpt:
      "A deep-dive guide on user-centered design, conversion-focused UI/UX strategies, top graphic design tools, and color psychology for 2025.",
    date: "2025-09-01",
    author: "Team",
    tags: ["UI/UX", "Graphic Design", "Branding", "CRO"],
    cover: "/assets/projects/uiux-guide.png",
    content: [
      {
        tag: "h1",
        heading: "UI/UX & Graphic Designing: Complete Guide for 2025",
        description:
          "In today’s digital-first world, UI/UX design and graphic designing are no longer just about visuals—they directly impact user trust, conversions, and brand growth. In this guide, we’ll explore user-centered design principles, CRO strategies, the best design tools, and the psychology of colors.",
        image: "/assets/projects/ads.png"
      },
      {
        tag: "h2",
        heading: "Principles of User-Centered Design",
        description:
          "User-Centered Design (UCD) ensures that every design decision revolves around the needs of the end user.",
        image: "/assets/projects/b2b.png"
      },
      {
        tag: "h3",
        heading: "Core Principles of UCD",
        description:
          "• Empathy First: Understand users’ needs and pain points.\n• Clarity Over Complexity: Simple, intuitive interfaces.\n• Consistency Across Platforms: Keep navigation and visuals familiar.\n• Feedback Loops: Continuous testing and iteration.",
        image: "/assets/projects/erp.png"
      },
      {
        tag: "h3",
        heading: "Why Businesses Should Care",
        description:
          "Websites designed with UCD principles reduce bounce rates, increase engagement, and improve brand loyalty.",
        image: "/assets/projects/fitness.png"
      },
      {
        tag: "h2",
        heading: "How UI/UX Impacts Conversion Rate Optimization (CRO)",
        description: "Good design isn’t about looking pretty—it’s about driving action.",
        image: "/assets/projects/crm.png"
      },
      {
        tag: "h3",
        heading: "Real-World Example",
        description:
          "Brands like Shopify & Airbnb have shown that a small design tweak (button color, layout, or checkout flow) can improve conversions by 20–40%.",
        image: "/assets/projects/ims.png"
      },
      {
        tag: "h2",
        heading: "Top Graphic Design Tools for 2025",
        description: "Graphic designers today need speed, collaboration, and AI-powered creativity.",
        image: "/assets/projects/food.png"
      },
      {
        tag: "h3",
        heading: "Must-Have Tools",
        description:
          "• Figma: Best for collaborative UI design.\n• Canva: Quick, drag-and-drop designs for startups.\n• Adobe XD & Illustrator: Industry standard for professionals.\n• MidJourney / DALL·E: AI-powered design generation.\n• Sketch: Popular with iOS designers.",
        image: "/assets/projects/gamechr.png"
      },
      {
        tag: "h3",
        heading: "Trend in 2025",
        description:
          "AI + automation is making design faster, but creativity and human touch remain irreplaceable.",
        image: "/assets/projects/mediakit.png"
      },
      {
        tag: "h2",
        heading: "The Psychology of Colors in Branding & Design",
        description: "Colors shape emotions, influence decisions, and create brand recall.",
        image: "/assets/projects/ppc.png"
      },
      {
        tag: "h3",
        heading: "Common Color Meanings",
        description:
          "• Red: Excitement, urgency (used in sales & fast food).\n• Blue: Trust, stability (popular with banks & healthcare).\n• Green: Growth, health (eco-friendly & wellness brands).\n• Yellow: Optimism, attention-grabbing.\n• Black & White: Luxury, minimalism, professionalism.",
        image: "/assets/projects/social.png"
      },
      {
        tag: "h3",
        heading: "Using Colors in UX & Branding",
        description:
          "• Maintain contrast for readability.\n• Align with brand personality.\n• Use color psychology in CTAs & landing pages for better CRO.",
        image: "/assets/projects/retailbrand.png"
      },
      {
        tag: "h2",
        heading: "Conclusion",
        description:
          "UI/UX and graphic design go beyond aesthetics—they drive business growth, user engagement, and brand trust. In 2025, companies that master user-centered design, optimize UX for conversions, and use modern tools with color psychology will stand out in crowded markets.",
        image: "/assets/projects/product.png"
      }
    ]
  },
  {
    slug: "design-system-essentials",
    title: "Design System Essentials: Colors, Type, and Layout",
    excerpt:
      "Keep interfaces clean by sticking to 3–5 colors, two fonts max, and mobile-first spacing rules for a professional, accessible design.",
    date: "2025-08-20",
    author: "Design",
    tags: ["Design", "Accessibility"],
    cover: "/assets/projects/ads.png",
    content: [
      {
        tag: "h1",
        heading: "Why a Design System Matters",
        description: "A disciplined design system improves speed and consistency.",
        image: "/assets/projects/ads.png"
      },
      {
        tag: "h2",
        heading: "Color and Typography Choices",
        description:
          "Limit colors, choose legible typography, and use predictable spacing with flexbox-first layouts.",
        image: "/assets/projects/b2b.png"
      },
      {
        tag: "h3",
        heading: "Practical Rules for Consistency",
        description:
          "This article summarizes the practical rules we apply across our pages.",
        image: "/assets/projects/crm.png"
      }
    ]
  },
  {
    slug: "ship-faster-with-patterns",
    title: "Ship Faster with Reusable Patterns",
    excerpt:
      "Stop reinventing the wheel—compose from Cards, Buttons, and layout primitives to move quickly without sacrificing quality.",
    date: "2025-08-05",
    author: "Engineering",
    tags: ["Productivity", "Patterns"],
    cover: "/assets/projects/ads.png",
    content: [
      {
        tag: "h1",
        heading: "The Power of Reusable Patterns",
        description: "Reusable patterns let small teams ship quickly while maintaining quality.",
        image: "/assets/projects/ads.png"
      },
      {
        tag: "h2",
        heading: "Key Components for Speed",
        description: "Use cards for previews, clear CTAs, and consistent typography.",
        image: "/assets/projects/b2b.png"
      },
      {
        tag: "h3",
        heading: "Scaling Your Application",
        description: "When your app grows, these patterns become your foundation.",
        image: "/assets/projects/crm.png"
      }
    ]
  }
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getAllPosts(): Post[] {
  return posts;
}
