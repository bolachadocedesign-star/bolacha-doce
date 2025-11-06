'use client';

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const pathname = usePathname();
  
  const isActive = (path: string) => pathname === path;
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto px-9 py-7 relative">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-12 flex-1 justify-end pr-72">
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
              className="h-16 w-auto"
              priority
            />
          </Link>
          
          <div className="flex items-center gap-12 flex-1 justify-start pl-72">
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
      </nav>
    </header>
  );
};
