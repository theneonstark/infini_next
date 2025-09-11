import Image from 'next/image';
import Link from 'next/link';

export const Footer = () => {
  return(
    <footer className="bg-black text-card-foreground py-8 mt-auto border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Image src={'/assets/icons/logo.png'} width={200} height={600} alt='logo image'/>
            <p className="text-muted-foreground">
              InfiniMorph Consulting is a full-service digital solutions company helping startups and enterprises build high-performing websites, scalable mobile apps, and ROI-driven marketing strategies. From branding and UI/UX design to SEO and accounting, we deliver end-to-end services to accelerate business growth.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Development Services</h4>
            <ul className="space-y-2 text-muted-foreground flex flex-col">
              <Link href={'/features/web-design-development'}>Web Development</Link>
              <Link href={'/features/'}>App Development</Link>
              <Link href={'/features/'}>Custom Software Development</Link>
            </ul>
            <h4 className="text-lg font-semibold my-4 text-white">Design/Editing Services</h4>
            <ul className="space-y-2 text-muted-foreground flex flex-col">
              <Link href={'/features/'}>Graphic Design</Link>
              <Link href={'/features/'}>3D Modals</Link>
              <Link href={'/features/'}>UI/UX Design</Link>
              <Link href={'/features/'}>Video Editing</Link>
              <Link href={'/features/'}>Branding</Link>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Accountant Service</h4>
            <ul className="space-y-2 text-muted-foreground flex flex-col">
              <Link href={'/features/web-design-development'}>Tax Filing</Link>
              <Link href={'/features/'}>GST Setup</Link>
              <Link href={'/features/'}>Bookkeeping</Link>
            </ul>
            <h4 className="text-lg font-semibold my-4 text-white">Digital Marketing Service</h4>
            <ul className="space-y-2 text-muted-foreground flex flex-col">
              <Link href={'/features/web-design-development'}>SMO</Link>
              <Link href={'/features/'}>Google Ads</Link>
              <Link href={'/features/'}>Email Campaigns</Link>
              <Link href={'/features/'}>SEO & ANalytics</Link>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
            <div className="text-muted-foreground space-y-2">
              <p><a href="mailto:info@infinimorphconsulting.com">info@infinimorphconsulting.com</a></p>
              <p>Phone: <a href="tel:+919211579757">(+91) 92115-79757</a></p>
            </div>

            <h4 className="text-lg font-semibold my-4 text-white">Policies</h4>
            <div className="text-muted-foreground space-y-2">
              <p><Link href={'/terms'}>Terms & Condition</Link></p>
              <p><Link href={'/privacy'}>Privacy Policy</Link></p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} InfiniMorph Consulting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
};
