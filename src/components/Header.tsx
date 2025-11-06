'use client';

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Search, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const isActive = (path: string) => pathname === path;
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-9 py-4 sm:py-5 lg:py-7 relative">
        {/* Desktop Layout */}
        <div className="hidden lg:flex items-center justify-between">
          <div className="flex items-center gap-8 xl:gap-12 flex-1 justify-end xl:pr-72">
            <Link 
              href="/" 
              className={`font-serif text-base tracking-[0.2em] uppercase transition-colors ${
                isActive("/") ? "text-primary font-semibold" : "text-foreground hover:text-primary"
              }`}
            >
              Home
            </Link>
            <Link 
              href="/sobre" 
              className={`font-serif text-base tracking-[0.2em] uppercase transition-colors ${
                isActive("/sobre") ? "text-primary font-semibold" : "text-foreground hover:text-primary"
              }`}
            >
              Sobre
            </Link>
          </div>
          
          <Link href="/" className="absolute left-1/2 -translate-x-1/2">
            <Image
              src="/images/bolacha-doce-logo.png"
              alt="Bolacha Doce - Convites personalizados em Belo Horizonte"
              width={100}
              height={100}
              className="h-12 lg:h-16 w-auto"
              priority
            />
          </Link>
          
          <div className="flex items-center gap-8 xl:gap-12 flex-1 justify-start xl:pl-72">
            <Link 
              href="/convites" 
              className={`font-serif text-base tracking-[0.2em] uppercase transition-colors ${
                isActive("/convites") ? "text-primary font-semibold" : "text-foreground hover:text-primary"
              }`}
            >
              Convites
            </Link>
            <Link 
              href="/contato" 
              className={`font-serif text-base tracking-[0.2em] uppercase transition-colors ${
                isActive("/contato") ? "text-primary font-semibold" : "text-foreground hover:text-primary"
              }`}
            >
              Contato
            </Link>
            <Button variant="ghost" className="hover:text-primary p-2">
              <Search className="h-5 w-5" />
            </Button>
          </div>
        </div>
        
        {/* Mobile Layout */}
        <div className="lg:hidden flex items-center justify-between">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/bolacha-doce-logo.png"
              alt="Bolacha Doce - Convites personalizados em Belo Horizonte"
              width={80}
              height={80}
              className="h-12 w-auto"
              priority
            />
          </Link>
          
          <Button 
            variant="ghost" 
            className="hover:text-primary p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg">
            <div className="container mx-auto px-4 py-6 space-y-4">
              <Link 
                href="/" 
                onClick={closeMenu}
                className={`block font-serif text-base tracking-[0.2em] uppercase transition-colors py-2 ${
                  isActive("/") ? "text-primary font-semibold" : "text-foreground hover:text-primary"
                }`}
              >
                Home
              </Link>
              <Link 
                href="/sobre" 
                onClick={closeMenu}
                className={`block font-serif text-base tracking-[0.2em] uppercase transition-colors py-2 ${
                  isActive("/sobre") ? "text-primary font-semibold" : "text-foreground hover:text-primary"
                }`}
              >
                Sobre
              </Link>
              <Link 
                href="/convites" 
                onClick={closeMenu}
                className={`block font-serif text-base tracking-[0.2em] uppercase transition-colors py-2 ${
                  isActive("/convites") ? "text-primary font-semibold" : "text-foreground hover:text-primary"
                }`}
              >
                Convites
              </Link>
              <Link 
                href="/contato" 
                onClick={closeMenu}
                className={`block font-serif text-base tracking-[0.2em] uppercase transition-colors py-2 ${
                  isActive("/contato") ? "text-primary font-semibold" : "text-foreground hover:text-primary"
                }`}
              >
                Contato
              </Link>
              <Button variant="ghost" className="hover:text-primary p-2 w-full justify-start">
                <Search className="h-5 w-5 mr-2" />
                Buscar
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
