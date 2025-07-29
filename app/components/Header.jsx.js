'use client';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', text: 'About Us' },
    { href: '#what-we-do', text: 'What We Do' },
    { href: '#events', text: 'Events' },
    { href: '#gallery', text: 'Gallery' },
    { href: '#contact', text: 'Contact' },
  ];

  return (
    <header className={`bg-white/80 backdrop-blur-md shadow-md fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-3'}`}>
      <nav className="container mx-auto px-6 flex justify-between items-center">
        <Link href="#home" className="flex items-center space-x-2">
          <Image src="https://i.ibb.co/68vwmx4/asob-logo.png" alt="ASOB Logo" width={48} height={48} />
        </Link>
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} className="text-slate-600 hover:text-red-600 font-semibold">{link.text}</Link>
          ))}
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
      {/* Mobile Menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden px-6 pb-4 flex flex-col space-y-4`}>
         {navLinks.map(link => (
            <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="text-slate-600 hover:text-red-600 font-semibold">{link.text}</Link>
          ))}
      </div>
    </header>
  );
}