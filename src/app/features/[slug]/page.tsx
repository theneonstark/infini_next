import ServiceDetailPage from './ServiceDetail';
import { Metadata } from 'next';

// Function to generate metadata based on the slug
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = params; // Get the slug from params

  // Default metadata
  let metadata: Metadata = {
    title: 'Features | InfiniMorph Consulting',
    description:
      'Learn about InfiniMorph Consulting, a dynamic team offering comprehensive digital and business solutions, including web design, development, accounting, graphic design, logo creation, and trademark services.',
    keywords:
      'web development, mobile apps, branding, graphic design, accounting, trademark services, InfiniMorph Consulting',
  };

  // Check slug and update metadata accordingly
  if (slug === 'web-design-development') {
    metadata = {
      title: 'Web Development | InfiniMorph Consulting',
      description:
        'Explore our expert web development services at InfiniMorph Consulting, offering cutting-edge website design and development tailored to your business needs.',
      keywords: 'web development, website design, web solutions, InfiniMorph Consulting',
    };
  } else if (slug === 'app-development') {
    metadata = {
      title: 'App Development | InfiniMorph Consulting',
      description:
        'Discover our mobile app development services at InfiniMorph Consulting, delivering innovative and scalable applications for iOS and Android platforms.',
      keywords: 'app development, mobile apps, iOS, Android, InfiniMorph Consulting',
    };
  } else if (slug === 'accountant-consulting') {
    metadata = {
      title: 'Accounting Services | InfiniMorph Consulting',
      description:
        'Streamline your finances with InfiniMorph Consulting’s professional accounting services, including bookkeeping, tax preparation, and financial planning.',
      keywords: 'accounting, bookkeeping, tax preparation, financial planning, InfiniMorph Consulting',
    };
  } else if (slug === 'graphic-designing') {
    metadata = {
      title: 'Graphic Design | InfiniMorph Consulting',
      description:
        'Transform your brand with InfiniMorph Consulting’s creative graphic design services, delivering visually stunning designs for digital and print media.',
      keywords: 'graphic design, branding, visual design, InfiniMorph Consulting',
    };
  } else if (slug === 'ui-ux-design') {
    metadata = {
      title: 'UI/UX Design | InfiniMorph Consulting',
      description:
        'Enhance user experiences with InfiniMorph Consulting’s UI/UX design services, creating intuitive and engaging interfaces for web and mobile applications.',
      keywords: 'UI/UX design, user experience, user interface, InfiniMorph Consulting',
    };
  } else if (slug === 'logo-creation') {
    metadata = {
      title: 'Logo Creation | InfiniMorph Consulting',
      description:
        'Create a memorable brand identity with InfiniMorph Consulting’s custom logo creation services, designed to reflect your business’s unique vision.',
      keywords: 'logo creation, branding, logo design, InfiniMorph Consulting',
    };
  } else if (slug === 'trademark-branding') {
    metadata = {
      title: 'Trademark Services | InfiniMorph Consulting',
      description:
        'Protect your brand with InfiniMorph Consulting’s trademark services, offering expert guidance on trademark registration and intellectual property.',
      keywords: 'trademark services, intellectual property, brand protection, InfiniMorph Consulting',
    };
  } else if (slug === 'digital-marketing') {
    metadata = {
      title: 'Digital Marketing | InfiniMorph Consulting',
      description:
        'Boost your online presence with InfiniMorph Consulting’s digital marketing services, including SEO, social media, and content marketing strategies.',
      keywords: 'digital marketing, SEO, social media, content marketing, InfiniMorph Consulting',
    };
  } else if (slug === '3d-modals') {
    metadata = {
      title: '3D Modeling | InfiniMorph Consulting',
      description:
        'Bring your ideas to life with InfiniMorph Consulting’s 3D modeling services, creating high-quality models for animations, games, and visualizations.',
      keywords: '3D modeling, 3D design, animations, visualizations, InfiniMorph Consulting',
    };
  } else if (slug === 'video-editing') {
    metadata = {
      title: 'Video Editing | InfiniMorph Consulting',
      description:
        'Craft compelling stories with InfiniMorph Consulting’s professional video editing services, delivering polished videos for marketing and entertainment.',
      keywords: 'video editing, video production, post-production, InfiniMorph Consulting',
    };
  } else if (slug === 'custom-software-development') {
    metadata = {
      title: 'Custom Software Development | InfiniMorph Consulting',
      description:
        'Build tailored solutions with InfiniMorph Consulting’s custom software development services, designed to meet your unique business requirements.',
      keywords: 'custom software, software development, tailored solutions, InfiniMorph Consulting',
    };
  }

  return metadata;
}

function Page() {
  return <ServiceDetailPage />;
}

export default Page;