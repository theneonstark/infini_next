"use client";

import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-black/40 backdrop-blur-md z-50">
      <div className="px-4">
        <div className="container bg-transparent">
          <div className=" flex items-center justify-between">
            <div className="py-2 flex items-center gap-3">
              <Link href={'/'}>
                <Image 
                  src={'/assets/icons/logo.png'} 
                  className="relative mt-1 w-full h-full" 
                  alt="Logo Not Found"
                  width={120}
                  height={120}
                />
              </Link>
            </div>
            <div className="sm:hidden">
              <button 
                onClick={toggleMobileMenu}
                className="border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg"
              >
                {isMobileMenuOpen ? <X className="text-white" /> : <Menu className="text-white" />}
              </button>
            </div>
            <nav className="hidden sm:flex text-white gap-6 items-center">
              <Link href="/" className="text-opacity-60 text-white hover:text-opacity-100 transition">Home</Link>
              <Link href="/about" className="text-opacity-60 text-white hover:text-opacity-100 transition">About</Link>
              <Link href="/features" className="text-opacity-60 text-white hover:text-opacity-100 transition">Features</Link>
              <Link href="/updates" className="text-opacity-60 text-white hover:text-opacity-100 transition">Blog</Link>
              <Link href="/help" className="text-opacity-60 text-white hover:text-opacity-100 transition">Help</Link>
              {/* <Link href="/customers" className="text-opacity-60 text-white hover:text-opacity-100 transition">Customers</Link> */}
              <Link href="/contact">
                <button className="bg-white py-2 px-4 rounded-lg text-black">Get for free</button>
              </Link>
            </nav>
          </div>
          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="sm:hidden pb-4">
              <nav className="flex flex-col gap-4 text-white text-center">
                <Link 
                  href="/about" 
                  className="text-opacity-60 text-white hover:text-opacity-100 transition py-2"
                  onClick={toggleMobileMenu}
                >
                  About
                </Link>
                <Link 
                  href="/features" 
                  className="text-opacity-60 text-white hover:text-opacity-100 transition py-2"
                  onClick={toggleMobileMenu}
                >
                  Features
                </Link>
                <Link 
                  href="/help" 
                  className="text-opacity-60 text-white hover:text-opacity-100 transition py-2"
                  onClick={toggleMobileMenu}
                >
                  Help
                </Link>
                <Link 
                  href="/customers" 
                  className="text-opacity-60 text-white hover:text-opacity-100 transition py-2"
                  onClick={toggleMobileMenu}
                >
                  Customers
                </Link>
                <Link 
                  href="/contact"
                  onClick={toggleMobileMenu}
                >
                  <button className="bg-white py-2 px-4 rounded-lg text-black w-full">
                    Get for free
                  </button>
                </Link>
              </nav>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};