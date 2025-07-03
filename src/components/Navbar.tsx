import Image from 'next/image';
import { Menu } from 'lucide-react';

export const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-black/60 backdrop-blur-md z-50">
      <div className="px-4">
        <div className="container bg-transparent">
          <div className="py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image 
                src={'/assets/icons/logo.png'} 
                className="relative mt-1 w-full h-full" 
                alt="Logo Not Found"
                width={100}
                height={100}
              />
            </div>
            <div className="border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden">
              <Menu/>
            </div>
            <nav className="text-white gap-6 items-center hidden sm:flex">
              <a href="#" className="text-opacity-60 text-white hover:text-opacity-100 transition">About</a>
              <a href="#" className="text-opacity-60 text-white hover:text-opacity-100 transition">Features</a>
              <a href="#" className="text-opacity-60 text-white hover:text-opacity-100 transition">Updates</a>
              <a href="#" className="text-opacity-60 text-white hover:text-opacity-100 transition">Help</a>
              <a href="#" className="text-opacity-60 text-white hover:text-opacity-100 transition">Customers</a>
              <button className="bg-white py-2 px-4 rounded-lg text-black">Get for free</button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};