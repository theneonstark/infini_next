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
      title: 'Web Design & Development with Build Stunning Websites | Infinimorph Consulting.',
      description:
        'Build a powerful online presence with Infinimorph Consultings Web Design & Development services. We create modern, responsive, and SEO-optimized websites that help startups and businesses scale faster.',
      keywords: 'web development, website design, web solutions, InfiniMorph Consulting',
    };
  } else if (slug === 'app-development') {
    metadata = {
      title: 'Custom App Development Services | Infinimorph Consulting',
      description:
        'Infinimorph Consulting provides custom App Development services that help startups and businesses create scalable, user-friendly, and innovative mobile apps designed to boost engagement, efficiency, and growth.',
      keywords: 'app development, mobile apps, iOS, Android, InfiniMorph Consulting',
    };
  } else if (slug === 'accountant-consulting') {
    metadata = {
      title: 'Professional Accountant Consulting Services | Infinimorph Consulting',
      description:
        'Infinimorph Consulting provides expert Accountant Consulting services to help businesses manage finances, ensure compliance, optimize tax strategies, and achieve sustainable financial growth with professional guidance.',
      keywords: 'accounting, bookkeeping, tax preparation, financial planning, InfiniMorph Consulting',
    };
  } else if (slug === 'graphic-designing') {
    metadata = {
      title: 'Creative Graphic Design Services | Infinimorph Consulting',
      description:
        'Infinimorph Consulting offers creative Graphic Design services that help startups and businesses build strong branding with stunning visuals, unique designs, and professional graphics that engage audiences and drive growth.',
      keywords: 'graphic design, branding, visual design, InfiniMorph Consulting',
    };
  } else if (slug === 'ui-ux-design') {
    metadata = {
      title: 'UI/UX Design Services for Engaging Experiences | Infinimorph Consulting',
      description:
        'Infinimorph Consulting delivers professional UI/UX Design services that create intuitive, user-friendly, and engaging digital experiences to help startups and businesses boost customer satisfaction and growth.',
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
      title: 'Trademark & Branding Solutions | Infinimorph Consulting',
      description:
        'Infinimorph Consulting provides expert Trademark & Branding solutions to help businesses protect their brand identity, create memorable logos, and build a strong market presence that drives recognition and growth.',
      keywords: 'trademark services, intellectual property, brand protection, InfiniMorph Consulting',
    };
  } else if (slug === 'digital-marketing') {
    metadata = {
      title: 'Digital Marketing Services | Infinimorph Consulting',
      description:
        'Infinimorph Consulting offers comprehensive Digital Marketing services to help businesses boost online presence, increase leads, drive traffic, and achieve measurable growth through SEO, social media, and paid campaigns.',
      keywords: 'digital marketing, SEO, social media, content marketing, InfiniMorph Consulting',
    };
  } else if (slug === '3d-modals') {
    metadata = {
      title: 'Custom 3D Modeling Services | Infinimorph Consulting',
      description:
        'Infinimorph Consulting offers custom 3D Modeling services that bring ideas to life with realistic, high-quality designs for products, architecture, and branding, helping businesses create impactful visual experiences.',
      keywords: '3D modeling, 3D design, animations, visualizations, InfiniMorph Consulting',
    };
  } else if (slug === 'video-editing') {
    metadata = {
      title: 'Professional Video Editing Services | Infinimorph Consulting',
      description:
        'Infinimorph Consulting offers professional Video Editing services that turn raw footage into engaging, high-quality videos designed to boost brand visibility, connect with audiences, and drive business growth.',
      keywords: 'video editing, video production, post-production, InfiniMorph Consulting',
    };
  } else if (slug === 'custom-software-development') {
    metadata = {
      title: 'Custom Software Development Services | Infinimorph Consulting',
      description:
        'Infinimorph Consulting provides custom Software Development services to help businesses build scalable, secure, and efficient applications tailored to their needs, driving digital transformation and growth.',
      keywords: 'custom software, software development, tailored solutions, InfiniMorph Consulting',
    };
  }

  return metadata;
}

function Page() {
  return <ServiceDetailPage />;
}

export default Page;