import Image from 'next/image';

export const Footer = () => {
  return(
    <footer className="bg-black text-card-foreground py-8 mt-auto border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Image src={'/assets/icons/logo.png'} width={200} height={600} alt='logo image'/>
            <h3 className="text-xl font-bold mb-4">ModernServices</h3>
            <p className="text-muted-foreground">
              Professional services to help your business grow and succeed online.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Web Development</li>
              <li>UI/UX Design</li>
              <li>App Development</li>
              <li>Branding</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="text-muted-foreground space-y-2">
              <p>Email: info@infinimorphconsulting.com</p>
              <p>Phone: (+91) 92115-79757</p>
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
