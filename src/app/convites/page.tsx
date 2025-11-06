'use client';

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { ChevronDown, X } from "lucide-react";
import { useState, useMemo, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { convitesList } from "@/data/convitesList";
import { 
  estilosOptions, 
  acabamentosOptions, 
  coresOptions, 
  matchesFilters 
} from "@/data/filtersData";

const Heart = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
  </svg>
);

const Convites = () => {
  const [estilosOpen, setEstilosOpen] = useState(false);
  const [acabamentosOpen, setAcabamentosOpen] = useState(false);
  const [coresOpen, setCoresOpen] = useState(false);
  
  // Filtros selecionados
  const [selectedEstilo, setSelectedEstilo] = useState<string | undefined>();
  const [selectedAcabamento, setSelectedAcabamento] = useState<string | undefined>();
  const [selectedCor, setSelectedCor] = useState<string | undefined>();
  
  // Filtra os convites baseado nos filtros selecionados
  const filteredConvites = useMemo(() => {
    return convitesList.filter(convite => 
      matchesFilters(convite.tags, selectedEstilo, selectedAcabamento, selectedCor)
    );
  }, [selectedEstilo, selectedAcabamento, selectedCor]);
  
  const [displayedCount, setDisplayedCount] = useState(6);
  
  // Refs para os dropdowns
  const estilosRef = useRef<HTMLDivElement>(null);
  const acabamentosRef = useRef<HTMLDivElement>(null);
  const coresRef = useRef<HTMLDivElement>(null);
  
  // Fechar dropdowns ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (estilosRef.current && !estilosRef.current.contains(event.target as Node)) {
        setEstilosOpen(false);
      }
      if (acabamentosRef.current && !acabamentosRef.current.contains(event.target as Node)) {
        setAcabamentosOpen(false);
      }
      if (coresRef.current && !coresRef.current.contains(event.target as Node)) {
        setCoresOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  // Reset displayedCount quando filtros mudam
  useEffect(() => {
    setDisplayedCount(6);
  }, [selectedEstilo, selectedAcabamento, selectedCor]);
  
  const displayedConvites = filteredConvites.slice(0, displayedCount);
  const hasMore = displayedCount < filteredConvites.length;
  
  const loadMore = () => {
    setDisplayedCount(prev => Math.min(prev + 6, filteredConvites.length));
  };
  
  const clearFilters = () => {
    setSelectedEstilo(undefined);
    setSelectedAcabamento(undefined);
    setSelectedCor(undefined);
    setEstilosOpen(false);
    setAcabamentosOpen(false);
    setCoresOpen(false);
  };
  
  const hasActiveFilters = selectedEstilo || selectedAcabamento || selectedCor;
  
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
            {/* Estilos */}
            <div className="relative" ref={estilosRef}>
              <button 
                onClick={() => {
                  setEstilosOpen(!estilosOpen);
                  setAcabamentosOpen(false);
                  setCoresOpen(false);
                }}
                className={`font-serif text-sm tracking-[0.2em] uppercase flex items-center gap-2 transition-colors ${
                  selectedEstilo 
                    ? 'text-primary font-semibold' 
                    : 'text-foreground hover:text-primary'
                }`}
              >
                Estilos <ChevronDown className={`w-4 h-4 transition-transform ${estilosOpen ? 'rotate-180' : ''}`} />
              </button>
              {estilosOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg p-4 min-w-[180px] sm:min-w-[200px] z-50 max-h-[300px] overflow-y-auto">
                  <button
                    onClick={() => {
                      setSelectedEstilo(undefined);
                      setEstilosOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 text-sm hover:bg-primary/10 rounded transition-colors ${
                      !selectedEstilo ? 'bg-primary/20 font-semibold' : ''
                    }`}
                  >
                    Todos os Estilos
                  </button>
                  {estilosOptions.map((estilo) => (
                    <button
                      key={estilo.id}
                      onClick={() => {
                        setSelectedEstilo(estilo.id);
                        setEstilosOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 text-sm hover:bg-primary/10 rounded transition-colors ${
                        selectedEstilo === estilo.id ? 'bg-primary/20 font-semibold' : ''
                      }`}
                    >
                      {estilo.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            {/* Acabamentos */}
            <div className="relative" ref={acabamentosRef}>
              <button 
                onClick={() => {
                  setAcabamentosOpen(!acabamentosOpen);
                  setEstilosOpen(false);
                  setCoresOpen(false);
                }}
                className={`font-serif text-sm tracking-[0.2em] uppercase flex items-center gap-2 transition-colors ${
                  selectedAcabamento 
                    ? 'text-primary font-semibold' 
                    : 'text-foreground hover:text-primary'
                }`}
              >
                Acabamentos <ChevronDown className={`w-4 h-4 transition-transform ${acabamentosOpen ? 'rotate-180' : ''}`} />
              </button>
              {acabamentosOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg p-4 min-w-[180px] sm:min-w-[200px] z-50 max-h-[300px] overflow-y-auto">
                  <button
                    onClick={() => {
                      setSelectedAcabamento(undefined);
                      setAcabamentosOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 text-sm hover:bg-primary/10 rounded transition-colors ${
                      !selectedAcabamento ? 'bg-primary/20 font-semibold' : ''
                    }`}
                  >
                    Todos os Acabamentos
                  </button>
                  {acabamentosOptions.map((acabamento) => (
                    <button
                      key={acabamento.id}
                      onClick={() => {
                        setSelectedAcabamento(acabamento.id);
                        setAcabamentosOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 text-sm hover:bg-primary/10 rounded transition-colors ${
                        selectedAcabamento === acabamento.id ? 'bg-primary/20 font-semibold' : ''
                      }`}
                    >
                      {acabamento.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            {/* Cores */}
            <div className="relative" ref={coresRef}>
              <button 
                onClick={() => {
                  setCoresOpen(!coresOpen);
                  setEstilosOpen(false);
                  setAcabamentosOpen(false);
                }}
                className={`font-serif text-sm tracking-[0.2em] uppercase flex items-center gap-2 transition-colors ${
                  selectedCor 
                    ? 'text-primary font-semibold' 
                    : 'text-foreground hover:text-primary'
                }`}
              >
                Cores <ChevronDown className={`w-4 h-4 transition-transform ${coresOpen ? 'rotate-180' : ''}`} />
              </button>
              {coresOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg p-4 min-w-[180px] sm:min-w-[200px] z-50 max-h-[300px] overflow-y-auto">
                  <button
                    onClick={() => {
                      setSelectedCor(undefined);
                      setCoresOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 text-sm hover:bg-primary/10 rounded transition-colors ${
                      !selectedCor ? 'bg-primary/20 font-semibold' : ''
                    }`}
                  >
                    Todas as Cores
                  </button>
                  {coresOptions.map((cor) => (
                    <button
                      key={cor.id}
                      onClick={() => {
                        setSelectedCor(cor.id);
                        setCoresOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 text-sm hover:bg-primary/10 rounded transition-colors ${
                        selectedCor === cor.id ? 'bg-primary/20 font-semibold' : ''
                      }`}
                    >
                      {cor.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            {/* Botão Limpar Filtros */}
            {hasActiveFilters && (
              <Button 
                variant="outline" 
                onClick={clearFilters}
                className="font-serif text-sm tracking-[0.2em] uppercase flex items-center gap-2"
              >
                <X className="w-4 h-4" />
                Limpar Filtros
              </Button>
            )}
          </div>
          
          {/* Mostrar quantidade de resultados */}
          {hasActiveFilters && (
            <div className="text-center mt-4">
              <p className="text-sm text-muted-foreground">
                {filteredConvites.length} {filteredConvites.length === 1 ? 'convite encontrado' : 'convites encontrados'}
              </p>
            </div>
          )}
        </div>
      </section>
      
      {/* Gallery Grid */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          {filteredConvites.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground mb-4">Nenhum convite encontrado com os filtros selecionados.</p>
              <Button 
                onClick={clearFilters}
                variant="outline"
                className="font-serif tracking-[0.2em] uppercase"
              >
                Limpar Filtros
              </Button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
                {displayedConvites.map((convite) => (
                  <Link 
                    key={convite.id} 
                    href={`/convites/${convite.id}`}
                    className="relative group overflow-hidden rounded-lg aspect-square block"
                  >
                    <Image
                      src={convite.image}
                      alt={convite.nome}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      loading="lazy"
                      quality={85}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-beige-rose via-beige-rose/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="font-serif text-2xl text-foreground mb-2">{convite.nome}</h3>
                        <p className="text-xs tracking-wider text-muted-foreground uppercase">
                          {convite.tags}
                        </p>
                      </div>
                    </div>
                  </Link>
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
            </>
          )}
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Convites;
