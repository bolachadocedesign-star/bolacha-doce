'use client';

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { convitesList } from "@/data/convitesList";

const Heart = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
  </svg>
);

const Convites = () => {
  const [estilosOpen, setEstilosOpen] = useState(false);
  const [acabamentosOpen, setAcabamentosOpen] = useState(false);
  const [coresOpen, setCoresOpen] = useState(false);
  const [displayedCount, setDisplayedCount] = useState(6); // Mostrar 6 primeiros inicialmente
  
  const displayedConvites = convitesList.slice(0, displayedCount);
  const hasMore = displayedCount < convitesList.length;
  
  const loadMore = () => {
    setDisplayedCount(prev => Math.min(prev + 6, convitesList.length));
  };
  
  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />
      <WhatsAppButton />
      
      {/* Hero Banner */}
      <section className="pt-24 sm:pt-32 md:pt-40 pb-12 sm:pb-16 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl tracking-[0.2em] uppercase mb-3 sm:mb-4">
            Explore Nossos Convites
          </h1>
          <p className="text-xs sm:text-sm tracking-[0.2em] uppercase mb-4 sm:mb-6">
            Criações e produções exclusivas feitas com amor
          </p>
          <Heart className="w-6 h-6 sm:w-8 sm:h-8 mx-auto" />
        </div>
      </section>
      
      {/* Filters */}
      <section className="py-6 sm:py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 md:gap-12 lg:gap-16">
            <div className="relative">
              <button 
                onClick={() => setEstilosOpen(!estilosOpen)}
                className="font-serif text-sm tracking-[0.2em] uppercase flex items-center gap-2 text-foreground hover:text-primary transition-colors"
              >
                Estilos <ChevronDown className="w-4 h-4" />
              </button>
              {estilosOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg p-4 min-w-[180px] sm:min-w-[200px] z-50">
                  <label className="flex items-center gap-2 mb-2 text-sm hover:text-primary cursor-pointer">
                    <input type="radio" name="estilo" className="text-primary" />
                    <span>Moderno</span>
                  </label>
                  <label className="flex items-center gap-2 mb-2 text-sm hover:text-primary cursor-pointer">
                    <input type="radio" name="estilo" />
                    <span>Aquarela</span>
                  </label>
                </div>
              )}
            </div>
            
            <div className="relative">
              <button 
                onClick={() => setAcabamentosOpen(!acabamentosOpen)}
                className="font-serif text-sm tracking-[0.2em] uppercase flex items-center gap-2 text-foreground hover:text-primary transition-colors"
              >
                Acabamentos <ChevronDown className="w-4 h-4" />
              </button>
              {acabamentosOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg p-4 min-w-[180px] sm:min-w-[200px] z-50">
                  <label className="flex items-center gap-2 mb-2 text-sm hover:text-primary cursor-pointer">
                    <input type="radio" name="acabamento" />
                    <span>Lacre de Cera</span>
                  </label>
                </div>
              )}
            </div>
            
            <div className="relative">
              <button 
                onClick={() => setCoresOpen(!coresOpen)}
                className="font-serif text-sm tracking-[0.2em] uppercase flex items-center gap-2 text-foreground hover:text-primary transition-colors"
              >
                Cores <ChevronDown className="w-4 h-4" />
              </button>
              {coresOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg p-4 min-w-[180px] sm:min-w-[200px] z-50">
                  <label className="flex items-center gap-2 mb-2 text-sm hover:text-primary cursor-pointer">
                    <input type="radio" name="cor" />
                    <span>Verde</span>
                  </label>
                  <label className="flex items-center gap-2 mb-2 text-sm hover:text-primary cursor-pointer">
                    <input type="radio" name="cor" />
                    <span>Todas as Cores</span>
                  </label>
                </div>
              )}
            </div>
            
            <Button variant="outline" className="font-serif text-sm tracking-[0.2em] uppercase">
              Por Filtro
            </Button>
          </div>
        </div>
      </section>
      
      {/* Gallery Grid */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {displayedConvites.map((convite) => (
              <div key={convite.id} className="relative group overflow-hidden rounded-lg aspect-square">
                <Image
                  src={convite.image}
                  alt={convite.nome}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-beige-rose via-beige-rose/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-serif text-2xl text-foreground mb-2">{convite.nome}</h3>
                    <p className="text-xs tracking-wider text-muted-foreground uppercase">
                      {convite.tags}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {hasMore && (
            <div className="text-center">
              <Button 
                onClick={loadMore}
                variant="outline" 
                className="font-serif tracking-[0.2em] uppercase border-primary text-primary hover:bg-primary hover:text-white"
              >
                +convites
              </Button>
            </div>
          )}
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Convites;
