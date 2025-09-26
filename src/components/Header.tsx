'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/sobre', label: 'Sobre' },
    { href: '/convites', label: 'Convites' },
    { href: '/contato', label: 'Contato' },
  ];

  return (
    <header className="bg-[#fce6d4] shadow-lg w-full">
      <div className="flex items-center justify-center px-4 py-2">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center w-full max-w-6xl">
          {/* Left Navigation */}
          <div className="flex gap-8">
            <Link href="/">
              <button className={`px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white hover:-translate-y-1 hover:shadow-lg ${
                pathname === '/' ? 'bg-white text-[#5f4b3b]' : 'bg-[#fce6d4] text-[#5f4b3b] border-2 border-[#fce6d4]'
              }`}>
                Home
              </button>
            </Link>
            <Link href="/sobre">
              <button className={`px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white hover:-translate-y-1 hover:shadow-lg ${
                pathname === '/sobre' ? 'bg-white text-[#5f4b3b]' : 'bg-[#fce6d4] text-[#5f4b3b] border-2 border-[#fce6d4]'
              }`}>
                Sobre
              </button>
            </Link>
          </div>

          {/* Logo - Center */}
          <div className="flex-1 flex justify-center px-12">
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/images/bolacha-doce-logo.png"
                alt="Bolacha Doce - Convites personalizados em Belo Horizonte"
                width={80}
                height={80}
                className="h-16 w-auto md:h-20"
                priority
                quality={90}
              />
            </Link>
          </div>

          {/* Right Navigation */}
          <div className="flex gap-8">
            <Link href="/convites">
              <button className={`px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white hover:-translate-y-1 hover:shadow-lg ${
                pathname === '/convites' ? 'bg-white text-[#5f4b3b]' : 'bg-[#fce6d4] text-[#5f4b3b] border-2 border-[#fce6d4]'
              }`}>
                Convites
              </button>
            </Link>
            <Link href="/contato">
              <button className={`px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white hover:-translate-y-1 hover:shadow-lg ${
                pathname === '/contato' ? 'bg-white text-[#5f4b3b]' : 'bg-[#fce6d4] text-[#5f4b3b] border-2 border-[#fce6d4]'
              }`}>
                Contato
              </button>
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center justify-between w-full">
          <div className="flex-1"></div>
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/bolacha-doce-logo.png"
              alt="Bolacha Doce - Convites personalizados em Belo Horizonte"
              width={60}
              height={60}
              className="h-12 w-auto"
              priority
              quality={90}
            />
          </Link>
          <button
            onClick={toggleMenu}
            className="p-2 rounded-md text-[#5f4b3b] hover:bg-white/50 transition-colors flex-1 flex justify-end"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span className={`block h-0.5 w-6 bg-[#5f4b3b] transition-transform ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`block h-0.5 w-6 bg-[#5f4b3b] transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-0.5 w-6 bg-[#5f4b3b] transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="px-4 py-4 space-y-2 bg-[#fce6d4] border-t border-[#5f4b3b]/20">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} onClick={toggleMenu}>
              <button className={`w-full text-left px-4 py-3 rounded-full font-semibold text-lg transition-all duration-300 ${
                pathname === item.href 
                  ? 'bg-white text-[#5f4b3b]' 
                  : 'bg-[#fce6d4] text-[#5f4b3b] border-2 border-[#fce6d4] hover:bg-white hover:-translate-y-1 hover:shadow-lg'
              }`}>
                {item.label}
              </button>
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}

